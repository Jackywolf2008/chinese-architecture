// 应县木塔的场景钩子：剖切、分层、地震、构件实验室。几何在 model.js。
import { LEVELNAME, PAGES } from './content.js';
import { assemble } from './model.js';

const XFADE = { wall: 0.06, lattice: 0.06, roof: 0.07, soffit: 0.05, fascia: 0.08, ridge: 0.1, deck: 0.14, rail: 0.2, plaque: 0.1, bell: 0.15, stair: 0.35, stone: 0.5, buddha: 0.35, iron: 0.6, chain: 0.6 };
const FOCUSCOL = { brace: 0xd84a2a, chain: 0xe0a040, stair: 0xe0a040, col: 0xe0a040, brk: 0xe0a040, ang: 0xe0a040, buddha: 0xe0a040 };
const lerp = (a, b, k) => a + (b - a) * k;
const ease = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

export function createStage(ctx) {
  const { reduced, fast } = ctx;
  const world = assemble(ctx);
  const { steps, FL, LBL, oct, LT, LSIDE, labAnchor, byLevel, MATS, CUT, CUTY, LABS, labRoot, root, dimG, ground, INFO, CAT2PAGE, LABTIP } = world;
  const CATS = Object.keys(MATS);
  const S = { cut: 0, cutY: 0, xray: 0, explode: 0, labEx: 0, sway: 0, lean: 0, iso: 0 };
  const TG = Object.assign({}, S);
  let cutYval = 9;
  let focus = [];
  let labId = null;
  let dimOn = false;
  let spin = 0;
  let hoverCat = null;
  let hoverText = '';
  let hvT = 0;
  let labelOverride = null;
  let pickT = 0;
  const catOp = {};
  const catEm = {};
  CATS.forEach(c => { catOp[c] = 1; catEm[c] = 0; });

  function apply(st) {
    TG.cut = st.cut ? 1 : 0;
    if (st.cutY != null) { cutYval = st.cutY; TG.cutY = 1; }
    else TG.cutY = 0;
    TG.xray = st.xray ? 1 : 0;
    TG.explode = st.explode ? 1 : 0;
    TG.sway = st.sway ? 1 : 0;
    TG.lean = st.lean || 0;
    focus = st.focus || [];
    TG.iso = st.iso ? 1 : 0;
    TG.labEx = st.labEx || 0;
    if (st.lab !== labId) {
      labId = st.lab || null;
      S.labEx = 0;
      Object.entries(LABS).forEach(([k, g]) => { g.visible = k === labId; });
      labRoot.visible = !!labId;
      root.visible = !labId;
    }
    dimOn = !!st.dim;
    spin = reduced ? 0 : (st.spin || 0);
    labelOverride = null;
  }

  function syncBuild(env) {
    const layoutOn = env.buildT !== null && env.buildT < steps.length;
    steps.forEach((s, i) => {
      s.group.visible = i < env.shown;
      s.group.children.forEach(m => { if (m.userData.cat === 'layout') m.visible = layoutOn; });
    });
  }

  function place(now) {
    const tm = now / 1000;
    const w = reduced ? 3 : 7.5;
    const th = -S.lean * 0.085;
    const py = FL[1].y;
    const sn = Math.sin(th);
    const cs = Math.cos(th);
    steps.forEach(s => {
      const g = s.group;
      const L = s.level;
      let x = 0;
      let y = L * 4.6 * S.explode;
      let rz = 0;
      if (L >= 3) { rz += th; x += py * sn; y += py * (1 - cs); }
      if (S.sway > 0.001) {
        const f = Math.pow(L / 10, 1.4);
        x += S.sway * (0.28 * Math.sin(w * tm) + 1.1 * f * Math.sin(w * tm - 0.7));
        rz += -S.sway * 0.012 * f * Math.cos(w * tm - 0.7);
      }
      const d = s.dropK === undefined ? 1 : s.dropK;
      y += (1 - (1 - Math.pow(1 - d, 3))) * 9;
      g.position.set(x, y, 0);
      g.rotation.z = rz;
    });
    ground.position.x = S.sway * 0.28 * Math.sin(w * tm);
  }

  function mats(dt) {
    let act = false;
    const k = fast ? 1 : 1 - Math.exp(-dt * 5);
    for (const c of CATS) {
      let op = 1;
      if (XFADE[c] !== undefined) op = lerp(1, XFADE[c], S.xray);
      if (focus.length && !focus.includes(c)) op = Math.min(op, lerp(1, 0.1, S.iso));
      if (c === 'dim' || c === 'layout') op = 1;
      const em = focus.includes(c) || c === hoverCat ? 1 : 0;
      const o0 = catOp[c];
      const e0 = catEm[c];
      catOp[c] = Math.abs(op - o0) < 0.004 ? op : lerp(o0, op, k);
      catEm[c] = Math.abs(em - e0) < 0.004 ? em : lerp(e0, em, k);
      if (catOp[c] !== o0 || catEm[c] !== e0) act = true;
      for (const m of MATS[c]) {
        const o = catOp[c];
        const tr = o < 0.995;
        if (m.transparent !== tr) { m.transparent = tr; m.needsUpdate = true; }
        m.opacity = o;
        m.depthWrite = o > 0.55;
        if (c !== 'dim' && c !== 'layout') {
          m.emissive.set(FOCUSCOL[c] || 0xe0a040);
          m.emissiveIntensity = catEm[c] * (0.35 + 0.15 * Math.sin(performance.now() / 300));
        }
      }
    }
    return act || focus.length > 0 || !!hoverCat;
  }

  function scalars(dt) {
    let act = false;
    const k = fast ? 1 : 1 - Math.exp(-dt * (reduced ? 20 : 2.6));
    for (const key in S) {
      const v = S[key];
      const t = TG[key];
      if (Math.abs(v - t) < 0.002) S[key] = t;
      else { S[key] = lerp(v, t, key === 'labEx' && !fast ? 1 - Math.exp(-dt * 2) : k); act = true; }
    }
    CUT.constant = S.cut < 0.002 ? 1e4 : lerp(48, 0, ease(S.cut));
    CUTY.constant = S.cutY < 0.002 ? 1e4 : lerp(90, cutYval, ease(S.cutY));
    if (labId) {
      for (const m of LABS[labId].children) m.position.copy(m.userData.base).addScaledVector(m.userData.ex, S.labEx);
    }
    dimG.visible = dimOn && !labId;
    return act || S.sway > 0;
  }

  function prepareLabels() {
    root.updateMatrixWorld(true);
    if (labId) labRoot.updateMatrixWorld(true);
  }
  function labelPoint(id) {
    let text;
    let point;
    if (LT[id]) {
      text = LT[id][0];
      const L = LT[id][2];
      point = LT[id][1].clone();
      if (L >= 0 && byLevel[L]) {
        byLevel[L][0].updateMatrixWorld();
        point.applyMatrix4(byLevel[L][0].matrixWorld);
      }
    } else if (labId) {
      text = id;
      point = labAnchor(LABS[labId], id);
    }
    if (!point) return null;
    return { point, text, flip: LSIDE[id] };
  }
  function filterLabels(ids) { return labelOverride || ids; }

  function pickables() {
    if (labId) return LABS[labId].children;
    const objs = [];
    root.children.forEach(g => { if (g.visible) g.children.forEach(m => { if (m.visible) objs.push(m); }); });
    return objs;
  }
  function acceptHit(h) {
    if (CUT.distanceToPoint(h.point) < 0 || CUTY.distanceToPoint(h.point) < 0) return false;
    const c = h.object.userData.cat;
    return !c || catOp[c] > 0.3;
  }
  function onNavigate() {
    focus = [];
    hoverCat = null;
    hoverText = '';
    labelOverride = null;
    clearTimeout(pickT);
  }
  function onPick(h, page, api) {
    const o = h.object;
    if (labId) {
      const n = o.userData.name;
      if (n) { labelOverride = [n]; api.caption(n, LABTIP[n] || ''); api.kick(); }
      return;
    }
    const c = o.userData.cat;
    const dest = CAT2PAGE[c];
    if (dest && dest !== page.id) { api.go(dest); return; }
    const inf = INFO[c] || [c, ''];
    focus = [c];
    api.caption(`${inf[0]}（${LEVELNAME[o.userData.level]}）`, inf[1]);
    clearTimeout(pickT);
    pickT = setTimeout(() => api.apply(false), 2600);
    api.kick();
  }
  function onHover(h, page) {
    if (!h) {
      const dirty = hoverCat !== null;
      hoverCat = null;
      hoverText = '';
      return { text: '', dirty };
    }
    const now = performance.now();
    if (now - hvT < 60) return { text: hoverText, dirty: false };
    hvT = now;
    let cat = null;
    let text = '';
    if (labId) text = h.object.userData.name || '';
    else {
      cat = h.object.userData.cat;
      const dest = CAT2PAGE[cat];
      text = (INFO[cat] || [cat])[0] + (dest && dest !== page.id ? `　点击进入「${PAGES[dest].t}」›` : '');
    }
    const dirty = cat !== hoverCat;
    hoverCat = cat;
    hoverText = text;
    return { text, dirty };
  }
  function inkHide(o) {
    if (o === ground) return true;
    const c = o.userData.cat || o.material?.userData?.cat;
    return !!(c && catOp[c] < 0.5);
  }
  function buildCam(k) {
    if (k <= 0) return 'build0';
    if (k >= steps.length) return 'wide';
    const s = steps[k - 1];
    if (s.tag === 'layout') return 'layout';
    if (s.tag === 'spire') return 'top';
    if (s.tag === 'statue') {
      const f = FL[(s.level - 1) / 2];
      return { t: [0, f.y + (s.level === 1 ? 5 : 2.6), 0], w: s.level === 1 ? 30 : 22, h: s.level === 1 ? 16 : 10, th: 0, ph: 1.5 };
    }
    let top = 0;
    for (let i = 0; i < k; i++) top = Math.max(top, steps[i].top);
    return { t: [0, Math.max(5, top * 0.52), 0], w: 46, h: Math.max(22, top + 8), th: 0.35 + k * 0.04, ph: top < 20 ? 1.22 : 1.38 };
  }

  return {
    steps, S, TG,
    get spin() { return spin; },
    cams: {
      dou1Cam: { t: oct(7, 1 / 3, FL[0].A + 1.2, FL[0].yb + 1.2), w: 12, h: 8, th: 0.55, ph: 1.62 },
      cornerCam: { t: LBL.corner.clone(), w: 9, h: 7, th: 0.95, ph: 1.42 },
    },
    inkPlanes: [CUT, CUTY],
    apply, scalars, mats, place, syncBuild, prepareLabels, labelPoint, filterLabels,
    pickables, acceptHit, onPick, onHover, onNavigate, inkHide, buildCam,
  };
}
