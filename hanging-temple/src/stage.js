// 悬空寺的场景钩子。几何在 model.js，翻页和导览交给阅读器。
import { PAGES } from './content.js';
import { createWorld } from './model.js';

const XFADE = { rock: 0.16, env: 0.25, tree: 0.2, water: 0.3, wall: 0.08, roof: 0.22, glaze: 0.2, deck: 0.16, rail: 0.2, plaque: 0.15, stair: 0.2, cave: 0.2 };
const FOCUS = { beam: 0xe0a040, wedge: 0xe0a040, post: 0xe07050, col: 0xe0a040, figure: 0xe0a040 };
const NO_INK = new Set(['rock', 'env', 'tree', 'water']);
const lerp = (a, b, k) => a + (b - a) * k;
const ease = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

export function createStage(ctx) {
  const { THREE, scene, reduced, fast, mobile } = ctx;
  const world = createWorld();
  const { cliff, root, env, lab, steps, labels, CUT, ROCK_CUT, byCat, INFO, CAT_PAGE } = world;
  scene.add(cliff, root, env, lab);

  const hemi = new THREE.HemisphereLight(0xf4efe4, 0x6d5c48, 1.35);
  const sun = new THREE.DirectionalLight(0xffe6c4, 2.4);
  sun.position.set(22, 78, 52);
  sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -36, right: 36, top: 48, bottom: -8, near: 20, far: 180 });
  sun.shadow.bias = -0.00045;
  sun.target.position.set(-2, 30, 0);
  const fill = new THREE.DirectionalLight(0xc5d4dc, 0.7);
  fill.position.set(-30, 24, 20);
  scene.add(hemi, sun, sun.target, fill);

  const S = { cut: 0, xray: 0, explode: 0, sway: 0, labEx: 0, spin: 0, iso: 0 };
  const TG = { ...S };
  let focus = [];
  let labOn = false;
  const catOp = {};
  const catEm = {};
  Object.keys(byCat).forEach(c => { catOp[c] = 1; catEm[c] = 0; });

  function apply(st) {
    TG.cut = st.cut ? 1 : 0;
    TG.xray = st.xray ? 1 : 0;
    TG.explode = st.explode ? 1 : 0;
    TG.sway = st.sway ? 1 : 0;
    TG.labEx = st.labEx || 0;
    TG.spin = reduced ? 0 : (st.spin || 0);
    TG.iso = st.iso ? 1 : 0;
    focus = st.focus || [];
    const wantLab = !!st.lab;
    if (wantLab !== labOn) {
      labOn = wantLab;
      lab.visible = wantLab;
      root.visible = cliff.visible = env.visible = !wantLab;
    }
  }

  function syncBuild(envNow) {
    steps.forEach((s, i) => { s.group.visible = !labOn && i < envNow.shown; });
  }

  function place(now) {
    const tm = now / 1000;
    steps.forEach(s => {
      const k = s.drop === undefined ? 1 : s.drop;
      const e = 1 - Math.pow(1 - k, 3);
      let y = s.level * 2.4 * S.explode;
      let z = 0;
      if (s.tag === 'beam' || s.tag === 'socket') z = (1 - e) * -2.4;
      else y += (1 - e) * 6;
      if (S.sway > 0.001 && s.level > 0) y += Math.sin(tm * 6 + s.level) * S.sway * 0.12;
      s.group.position.set(S.sway * Math.sin(tm * 6) * 0.18, y, z);
    });
    if (world.beam) world.beam.position.z = (world.beam.userData.baseZ || 0) + S.labEx * 1.15;
  }

  function mats(dt) {
    let act = false;
    const k = fast ? 1 : 1 - Math.exp(-dt * 5);
    for (const c of Object.keys(byCat)) {
      let op = 1;
      if (S.xray > 0.01 && XFADE[c] !== undefined) op = lerp(1, XFADE[c], S.xray);
      if (S.iso > 0.01 && focus.length && !focus.includes(c)) op = Math.min(op, lerp(1, 0.1, S.iso));
      const em = focus.includes(c) ? 1 : 0;
      const o0 = catOp[c] ?? 1;
      const e0 = catEm[c] ?? 0;
      catOp[c] = Math.abs(op - o0) < 0.004 ? op : lerp(o0, op, k);
      catEm[c] = Math.abs(em - e0) < 0.004 ? em : lerp(e0, em, k);
      if (catOp[c] !== o0 || catEm[c] !== e0) act = true;
      for (const m of byCat[c]) {
        const o = catOp[c];
        const tr = o < 0.995;
        if (m.transparent !== tr) { m.transparent = tr; m.needsUpdate = true; }
        m.opacity = o;
        m.depthWrite = o > 0.55;
        if (FOCUS[c]) {
          m.emissive.set(FOCUS[c]);
          m.emissiveIntensity = catEm[c] * (0.28 + 0.12 * Math.sin(performance.now() / 300));
        }
      }
    }
    return act || S.sway > 0 || focus.length > 0;
  }

  function scalars(dt) {
    let act = false;
    const k = fast ? 1 : 1 - Math.exp(-dt * (reduced ? 20 : 2.6));
    for (const key of Object.keys(S)) {
      if (Math.abs(S[key] - TG[key]) < 0.002) S[key] = TG[key];
      else { S[key] = lerp(S[key], TG[key], key === 'labEx' && !fast ? 1 - Math.exp(-dt * 2.2) : k); act = true; }
    }
    // 剖开的是岩壁，楼阁留在原处。切到梁尾木楔那一段，石窝里的梁就露出来。
    CUT.constant = 80;
    ROCK_CUT.constant = S.cut < 0.002 ? 40 : lerp(4, -5.15, ease(S.cut));
    return act;
  }

  const _p = new THREE.Vector3();
  function prepareLabels() {
    root.updateMatrixWorld(true);
    lab.updateMatrixWorld(true);
  }
  function labelPoint(id) {
    const lb = labels[id];
    if (!lb) return null;
    _p.set(lb.x, lb.y, lb.z);
    let vis = true;
    if (lb.space === 'lab') {
      vis = lab.visible;
      _p.applyMatrix4(lab.matrixWorld);
    } else if (lb.step) {
      vis = lb.step.group.visible;
      _p.applyMatrix4(lb.step.group.matrixWorld);
    }
    if (!vis) return null;
    return { point: _p.clone(), text: lb.text };
  }

  function pickables() {
    const objs = [];
    (labOn ? lab : root).traverse(o => { if (o.isMesh && o.visible) objs.push(o); });
    if (!labOn) cliff.traverse(o => { if (o.isMesh && o.visible) objs.push(o); });
    return objs;
  }
  function acceptHit(h) { return CUT.distanceToPoint(h.point) > -0.05; }
  function onPick(h, page, api) {
    const o = h.object;
    if (labOn && o.userData.name) { api.caption(o.userData.name, o.userData.tip || ''); return; }
    const cat = o.userData.cat;
    const dest = o.userData.page || CAT_PAGE[cat];
    if (dest && dest !== page.id && PAGES[dest]) { api.go(dest); return; }
    const inf = INFO[cat] || [cat, ''];
    api.caption(inf[0], inf[1]);
    api.kick();
  }
  function onHover(h, page) {
    let text = '';
    if (h) {
      if (labOn && h.object.userData.name) text = h.object.userData.name;
      else {
        const cat = h.object.userData.cat;
        const dest = h.object.userData.page || CAT_PAGE[cat];
        const name = (INFO[cat] || [cat])[0];
        text = name + (dest && dest !== page.id && PAGES[dest] ? `　点击进入「${PAGES[dest].t}」›` : '');
      }
    }
    return { text };
  }
  function inkHide(o) {
    const c = o.userData.cat || o.material?.userData?.cat;
    return NO_INK.has(c) || !!(c && catOp[c] < 0.45);
  }
  function buildCam(k) {
    if (k <= 0) return 'build0';
    if (k >= steps.length) return 'wide';
    return steps[k - 1].cam || 'wide';
  }

  return {
    steps, S, TG, cams: {},
    get spin() { return S.spin; },
    apply, scalars, mats, place, syncBuild, prepareLabels, labelPoint,
    pickables, acceptHit, onPick, onHover, inkHide, buildCam,
  };
}
