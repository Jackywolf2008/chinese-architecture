import * as THREE from 'three';
import { PAGES, TOUR, CAM } from './content.js';
import { createWorld } from './model.js';

const $ = id => document.getElementById(id);
const XFADE = { rock: 0.16, env: 0.25, tree: 0.2, water: 0.3, wall: 0.08, roof: 0.22, glaze: 0.2, deck: 0.16, rail: 0.2, plaque: 0.15, stair: 0.2, cave: 0.2 };
const FOCUS = { beam: 0xe0a040, wedge: 0xe0a040, post: 0xe07050, col: 0xe0a040, figure: 0xe0a040 };
const NO_INK = new Set(['rock', 'env', 'tree', 'water']);

export async function boot() {
  const canvas = $('gl');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false, preserveDrawingBuffer: true });
  } catch (e) {
    $('err').hidden = false;
    $('err').textContent = '三维场景没有加载成功。' + (e && e.message ? e.message : '');
    $('loading').classList.add('gone');
    return;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.localClippingEnabled = true;
  const MOBILE = Math.min(screen.width, screen.height) < 600;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, MOBILE ? 1.5 : 1.75));

  await Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise(r => setTimeout(r, 1200))]);

  const world = createWorld();
  const { cliff, root, env, lab, steps, labels, CUT, ROCK_CUT, byCat, INFO, CAT_PAGE } = world;
  const scene = new THREE.Scene();
  scene.add(cliff, root, env, lab);

  const cam = new THREE.PerspectiveCamera(36, 1, 0.2, 800);
  const hemi = new THREE.HemisphereLight(0xf4efe4, 0x6d5c48, 1.35);
  const sun = new THREE.DirectionalLight(0xffe6c4, 2.4);
  sun.position.set(22, 78, 52);
  sun.castShadow = true;
  sun.shadow.mapSize.set(MOBILE ? 1024 : 2048, MOBILE ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -36, right: 36, top: 48, bottom: -8, near: 20, far: 180 });
  sun.shadow.bias = -0.00045;
  sun.target.position.set(-2, 30, 0);
  const fill = new THREE.DirectionalLight(0xc5d4dc, 0.7);
  fill.position.set(-30, 24, 20);
  scene.add(hemi, sun, sun.target, fill);

  const stage = $('stage');
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches || /[?&]fast/.test(location.search);
  const FAST = /[?&]fast/.test(location.search);

  // 墨线只勾楼阁，崖壁留着石色
  const inkRT = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  inkRT.depthTexture = new THREE.DepthTexture(1, 1);
  inkRT.depthTexture.type = THREE.UnsignedIntType;
  const inkN = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
  const inkQ = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    transparent: true, depthTest: false, depthWrite: false,
    uniforms: { tN: { value: inkRT.texture }, tD: { value: inkRT.depthTexture }, px: { value: new THREE.Vector2(1, 1) }, nf: { value: new THREE.Vector2(cam.near, cam.far) }, ink: { value: new THREE.Vector3(0.16, 0.12, 0.08) } },
    vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader: `uniform sampler2D tN,tD;uniform vec2 px,nf;uniform vec3 ink;varying vec2 vUv;
      float L(vec2 u){float z=texture2D(tD,u).x*2.-1.;return 2.*nf.x*nf.y/(nf.y+nf.x-z*(nf.y-nf.x));}
      void main(){float d=L(vUv);vec3 n=texture2D(tN,vUv).xyz;float dd=0.,nd=0.;
        for(int i=0;i<4;i++){vec2 o=i==0?vec2(px.x,0.):i==1?vec2(-px.x,0.):i==2?vec2(0.,px.y):vec2(0.,-px.y);
          float di=L(vUv+o);dd=max(dd,abs(di-d)/max(min(di,d),0.001));nd=max(nd,distance(texture2D(tN,vUv+o).xyz,n));}
        float e=max(smoothstep(.02,.06,dd),smoothstep(.25,.55,nd))*clamp(1.25-min(d,800.)/280.,.4,1.);
        gl_FragColor=vec4(ink,e*.72);}`,
  }));
  inkQ.frustumCulled = false;
  const inkScene = new THREE.Scene();
  inkScene.add(inkQ);
  const inkCam = new THREE.Camera();
  const inkMeshes = [];
  scene.traverse(o => { if (o.isMesh) inkMeshes.push(o); });

  const view = { t: new THREE.Vector3(-2, 30, 1), r: 78, th: 0.9, ph: 1.15 };
  let tween = null, userHold = 0;
  function camApply() {
    const { t, r, th, ph } = view;
    cam.position.set(t.x + r * Math.sin(ph) * Math.sin(th), t.y + r * Math.cos(ph), t.z + r * Math.sin(ph) * Math.cos(th));
    cam.lookAt(t);
  }
  const ease = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  function camTo(p, dur = 1.7) {
    if (!p) return;
    if (typeof p === 'string') p = CAM[p];
    if (!p) return;
    const to = { t: new THREE.Vector3(...p.t), r: p.r, th: p.th, ph: p.ph };
    let dth = to.th - view.th;
    dth = ((dth + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    to.th = view.th + dth;
    if (REDUCED) dur = 0.01;
    tween = { from: { t: view.t.clone(), r: view.r, th: view.th, ph: view.ph }, to, t0: performance.now(), dur: dur * 1000 };
    kick();
  }
  function stepTween(now) {
    if (!tween) return false;
    const { from, to } = tween;
    const k = Math.min(1, (now - tween.t0) / tween.dur);
    const e = ease(k);
    view.t.lerpVectors(from.t, to.t, e);
    view.r = Math.exp(Math.log(from.r) + (Math.log(to.r) - Math.log(from.r)) * e);
    view.th = from.th + (to.th - from.th) * e;
    view.ph = from.ph + (to.ph - from.ph) * e;
    if (k >= 1) tween = null;
    return true;
  }

  const ptr = new Map();
  let pinch0 = 0, down = null;
  canvas.addEventListener('pointerdown', e => {
    canvas.setPointerCapture(e.pointerId);
    ptr.set(e.pointerId, { x: e.clientX, y: e.clientY });
    tween = null;
    userHold = performance.now();
    down = { x: e.clientX, y: e.clientY, t: performance.now(), n: ptr.size };
    if (ptr.size === 2) { const [a, b] = [...ptr.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); }
    hideHint();
    kick();
  });
  canvas.addEventListener('pointermove', e => {
    if (!ptr.has(e.pointerId)) return;
    const p = ptr.get(e.pointerId);
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    userHold = performance.now();
    if (ptr.size === 1) { view.th -= dx * 0.0065; view.ph = Math.min(1.55, Math.max(0.25, view.ph - dy * 0.005)); }
    else if (ptr.size === 2) {
      const [a, b] = [...ptr.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch0) view.r = Math.min(140, Math.max(3, view.r * pinch0 / d));
      pinch0 = d;
      view.t.y = Math.min(60, Math.max(2, view.t.y + dy * 0.45 * view.r * 0.0022));
    }
    kick();
  });
  const up = e => {
    if (!ptr.has(e.pointerId)) return;
    ptr.delete(e.pointerId);
    pinch0 = 0;
    if (down && down.n === 1 && ptr.size === 0 && performance.now() - down.t < 320 && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 7) pick(e);
    if (ptr.size === 0) down = null;
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    tween = null;
    userHold = performance.now();
    view.r = Math.min(140, Math.max(3, view.r * Math.exp(e.deltaY * 0.0011)));
    kick();
  }, { passive: false });

  const S = { cut: 0, xray: 0, explode: 0, sway: 0, labEx: 0, spin: 0, iso: 0 };
  const TG = { ...S };
  let focus = [], labOn = false, shown = steps.length;
  const appear = steps.map(() => -1e9);
  const catOp = {}, catEm = {};
  Object.keys(byCat).forEach(c => { catOp[c] = 1; catEm[c] = 0; });
  const lerp = (a, b, k) => a + (b - a) * k;

  function setState(st) {
    TG.cut = st.cut ? 1 : 0;
    TG.xray = st.xray ? 1 : 0;
    TG.explode = st.explode ? 1 : 0;
    TG.sway = st.sway ? 1 : 0;
    TG.labEx = st.labEx || 0;
    TG.spin = REDUCED ? 0 : (st.spin || 0);
    TG.iso = st.iso ? 1 : 0;
    focus = st.focus || [];
    const wantLab = !!st.lab;
    if (wantLab !== labOn) {
      labOn = wantLab;
      lab.visible = wantLab;
      root.visible = cliff.visible = env.visible = !wantLab;
    }
    kick();
  }

  let buildT = null, buildNext = 0;
  function updateBuild(now) {
    const target = buildT === null ? steps.length : buildT;
    let anim = false;
    if (buildT === null) {
      if (shown !== steps.length) { shown = steps.length; appear.fill(-1e9); }
    } else if (target < shown) shown = target;
    else if (target > shown && (FAST || REDUCED)) { for (let i = shown; i < target; i++) appear[i] = -1e9; shown = target; }
    else if (target > shown && now >= buildNext) {
      appear[shown] = now;
      shown++;
      buildNext = now + 520;
      anim = true;
    }
    steps.forEach((s, i) => {
      s.group.visible = !labOn && i < shown;
      const k = i < shown ? Math.min(1, (now - appear[i]) / 680) : 0;
      s.drop = k;
      if (k < 1 && i < shown) anim = true;
    });
    return anim || (buildT !== null && target !== shown);
  }
  function placeGroups(now) {
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

  function updateMats(dt) {
    let act = false;
    const k = FAST ? 1 : 1 - Math.exp(-dt * 5);
    for (const c of Object.keys(byCat)) {
      let op = 1;
      if (S.xray > 0.01 && XFADE[c] !== undefined) op = lerp(1, XFADE[c], S.xray);
      if (S.iso > 0.01 && focus.length && !focus.includes(c)) op = Math.min(op, lerp(1, 0.1, S.iso));
      const em = focus.includes(c) ? 1 : 0;
      const o0 = catOp[c] ?? 1, e0 = catEm[c] ?? 0;
      catOp[c] = Math.abs(op - o0) < 0.004 ? op : lerp(o0, op, k);
      catEm[c] = Math.abs(em - e0) < 0.004 ? em : lerp(e0, em, k);
      if (catOp[c] !== o0 || catEm[c] !== e0) act = true;
      for (const m of byCat[c]) {
        const o = catOp[c], tr = o < 0.995;
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
  function updateScalars(dt) {
    let act = false;
    const k = FAST ? 1 : 1 - Math.exp(-dt * (REDUCED ? 20 : 2.6));
    for (const key of Object.keys(S)) {
      if (Math.abs(S[key] - TG[key]) < 0.002) S[key] = TG[key];
      else { S[key] = lerp(S[key], TG[key], key === 'labEx' && !FAST ? 1 - Math.exp(-dt * 2.2) : k); act = true; }
    }
    // 剖开的是岩壁，楼阁留在原处。切到梁尾木楔那一段，石窝里的梁就露出来。
    CUT.constant = 80;
    ROCK_CUT.constant = S.cut < 0.002 ? 40 : lerp(4, -5.15, ease(S.cut));
    return act;
  }

  const labelsEl = $('labels');
  const LBEL = {};
  const _p = new THREE.Vector3();
  function updateLabels() {
    const W = stage.clientWidth, H = stage.clientHeight;
    const hot = (PAGE && (curAct()?.hot || PAGE.hot)) || {};
    const want = new Set([...(curAct()?.labels || PAGE?.labels || []), ...Object.keys(hot)]);
    if (PAGE?.build) want.clear();
    root.updateMatrixWorld(true);
    lab.updateMatrixWorld(true);
    for (const id of want) {
      const lb = labels[id];
      if (!lb) continue;
      let el = LBEL[id];
      if (!el) {
        el = document.createElement('div');
        el.className = 'lb';
        el.innerHTML = '<i></i><span></span>';
        el.onclick = () => { const h = hot[id]; if (h) go(Array.isArray(h) ? h[0] : h); };
        el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.onclick(); } };
        labelsEl.appendChild(el);
        LBEL[id] = el;
      }
      const on = !!hot[id];
      el.classList.toggle('go', on);
      if (on) { el.tabIndex = 0; el.setAttribute('role', 'button'); }
      else { el.removeAttribute('tabindex'); el.removeAttribute('role'); }
      _p.set(lb.x, lb.y, lb.z);
      let visBase = true;
      if (lb.space === 'lab') { visBase = lab.visible; _p.applyMatrix4(lab.matrixWorld); }
      else if (lb.step) { visBase = lb.step.group.visible; _p.applyMatrix4(lb.step.group.matrixWorld); }
      const text = (Array.isArray(hot[id]) && hot[id][1]) || lb.text;
      el.lastChild.textContent = on ? text + ' ›' : (lb.text || text);
      _p.project(cam);
      const x = (_p.x + 1) / 2 * W, y = (1 - _p.y) / 2 * H;
      const vis = visBase && _p.z < 1 && x > -20 && x < W + 20 && y > -10 && y < H + 10;
      el.classList.toggle('on', vis);
      el.classList.toggle('flip', x > W * 0.62);
      el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    }
    for (const id in LBEL) if (!want.has(id)) LBEL[id].classList.remove('on', 'go');
  }

  const ray = new THREE.Raycaster();
  const nd = new THREE.Vector2();
  const tipEl = $('tip');
  function hitAt(cx, cy) {
    const r = canvas.getBoundingClientRect();
    nd.set((cx - r.left) / r.width * 2 - 1, -(cy - r.top) / r.height * 2 + 1);
    ray.setFromCamera(nd, cam);
    const objs = [];
    (labOn ? lab : root).traverse(o => { if (o.isMesh && o.visible) objs.push(o); });
    if (!labOn) cliff.traverse(o => { if (o.isMesh && o.visible) objs.push(o); });
    return ray.intersectObjects(objs, false).find(h => CUT.distanceToPoint(h.point) > -0.05) || null;
  }
  function pick(e) {
    if (!PAGE || PAGE.build) return;
    const h = hitAt(e.clientX, e.clientY);
    if (!h) { caption(null); return; }
    const o = h.object;
    if (labOn && o.userData.name) { caption(o.userData.name, o.userData.tip || ''); return; }
    const cat = o.userData.cat;
    const dest = o.userData.page || CAT_PAGE[cat];
    if (dest && dest !== PAGE.id && PAGES[dest]) { go(dest); return; }
    const inf = INFO[cat] || [cat, ''];
    caption(inf[0], inf[1]);
    kick();
  }
  canvas.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || ptr.size || !PAGE || PAGE.build) return;
    const h = hitAt(e.clientX, e.clientY);
    let txt = '';
    if (h) {
      if (labOn && h.object.userData.name) txt = h.object.userData.name;
      else {
        const cat = h.object.userData.cat;
        const dest = h.object.userData.page || CAT_PAGE[cat];
        const name = (INFO[cat] || [cat])[0];
        txt = name + (dest && dest !== PAGE.id && PAGES[dest] ? `　点击进入「${PAGES[dest].t}」›` : '');
      }
    }
    canvas.style.cursor = h ? 'pointer' : '';
    tipEl.hidden = !txt;
    if (txt) {
      const r = stage.getBoundingClientRect();
      tipEl.textContent = txt;
      tipEl.style.transform = `translate(${Math.max(8, Math.min(e.clientX - r.left + 14, r.width - tipEl.offsetWidth - 8))}px,${e.clientY - r.top + 18}px)`;
    }
  });
  canvas.addEventListener('pointerleave', () => { tipEl.hidden = true; });

  const USE_INK = !/[?&]noink/.test(location.search);
  function render() {
    if (!USE_INK) { renderer.render(scene, cam); return; }
    const hid = [];
    for (const o of inkMeshes) {
      const c = o.userData.cat || o.material?.userData?.cat;
      if (o.visible && (NO_INK.has(c) || (c && catOp[c] < 0.45))) { o.visible = false; hid.push(o); }
    }
    scene.overrideMaterial = inkN;
    renderer.setRenderTarget(inkRT);
    renderer.clear();
    renderer.render(scene, cam);
    scene.overrideMaterial = null;
    renderer.setRenderTarget(null);
    for (const o of hid) o.visible = true;
    renderer.shadowMap.needsUpdate = true;
    renderer.render(scene, cam);
    renderer.autoClear = false;
    renderer.render(inkScene, inkCam);
    renderer.autoClear = true;
  }
  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
    const pr = renderer.getPixelRatio();
    inkRT.setSize(Math.round(w * pr), Math.round(h * pr));
    inkQ.material.uniforms.px.value.set(1 / (w * pr), 1 / (h * pr));
    inkQ.material.uniforms.nf.value.set(cam.near, cam.far);
    kick();
  }
  new ResizeObserver(resize).observe(stage);

  // ---------- 书 ----------
  const panel = $('panel'), capEl = $('cap'), hintEl = $('hint');
  let PAGE = null, hist = [], hi = -1, ov = {}, actOn = -1;
  const KIDS = {};
  Object.values(PAGES).forEach(p => { if (p.up) (KIDS[p.up] ||= []).push(p.id); });
  function hideHint() { hintEl.classList.add('gone'); tipEl.hidden = true; }
  function caption(t, x) {
    clearTimeout(caption.t);
    if (!t) { capEl.hidden = true; return; }
    capEl.innerHTML = `<b>${t}</b>${x || ''}`;
    capEl.hidden = false;
    caption.t = setTimeout(() => { capEl.hidden = true; }, 5200);
  }
  const curAct = () => actOn >= 0 && PAGE?.acts ? PAGE.acts[actOn] : null;
  const eff = () => Object.assign({ cut: 0, xray: 0, explode: 0, sway: 0, spin: 0, iso: 0, focus: [], lab: null, labEx: 0 }, PAGE?.st || {}, (curAct() || {}).st || {}, ov);
  function apply(moveCam) {
    const st = eff();
    if (PAGE.build) {
      const done = bk >= steps.length;
      Object.assign(st, { build: bk, spin: done ? 0.04 : 0, lab: null, cut: 0, sway: 0 });
      buildT = bk;
    } else buildT = null;
    setState(st);
    if (moveCam) camTo(PAGE.build ? bcam(bk) : ((curAct() || {}).cam || PAGE.cam || 'wide'));
    renderTools();
  }
  function go(id, push = true, byTour = false) {
    const p = PAGES[id];
    if (!p || PAGE === p) return;
    if (!byTour) tourPause();
    if (push) { hist = hist.slice(0, hi + 1); hist.push(id); hi = hist.length - 1; }
    bStop();
    PAGE = p;
    ov = {};
    actOn = -1;
    tipEl.hidden = true;
    caption(null);
    if (p.build) bk = 0;
    $('pk').textContent = p.k;
    $('pt').textContent = p.t;
    $('ps').textContent = p.s;
    flip($('plate'));
    renderPanel();
    renderChrome();
    apply(true);
    if (p.build && !REDUCED && !byTour) bPlay();
    tourUI();
    if (location.hash.slice(1) !== id) history.replaceState(null, '', '#' + id);
    kick();
  }
  function flip(el) { el.classList.remove('turn'); void el.offsetWidth; el.classList.add('turn'); }
  const narrow = matchMedia('(max-width:880px)');
  function toStage() { if (narrow.matches) $('win').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' }); }
  const factHTML = f => `<li${f.b ? '' : ' class="wide"'}><b>${f.b || ''}</b><div><span>${f.t}</span>${f.x ? `<small>${f.x}</small>` : ''}</div></li>`;
  const linkHTML = id => { const q = PAGES[id]; return `<button class="lk" type="button" data-go="${id}"><span><strong>${q.t}</strong><small>${q.s}</small></span><i aria-hidden="true">›</i></button>`; };
  function renderPanel() {
    const p = PAGE;
    let h = '';
    if (p.build) h = buildHTML();
    else {
      h = `<p class="lead">${p.lead}</p>`;
      if (p.tl) h += `<ol class="tl">${p.tl.map(([y, a, b]) => `<li><b>${y}</b><strong>${a}</strong>${b ? `<span>${b}</span>` : ''}</li>`).join('')}</ol>`;
      if (p.facts) h += `<ul class="facts">${p.facts.map(factHTML).join('')}</ul>`;
      if (p.links) h += `<h3 class="dh">往下钻${p.hot ? '<span>也可以点图上的红点</span>' : ''}</h3><div class="links">${p.links.map(linkHTML).join('')}</div>`;
    }
    if (p.up) h += `<button class="upbtn" type="button" data-go="${p.up}">‹ 回到上一级：${PAGES[p.up].t}</button>`;
    panel.innerHTML = h;
    panel.scrollTop = 0;
    flip(panel);
    if (p.build) bindBuild();
  }
  panel.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) { go(b.dataset.go); toStage(); } });
  function pathOf(id) { const a = []; for (let p = PAGES[id]; p; p = PAGES[p.up]) a.unshift(p); return a; }
  function renderChrome() {
    const a = pathOf(PAGE.id);
    $('addr').innerHTML = a.map((p, i) => i < a.length - 1 ? `<button type="button" data-go="${p.id}">${p.t}</button><i>›</i>` : `<span aria-current="page">${p.t}</span>`).join('');
    $('addr').scrollLeft = 1e4;
    $('back').disabled = hi <= 0;
    $('fwd').disabled = hi >= hist.length - 1;
    $('buildBtn').setAttribute('aria-pressed', PAGE.id === 'build');
  }
  $('addr').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) go(b.dataset.go); });
  $('back').onclick = () => { if (hi > 0) go(hist[--hi], false); };
  $('fwd').onclick = () => { if (hi < hist.length - 1) go(hist[++hi], false); };
  $('home').onclick = () => go('home');
  $('buildBtn').onclick = () => go('build');
  const tocHTML = id => { const k = KIDS[id] || []; return `<li><button type="button" data-go="${id}"${id === PAGE.id ? ' aria-current="page"' : ''}>${PAGES[id].t}</button>${k.length ? `<ul>${k.map(tocHTML).join('')}</ul>` : ''}</li>`; };
  function toggleToc(open) {
    const t = $('toc');
    open = open === undefined ? t.hidden : open;
    if (open) t.innerHTML = `<ul>${tocHTML('home')}</ul>`;
    t.hidden = !open;
    $('tocBtn').setAttribute('aria-expanded', String(open));
  }
  $('tocBtn').onclick = () => toggleToc();
  $('toc').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) { toggleToc(false); go(b.dataset.go); toStage(); } });
  document.addEventListener('click', e => { if (!$('toc').hidden && !$('toc').contains(e.target) && e.target !== $('tocBtn')) toggleToc(false); });

  const TOOLS = [['cut', '剖开'], ['xray', '透视'], ['explode', '分层'], ['sway', '摇一摇']];
  function renderTools() {
    const e = eff();
    let h = '';
    if (PAGE.build) h = `<button type="button" data-b="-1" ${bk <= 0 ? 'disabled' : ''}>‹ 上一步</button><button type="button" class="act" data-b="play" aria-pressed="${bPlaying}">${bPlaying ? '暂停' : bk >= steps.length ? '再盖一遍' : bk ? '继续建造' : '开始建造'}</button><button type="button" data-b="1" ${bk >= steps.length ? 'disabled' : ''}>下一步 ›</button>`;
    else {
      if (!e.lab) h += TOOLS.map(([k, t]) => `<button type="button" data-t="${k}" aria-pressed="${!!e[k]}">${t}</button>`).join('');
      h += `<button type="button" data-t="spin" aria-pressed="${!!e.spin}">旋转</button>`;
    }
    if (PAGE.acts) h += '<span class="sep"></span>' + PAGE.acts.map((a, i) => `<button type="button" class="act" data-a="${i}" aria-pressed="${actOn === i}">${a.t}</button>`).join('');
    $('tools').innerHTML = h;
  }
  $('tools').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    caption(null);
    if (b.dataset.b) {
      tourPause();
      if (b.dataset.b === 'play') bPlaying ? bStop() : bPlay();
      else { bStop(); bSet(bk + +b.dataset.b); }
      return;
    }
    if (b.dataset.a !== undefined) { const i = +b.dataset.a; actOn = actOn === i ? -1 : i; ov = {}; apply(true); return; }
    const k = b.dataset.t;
    ov[k] = eff()[k] ? 0 : (k === 'spin' ? 0.06 : 1);
    apply(false);
  });

  let bk = 0, bPlaying = false, bT = 0;
  const buildHTML = () => `<p class="lead">从一面石壁开始，按工序把悬空寺嵌上去。每一步都可以停下来，拖动着看。</p>
    <div class="bnow" id="bnow"></div>
    <div class="bctl"><button type="button" id="bprev">‹ 上一步</button><button type="button" id="bplay" class="pri"></button><button type="button" id="bnext">下一步 ›</button></div>
    <label class="bsl" for="bsl"><span>进度</span><input type="range" id="bsl" min="0" max="${steps.length}" step="1"><output id="bval"></output></label>
    <ol class="blist" id="blist">${steps.map((s, i) => `<li><button type="button" data-b="${i + 1}"><i>${i + 1}</i>${s.name}</button></li>`).join('')}</ol>`;
  function bindBuild() {
    $('bprev').onclick = () => { tourPause(); bStop(); bSet(bk - 1); };
    $('bnext').onclick = () => { tourPause(); bStop(); bSet(bk + 1); };
    $('bplay').onclick = () => { tourPause(); bPlaying ? bStop() : bPlay(); };
    $('bsl').oninput = e => { tourPause(); bStop(); bSet(+e.target.value); };
    $('blist').onclick = e => { const b = e.target.closest('[data-b]'); if (b) { tourPause(); bStop(); bSet(+b.dataset.b); } };
    bUI();
  }
  function bSet(k) { bk = Math.max(0, Math.min(steps.length, k)); apply(true); bUI(); }
  function bcam(k) {
    if (k <= 0) return 'build0';
    if (k >= steps.length) return 'wide';
    return steps[k - 1].cam || 'wide';
  }
  function bUI() {
    if (!PAGE?.build) return;
    const s = bk ? steps[bk - 1] : null;
    $('ps').textContent = bk >= steps.length ? `全部 ${steps.length} 步 · 落成` : s ? `第 ${bk} / ${steps.length} 步 · ${s.name}` : '从一面石壁开始';
    $('bnow').innerHTML = bk >= steps.length
      ? `<small>第 ${steps.length} / ${steps.length} 步 · 落成</small><h3>嵌进崖壁</h3><p>石窝、飞梁、两楼、栈道和立柱都在了。可以拖动它，从下面往上看。</p>`
      : s ? `<small>第 ${bk} / ${steps.length} 步</small><h3>${s.name}</h3><p>${s.text}</p>`
        : `<small>第 0 / ${steps.length} 步</small><h3>一面石壁</h3><p>点“开始建造”，看楼阁从石龛里长出来。</p>`;
    $('bsl').value = bk;
    $('bval').textContent = `${bk}/${steps.length}`;
    $('bplay').textContent = bPlaying ? '暂停' : bk >= steps.length ? '再盖一遍' : bk ? '继续建造' : '开始建造';
    $('bprev').disabled = bk <= 0;
    $('bnext').disabled = bk >= steps.length;
    document.querySelectorAll('#blist button').forEach((b, i) => { b.classList.toggle('done', i < bk - 1); b.toggleAttribute('aria-current', i === bk - 1); });
  }
  function bPlay() { if (bk >= steps.length) bSet(0); bPlaying = true; bUI(); clearTimeout(bT); bT = setTimeout(bTick, 700); }
  function bStop() { bPlaying = false; clearTimeout(bT); if (PAGE?.build) bUI(); }
  function bTick() {
    if (!bPlaying || !PAGE?.build) return;
    if (shown < bk) { bT = setTimeout(bTick, 120); return; }
    if (bk >= steps.length) { bPlaying = false; bUI(); return; }
    bSet(bk + 1);
    bT = setTimeout(bTick, bk >= steps.length ? 400 : 1600);
  }
  addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleToc(false);
    if (!PAGE?.build || e.target.closest?.('input')) return;
    if (e.key === 'ArrowRight') { tourPause(); bStop(); bSet(bk + 1); }
    else if (e.key === 'ArrowLeft') { tourPause(); bStop(); bSet(bk - 1); }
  });

  let T_on = false, T_started = false, T_tk = 0, T_i = 0, T_j = 0;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const say = text => sleep(FAST ? 40 : text.length * 190 + 900);
  function tourSub(t) { $('ttxt').textContent = t; $('tpos').textContent = `导览 ${T_i + 1} / ${TOUR.length} · ${PAGES[TOUR[T_i]].t}`; }
  async function tourRun(tk) {
    const ok = () => tk === T_tk;
    while (T_i < TOUR.length) {
      const id = TOUR[T_i], p = PAGES[id];
      if (PAGE.id !== id) { T_j = 0; go(id, true, true); }
      if (p.build) { await tourBuild(ok); if (!ok()) return; }
      else {
        const L = (p.say || []).map(x => typeof x === 'string' ? { s: x } : x);
        if (T_j === 0) { tourSub(''); await sleep(REDUCED ? 200 : 900); if (!ok()) return; }
        for (; T_j < L.length; T_j++) {
          tourSub(L[T_j].s);
          await say(L[T_j].s);
          if (!ok()) return;
        }
      }
      T_j = 0;
      T_i++;
    }
    tourStop();
  }
  async function tourBuild(ok) {
    bStop();
    if (T_j === 0) { bSet(0); const t = '最后，从这一面石壁开始，把悬空寺重新嵌上去。'; tourSub(t); await say(t); if (!ok()) return; T_j = 1; }
    for (; T_j <= steps.length; T_j++) {
      if (bk !== T_j) bSet(T_j);
      const s = steps[T_j - 1];
      const t = `${s.name}。${s.text}`;
      tourSub(t);
      await say(t);
      if (!ok()) return;
      while (shown < T_j) { await sleep(80); if (!ok()) return; }
    }
    const t = '一座挂在崖上的寺就位了。导览到这里结束，你可以自己点着往下看。';
    tourSub(t);
    await say(t);
  }
  function tourPlay() { if (T_on) return; T_on = T_started = true; caption(null); hideHint(); tourUI(); toStage(); tourRun(++T_tk); }
  function tourPause() { if (!T_on) return; T_on = false; T_tk++; tourUI(); }
  function tourStop() { T_on = T_started = false; T_tk++; T_i = T_j = 0; tourUI(); }
  function tourNext() { T_on = false; T_tk++; if (PAGE?.build && TOUR[T_i] === 'build') bSet(steps.length); T_j = 0; if (++T_i >= TOUR.length) { tourStop(); return; } tourPlay(); }
  function tourUI() {
    const b = $('tourBtn');
    b.textContent = T_on ? '❚❚ 导览' : T_started ? '▶ 继续' : '▶ 导览';
    b.setAttribute('aria-pressed', String(T_on));
    $('tsub').hidden = !(T_on || (T_started && PAGE && PAGE.id === TOUR[T_i]));
    $('tPause').textContent = T_on ? '暂停' : '继续';
    if (!T_on && T_started) $('ttxt').textContent = '导览已暂停。点“继续”接着讲，或者自己点着往下看。';
  }
  $('tourBtn').onclick = () => T_on ? tourPause() : tourPlay();
  $('tPause').onclick = () => T_on ? tourPause() : tourPlay();
  $('tNext').onclick = tourNext;
  $('tEnd').onclick = tourStop;

  let needs = 3, last = performance.now();
  function kick() { needs = Math.max(needs, 3); }
  function loop(now) {
    requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (document.hidden && needs <= 0 && !tween) return;
    let act = stepTween(now);
    if (S.spin && !tween && now - userHold > 2800) { view.th += S.spin * dt; act = true; }
    act = updateScalars(dt) || act;
    act = updateBuild(now) || act;
    act = updateMats(dt) || act;
    if (ptr.size) act = true;
    if (act) kick();
    if (needs > 0) {
      needs--;
      placeGroups(now);
      camApply();
      render();
      updateLabels();
    }
  }
  resize();
  const h0 = location.hash.slice(1);
  go(PAGES[h0] ? h0 : 'home', false);
  requestAnimationFrame(loop);
  setTimeout(() => $('loading').classList.add('gone'), 60);
  window.__app = {
    go, PAGES, steps, view, bSet, bStop, tourPlay, tourPause, tourStop, S, renderer, scene, cam, root, cliff, CUT,
    get bk() { return bk; }, get shown() { return shown; }, get moving() { return !!tween; },
  };
}
