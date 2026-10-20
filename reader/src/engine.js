// 立体书阅读器。书只提供模型、正文和少量钩子；外壳、翻页、导览、重建、墨线、点选都在这里。
import * as THREE from 'three';

const $ = id => document.getElementById(id);
const DEF = {
  cut: 0, cutY: null, xray: 0, explode: 0, focus: [], iso: 0,
  lab: null, labEx: 0, build: null, spin: 0, dim: 0, sway: 0, lean: 0, labels: [],
};
const lerp = (a, b, k) => a + (b - a) * k;
// 缓动只接受 0 到 1。负数会把相机半径算成 NaN。
const ease = x => {
  const t = Math.min(1, Math.max(0, x));
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const INK_FRAG = `uniform sampler2D tN,tD;uniform vec2 px,nf;uniform vec3 ink;
uniform vec4 dEdge,nEdge,fall;uniform float alpha;
varying vec2 vUv;
float L(vec2 u){float z=texture2D(tD,u).x*2.-1.;return 2.*nf.x*nf.y/(nf.y+nf.x-z*(nf.y-nf.x));}
void main(){float d=L(vUv);vec3 n=texture2D(tN,vUv).xyz;float dd=0.,nd=0.;
  for(int i=0;i<4;i++){vec2 o=i==0?vec2(px.x,0.):i==1?vec2(-px.x,0.):i==2?vec2(0.,px.y):vec2(0.,-px.y);
    float di=L(vUv+o);float m=min(di,d);float den=dEdge.z>0.?max(m,dEdge.z):m;
    dd=max(dd,abs(di-d)/den);nd=max(nd,distance(texture2D(tN,vUv+o).xyz,n));}
  float e=max(smoothstep(dEdge.x,dEdge.y,dd),smoothstep(nEdge.x,nEdge.y,nd))*clamp(fall.x-min(d,fall.y)/fall.z,fall.w,1.);
  gl_FragColor=vec4(ink,e*alpha);}`;

function fail(msg) {
  const el = $('err');
  if (el) {
    el.hidden = false;
    el.textContent = msg;
  }
  $('loading')?.classList.add('gone');
}

export async function boot(book) {
  const canvas = $('gl');
  const stageEl = $('stage');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: !!book.preserveDrawingBuffer,
    });
  } catch (e) {
    fail('三维场景没有加载成功。' + (e && e.message ? e.message : ''));
    return;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = book.exposure;
  // 0.186 起 PCFSoftShadowMap 已删除，设了也只会警告并退回 PCF。两本书都直接用 PCF。
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.localClippingEnabled = true;
  const mobile = Math.min(screen.width, screen.height) < 600;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, book.pixelRatio(mobile)));

  if (book.awaitFonts) {
    await Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise(r => setTimeout(r, 1200))]);
  }

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FAST = /[?&]fast(?:&|$)/.test(location.search);
  const REDUCED = reducedMotion || FAST;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(book.camera.fov, 1, book.camera.near, book.camera.far);
  const stage = book.createStage({ THREE, scene, camera: cam, renderer, reduced: REDUCED, fast: FAST, mobile });
  if (stage.cams) Object.assign(book.cams, stage.cams);
  const pages = book.pages;
  const steps = stage.steps;
  const nStep = steps.length;

  const view = {
    t: new THREE.Vector3(...book.view0.t),
    r: book.view0.r,
    th: book.view0.th,
    ph: book.view0.ph,
  };
  let tween = null;
  let userHold = 0;
  function fitR(w, h) {
    const v = Math.tan(cam.fov * Math.PI / 360);
    return (Math.max(h / 2 / v, w / 2 / (v * cam.aspect)) + w * 0.3) * 1.14;
  }
  function resolveCam(p) {
    if (!p) return null;
    if (typeof p === 'string') p = book.cams[p];
    if (!p) return null;
    const t = Array.isArray(p.t) ? new THREE.Vector3(...p.t) : p.t.clone();
    const r = p.r != null ? p.r : fitR(p.w, p.h);
    return { t, r, th: p.th, ph: p.ph };
  }
  function camApply() {
    const { t, r, th, ph } = view;
    if (!(r > 0) || ![th, ph, t.x, t.y, t.z].every(Number.isFinite)) return false;
    cam.position.set(
      t.x + r * Math.sin(ph) * Math.sin(th),
      t.y + r * Math.cos(ph),
      t.z + r * Math.sin(ph) * Math.cos(th),
    );
    cam.lookAt(t);
    cam.updateMatrixWorld();
    const e = cam.matrixWorld.elements;
    for (let i = 0; i < 16; i++) if (!Number.isFinite(e[i])) return false;
    return true;
  }
  function camTo(p, dur = book.camDur) {
    const to = resolveCam(p);
    if (!to) return;
    // ?fast 和“减少动效”直接到位。收成 10 毫秒的过渡会踩中无头 Chrome 的两个时钟问题：
    // 帧时间戳比 performance.now() 慢，缓动参数变成负数，相机矩阵 NaN，墨线通道里 NaN.toArray 抛一次；
    // 补帧时两帧时间戳相同，缓动停在 0，镜头一直留在起点，构件实验室看起来是空的。
    if (REDUCED) {
      view.t.copy(to.t);
      view.r = to.r;
      view.th = to.th;
      view.ph = to.ph;
      tween = null;
      kick();
      return;
    }
    let dth = to.th - view.th;
    dth = ((dth + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    to.th = view.th + dth;
    // t0 留空，第一帧再用 requestAnimationFrame 的时间戳，避免和 performance.now() 对不上。
    tween = { from: { t: view.t.clone(), r: view.r, th: view.th, ph: view.ph }, to, t0: null, dur: dur * 1000 };
    kick();
  }
  function stepTween(now) {
    if (!tween) return false;
    if (tween.t0 == null) tween.t0 = now;
    const dur = Math.max(1, tween.dur);
    let k = (now - tween.t0) / dur;
    if (!Number.isFinite(k)) k = 1;
    k = Math.min(1, Math.max(0, k));
    const e = ease(k);
    const { from, to } = tween;
    view.t.lerpVectors(from.t, to.t, e);
    const r0 = from.r > 0 ? from.r : to.r;
    const r1 = to.r > 0 ? to.r : r0;
    view.r = Math.exp(Math.log(r0) + (Math.log(r1) - Math.log(r0)) * e);
    view.th = from.th + (to.th - from.th) * e;
    view.ph = from.ph + (to.ph - from.ph) * e;
    if (k >= 1) tween = null;
    return true;
  }

  const g = book.gesture;
  const ptr = new Map();
  let pinch0 = 0;
  let down = null;
  canvas.addEventListener('pointerdown', e => {
    canvas.setPointerCapture(e.pointerId);
    ptr.set(e.pointerId, { x: e.clientX, y: e.clientY });
    tween = null;
    userHold = performance.now();
    down = { x: e.clientX, y: e.clientY, t: performance.now(), n: ptr.size };
    if (ptr.size === 2) {
      const [a, b] = [...ptr.values()];
      pinch0 = Math.hypot(a.x - b.x, a.y - b.y);
    }
    hideHint();
    kick();
  });
  canvas.addEventListener('pointermove', e => {
    if (!ptr.has(e.pointerId)) return;
    const p = ptr.get(e.pointerId);
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    p.x = e.clientX;
    p.y = e.clientY;
    userHold = performance.now();
    if (ptr.size === 1) {
      view.th -= dx * 0.0065;
      view.ph = Math.min(g.ph[1], Math.max(g.ph[0], view.ph - dy * 0.005));
    } else if (ptr.size === 2) {
      const [a, b] = [...ptr.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch0) view.r = Math.min(g.r[1], Math.max(g.r[0], view.r * pinch0 / d));
      pinch0 = d;
      view.t.y = Math.min(g.y[1], Math.max(g.y[0], view.t.y + dy * g.pan * view.r));
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
    view.r = Math.min(g.r[1], Math.max(g.r[0], view.r * Math.exp(e.deltaY * g.wheel)));
    kick();
  }, { passive: false });

  // ---------- 墨线 ----------
  const inkOn = !/[?&]noink(?:&|$)/.test(location.search);
  const inkSpec = book.ink;
  const inkRT = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  inkRT.depthTexture = new THREE.DepthTexture(1, 1);
  inkRT.depthTexture.type = THREE.UnsignedIntType;
  const inkN = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, clippingPlanes: stage.inkPlanes || [] });
  const inkQ = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    transparent: true, depthTest: false, depthWrite: false,
    uniforms: {
      tN: { value: inkRT.texture },
      tD: { value: inkRT.depthTexture },
      px: { value: new THREE.Vector2(1, 1) },
      nf: { value: new THREE.Vector2(cam.near, cam.far) },
      ink: { value: new THREE.Vector3(...inkSpec.color) },
      dEdge: { value: new THREE.Vector4(inkSpec.depth[0], inkSpec.depth[1], inkSpec.eps, 0) },
      nEdge: { value: new THREE.Vector4(inkSpec.normal[0], inkSpec.normal[1], 0, 0) },
      fall: { value: new THREE.Vector4(...inkSpec.fall) },
      alpha: { value: inkSpec.alpha },
    },
    vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader: INK_FRAG,
  }));
  inkQ.frustumCulled = false;
  const inkScene = new THREE.Scene();
  inkScene.add(inkQ);
  const inkCam = new THREE.Camera();
  const inkMeshes = [];
  scene.traverse(o => { if (o.isMesh) inkMeshes.push(o); });

  function render() {
    if (!camApply()) return;
    if (inkOn) {
      const hid = [];
      for (const o of inkMeshes) {
        if (!o.visible) continue;
        if (stage.inkHide(o)) { o.visible = false; hid.push(o); }
      }
      scene.overrideMaterial = inkN;
      renderer.setRenderTarget(inkRT);
      renderer.clear();
      renderer.render(scene, cam);
      scene.overrideMaterial = null;
      renderer.setRenderTarget(null);
      for (const o of hid) o.visible = true;
    }
    // 抓帧脚本用这几个窗口标志逐帧摆相机、跳过阴影、只留墨线。平时它们是空的。
    if (!window.__noShadowUpd) renderer.shadowMap.needsUpdate = true;
    if (window.__inkOnly) renderer.clear();
    else renderer.render(scene, cam);
    if (inkOn) {
      renderer.autoClear = false;
      renderer.render(inkScene, inkCam);
      renderer.autoClear = true;
    }
  }
  function resize() {
    const w = stageEl.clientWidth;
    const h = stageEl.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
    const pr = renderer.getPixelRatio();
    const scale = inkSpec.pxScale ? inkSpec.pxScale(pr) : 1;
    inkRT.setSize(Math.round(w * pr), Math.round(h * pr));
    inkQ.material.uniforms.px.value.set(scale / (w * pr), scale / (h * pr));
    inkQ.material.uniforms.nf.value.set(cam.near, cam.far);
    kick();
  }
  new ResizeObserver(resize).observe(stageEl);

  // ---------- 书 ----------
  const panel = $('panel');
  const capEl = $('cap');
  const hintEl = $('hint');
  const tipEl = $('tip');
  let PAGE = null;
  let hist = [];
  let hi = -1;
  let ov = {};
  let actOn = -1;
  let bk = 0;
  let bPlaying = false;
  let bT = 0;
  let buildT = null;
  let shown = nStep;
  let buildNext = 0;
  const appear = new Array(nStep).fill(-1e9);
  const env = { dt: 0, now: 0, shown, buildT, reduced: REDUCED, fast: FAST };

  const KIDS = {};
  Object.values(pages).forEach(p => { if (p.up) (KIDS[p.up] ||= []).push(p.id); });
  function hideHint() { hintEl.classList.add('gone'); tipEl.hidden = true; }
  function caption(t, x) {
    clearTimeout(caption.t);
    if (!t) { capEl.hidden = true; return; }
    capEl.innerHTML = `<b>${t}</b>${x || ''}`;
    capEl.hidden = false;
    caption.t = setTimeout(() => { capEl.hidden = true; }, book.captionMs);
  }
  const curAct = () => actOn >= 0 && PAGE?.acts ? PAGE.acts[actOn] : null;
  function compose() {
    const act = curAct();
    const st = Object.assign({}, DEF, PAGE.st || {}, (act || {}).st || {}, ov);
    const hot = (act && act.hot) || PAGE.hot || {};
    st.labels = [...(act && act.labels || PAGE.labels || []), ...Object.keys(hot)];
    st.hot = hot;
    if (PAGE.build) Object.assign(st, book.build.state(bk, steps));
    return st;
  }
  function pageCam(st, act) {
    if (PAGE.build) return book.build.cam(bk, steps);
    if (book.explodeCam && st.explode && !(PAGE.st && PAGE.st.explode) && !(act && act.cam)) return book.explodeCam;
    return (act && act.cam) || PAGE.cam || 'wide';
  }
  function apply(moveCam) {
    const st = compose();
    buildT = PAGE.build ? bk : null;
    stage.apply(st);
    if (moveCam) camTo(pageCam(st, curAct()), PAGE.build && book.buildCamDur ? book.buildCamDur : book.camDur);
    renderTools();
    kick();
  }
  function go(id, push = true, byTour = false) {
    const p = pages[id];
    if (!p || PAGE === p) return;
    if (!byTour) tourPause();
    if (push) { hist = hist.slice(0, hi + 1); hist.push(id); hi = hist.length - 1; }
    bStop();
    PAGE = p;
    ov = {};
    actOn = -1;
    tipEl.hidden = true;
    caption(null);
    stage.onNavigate?.();
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
    // 封面按钮不叫 home，避免地址 #home 被浏览器当成页内锚点。
    // 换哈希时把滚动拨回去：无头 Chrome 里 replaceState 仍会把同名元素滚到顶上，裁切测试就拍不到模型。
    if (book.hash !== false && location.hash.slice(1) !== id) {
      const x = scrollX;
      const y = scrollY;
      history.replaceState(null, '', '#' + id);
      scrollTo(x, y);
    }
  }
  function flip(el) { el.classList.remove('turn'); void el.offsetWidth; el.classList.add('turn'); }
  const narrow = matchMedia('(max-width:880px)');
  function toStage() { if (narrow.matches) $('win').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' }); }

  function factHTML(f) {
    if (f.img) return `<li class="pic${f.fit ? ' fit' : ''}"><img src="${f.img}" alt="${f.t}" loading="lazy"><span>${f.t}</span>${f.x ? `<small>${f.x}</small>` : ''}</li>`;
    if (book.richFacts) return `<li${f.b ? '' : ' class="wide"'}>${f.b ? `<b>${f.b}</b>` : ''}<div><span>${f.t}</span>${f.x ? `<small>${f.x}</small>` : ''}</div></li>`;
    return `<li${f.b ? '' : ' class="wide"'}><b>${f.b || ''}</b><div><span>${f.t}</span>${f.x ? `<small>${f.x}</small>` : ''}</div></li>`;
  }
  const linkHTML = id => {
    const q = pages[id];
    return `<button class="lk" type="button" data-go="${id}"><span><strong>${q.t}</strong><small>${q.s}</small></span><i aria-hidden="true">›</i></button>`;
  };
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
    if (p.up) h += `<button class="upbtn" type="button" data-go="${p.up}">‹ 回到上一级：${pages[p.up].t}</button>`;
    panel.innerHTML = h;
    panel.scrollTop = 0;
    flip(panel);
    if (p.build) bindBuild();
  }
  panel.addEventListener('click', e => {
    const b = e.target.closest('[data-go]');
    if (b) { go(b.dataset.go); toStage(); }
  });

  function pathOf(id) {
    const a = [];
    for (let p = pages[id]; p; p = pages[p.up]) a.unshift(p);
    return a;
  }
  function renderChrome() {
    const a = pathOf(PAGE.id);
    $('addr').innerHTML = a.map((p, i) => i < a.length - 1
      ? `<button type="button" data-go="${p.id}">${p.t}</button><i>›</i>`
      : `<span aria-current="page">${p.t}</span>`).join('');
    $('addr').scrollLeft = 1e4;
    $('back').disabled = hi <= 0;
    $('fwd').disabled = hi >= hist.length - 1;
    $('buildBtn').setAttribute('aria-pressed', PAGE.id === 'build');
  }
  $('addr').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) go(b.dataset.go); });
  $('back').onclick = () => { if (hi > 0) go(hist[--hi], false); };
  $('fwd').onclick = () => { if (hi < hist.length - 1) go(hist[++hi], false); };
  $('navHome').onclick = () => go('home');
  $('buildBtn').onclick = () => go('build');
  const tocHTML = id => {
    const k = KIDS[id] || [];
    return `<li><button type="button" data-go="${id}"${id === PAGE.id ? ' aria-current="page"' : ''}>${pages[id].t}</button>${k.length ? `<ul>${k.map(tocHTML).join('')}</ul>` : ''}</li>`;
  };
  function toggleToc(open) {
    const t = $('toc');
    open = open === undefined ? t.hidden : open;
    if (open) t.innerHTML = `<ul>${tocHTML('home')}</ul>`;
    t.hidden = !open;
    $('tocBtn').setAttribute('aria-expanded', String(open));
  }
  $('tocBtn').onclick = () => toggleToc();
  $('toc').addEventListener('click', e => {
    const b = e.target.closest('[data-go]');
    if (b) { toggleToc(false); go(b.dataset.go); toStage(); }
  });
  document.addEventListener('click', e => {
    if (!$('toc').hidden && !$('toc').contains(e.target) && e.target !== $('tocBtn')) toggleToc(false);
  });

  function renderTools() {
    const e = compose();
    let h = '';
    if (PAGE.build) {
      h = `<button type="button" data-b="-1" ${bk <= 0 ? 'disabled' : ''}>‹ 上一步</button><button type="button" class="act" data-b="play" aria-pressed="${bPlaying}">${playLabel()}</button><button type="button" data-b="1" ${bk >= nStep ? 'disabled' : ''}>下一步 ›</button>`;
    } else {
      if (!e.lab) h += book.tools.map(tool => `<button type="button" data-t="${tool.id}" aria-pressed="${!!e[tool.id]}">${tool.label}</button>`).join('');
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
    if (b.dataset.a !== undefined) {
      const i = +b.dataset.a;
      actOn = actOn === i ? -1 : i;
      ov = {};
      apply(true);
      return;
    }
    const k = b.dataset.t;
    const turningOn = !compose()[k];
    ov[k] = turningOn ? (k === 'spin' ? book.spinOn : 1) : 0;
    const tool = book.tools.find(t => t.id === k);
    if (tool?.cam) {
      const act = curAct();
      camTo(turningOn ? tool.cam : ((act && act.cam) || PAGE.cam || 'wide'));
    }
    apply(false);
  });

  const playLabel = () => bPlaying ? '暂停' : bk >= nStep ? '再盖一遍' : bk ? '继续建造' : '开始建造';
  const buildHTML = () => `<p class="lead">${book.build.lead}</p>
    <div class="bnow" id="bnow"></div>
    <div class="bctl"><button type="button" id="bprev">‹ 上一步</button><button type="button" id="bplay" class="pri"></button><button type="button" id="bnext">下一步 ›</button></div>
    <label class="bsl" for="bsl"><span>进度</span><input type="range" id="bsl" min="0" max="${nStep}" step="1"><output id="bval"></output></label>
    <ol class="blist" id="blist">${steps.map((s, i) => `<li><button type="button" data-b="${i + 1}"><i>${i + 1}</i>${s.name}</button></li>`).join('')}</ol>`;
  function bindBuild() {
    $('bprev').onclick = () => { tourPause(); bStop(); bSet(bk - 1); };
    $('bnext').onclick = () => { tourPause(); bStop(); bSet(bk + 1); };
    $('bplay').onclick = () => { tourPause(); bPlaying ? bStop() : bPlay(); };
    $('bsl').oninput = e => { tourPause(); bStop(); bSet(+e.target.value); };
    $('blist').onclick = e => { const b = e.target.closest('[data-b]'); if (b) { tourPause(); bStop(); bSet(+b.dataset.b); } };
    bUI();
  }
  function bSet(k) {
    bk = Math.max(0, Math.min(nStep, k));
    apply(true);
    bUI();
  }
  function bUI() {
    if (!PAGE?.build) return;
    const s = bk ? steps[bk - 1] : null;
    renderTools();
    $('ps').textContent = bk >= nStep ? `全部 ${nStep} 步 · 落成` : s ? `第 ${bk} / ${nStep} 步 · ${s.name}` : book.build.emptyPs;
    $('bnow').innerHTML = book.build.card(bk, steps);
    $('bsl').value = bk;
    $('bval').textContent = `${bk}/${nStep}`;
    $('bplay').textContent = playLabel();
    $('bprev').disabled = bk <= 0;
    $('bnext').disabled = bk >= nStep;
    document.querySelectorAll('#blist button').forEach((b, i) => {
      b.classList.toggle('done', i < bk - 1);
      b.toggleAttribute('aria-current', i === bk - 1);
    });
    if (book.build.scroll) {
      const cur = document.querySelector('#blist [aria-current]');
      if (cur && !narrow.matches) panel.scrollTop = Math.max(0, cur.offsetTop - panel.clientHeight * 0.55);
    }
  }
  function bPlay() {
    if (bk >= nStep) bSet(0);
    bPlaying = true;
    bUI();
    clearTimeout(bT);
    bT = setTimeout(bTick, book.build.playDelay(bk));
  }
  function bStop() {
    bPlaying = false;
    clearTimeout(bT);
    if (PAGE?.build) bUI();
  }
  function bTick() {
    if (!bPlaying || !PAGE?.build) return;
    if (shown < bk) { bT = setTimeout(bTick, book.build.hold); return; }
    if (bk >= nStep) { bPlaying = false; bUI(); return; }
    bSet(bk + 1);
    bT = setTimeout(bTick, book.build.tickDelay(bk, steps));
  }
  addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleToc(false);
    if (!PAGE?.build || e.target.closest?.('input')) return;
    if (e.key === 'ArrowRight') { tourPause(); bStop(); bSet(bk + 1); }
    else if (e.key === 'ArrowLeft') { tourPause(); bStop(); bSet(bk - 1); }
  });

  function updateBuild(now) {
    const target = buildT === null ? nStep : buildT;
    let anim = false;
    if (buildT === null) {
      if (shown !== nStep) {
        if (book.build.snapOnExit) appear.fill(-1e9);
        else for (let i = shown; i < nStep; i++) appear[i] = -1e9;
        shown = nStep;
      }
    } else if (target < shown) shown = target;
    else if (target > shown && book.build.skip(FAST, REDUCED)) {
      for (let i = shown; i < target; i++) appear[i] = -1e9;
      shown = target;
    } else if (target > shown && now >= buildNext) {
      appear[shown] = now;
      const s = steps[shown];
      shown++;
      buildNext = now + book.build.gap(s);
      anim = true;
    }
    steps.forEach((s, i) => {
      const k = i < shown ? Math.min(1, (now - appear[i]) / book.build.appearMs) : 0;
      s.drop = k;
      s.dropK = k;
      if (k < 1 && i < shown) anim = true;
    });
    env.shown = shown;
    env.buildT = buildT;
    env.now = now;
    stage.syncBuild?.(env);
    return anim || (buildT !== null && target !== shown);
  }

  // ---------- 标注与点选 ----------
  const labelsEl = $('labels');
  const LBEL = {};
  const _p = new THREE.Vector3();
  function hotNow() {
    const act = curAct();
    return (act && act.hot) || PAGE?.hot || {};
  }
  function updateLabels() {
    const W = stageEl.clientWidth;
    const H = stageEl.clientHeight;
    const hot = hotNow();
    let ids = [];
    if (PAGE && !PAGE.build) ids = [...(curAct()?.labels || PAGE.labels || []), ...Object.keys(hot)];
    if (stage.filterLabels) ids = stage.filterLabels(ids);
    const want = new Set(ids);
    stage.prepareLabels?.();
    for (const id of want) {
      let el = LBEL[id];
      if (!el) {
        el = document.createElement('div');
        el.className = 'lb';
        el.innerHTML = '<i></i><span></span>';
        el.onclick = () => {
          const h = hotNow()[id];
          if (h) go(Array.isArray(h) ? h[0] : h);
        };
        el.onkeydown = ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); el.onclick(); } };
        labelsEl.appendChild(el);
        LBEL[id] = el;
      }
      const info = stage.labelPoint(id);
      const h = hot[id];
      const on = !!h;
      el.classList.toggle('go', on);
      if (on) { el.tabIndex = 0; el.setAttribute('role', 'button'); }
      else { el.removeAttribute('tabindex'); el.removeAttribute('role'); }
      if (!info) { el.classList.remove('on'); continue; }
      const text = (Array.isArray(h) && h[1]) || info.text;
      el.lastChild.textContent = on ? text + ' ›' : text;
      _p.copy(info.point).project(cam);
      const x = (_p.x + 1) / 2 * W;
      const y = (1 - _p.y) / 2 * H;
      const vis = _p.z < 1 && x > -20 && x < W + 20 && y > -10 && y < H + 10;
      el.classList.toggle('on', vis);
      const flip = info.flip === 'l' ? true : info.flip === 'r' ? false : x > W * 0.62;
      el.classList.toggle('flip', flip);
      el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    }
    for (const id in LBEL) if (!want.has(id)) {
      const el = LBEL[id];
      el.classList.remove('on', 'go');
      el.removeAttribute('tabindex');
      el.removeAttribute('role');
    }
  }
  const ray = new THREE.Raycaster();
  const nd = new THREE.Vector2();
  function hitAt(cx, cy) {
    const r = canvas.getBoundingClientRect();
    nd.set((cx - r.left) / r.width * 2 - 1, -(cy - r.top) / r.height * 2 + 1);
    ray.setFromCamera(nd, cam);
    const objs = stage.pickables();
    return ray.intersectObjects(objs, false).find(h => stage.acceptHit(h)) || null;
  }
  const api = { go, caption, apply, kick };
  function pick(e) {
    if (!PAGE || PAGE.build) return;
    const h = hitAt(e.clientX, e.clientY);
    if (!h) { caption(null); return; }
    stage.onPick(h, PAGE, api);
  }
  canvas.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || ptr.size || !PAGE || PAGE.build) return;
    const h = hitAt(e.clientX, e.clientY);
    const info = stage.onHover(h, PAGE) || { text: '' };
    if (info.dirty) kick();
    canvas.style.cursor = h ? 'pointer' : '';
    tipEl.hidden = !info.text;
    if (info.text) {
      const r = stageEl.getBoundingClientRect();
      tipEl.textContent = info.text;
      tipEl.style.transform = `translate(${Math.max(8, Math.min(e.clientX - r.left + 14, r.width - tipEl.offsetWidth - 8))}px,${e.clientY - r.top + 18}px)`;
    }
  });
  canvas.addEventListener('pointerleave', () => {
    const info = stage.onHover(null, PAGE);
    if (info?.dirty) kick();
    tipEl.hidden = true;
  });

  // ---------- 导览 ----------
  let T_on = false, T_started = false, T_tk = 0, T_i = 0, T_j = 0;
  const tour = book.tour;
  const TOUR = book.tourRoute;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const say = text => sleep(tour.say(text, FAST));
  function tourSub(t) {
    $('ttxt').textContent = t;
    $('tpos').textContent = `导览 ${T_i + 1} / ${TOUR.length} · ${pages[TOUR[T_i]].t}`;
  }
  async function tourRun(tk) {
    const ok = () => tk === T_tk;
    while (T_i < TOUR.length) {
      const id = TOUR[T_i];
      const p = pages[id];
      if (PAGE.id !== id) { T_j = 0; go(id, true, true); }
      else if (tour.retake && T_j === 0) { actOn = -1; ov = {}; apply(true); }
      if (p.build) { await tourBuild(ok); if (!ok()) return; }
      else {
        const L = (p.say || []).map(x => typeof x === 'string' ? { s: x } : x);
        if (T_j === 0) { tourSub(''); await sleep(tour.intro(REDUCED)); if (!ok()) return; }
        for (; T_j < L.length; T_j++) {
          const line = L[T_j];
          if (line.act !== undefined && actOn !== line.act) {
            actOn = line.act;
            ov = {};
            apply(true);
            await sleep(tour.actPause);
            if (!ok()) return;
          }
          tourSub(line.s);
          await say(line.s);
          if (!ok()) return;
          if (tour.afterSay) { await sleep(tour.afterSay); if (!ok()) return; }
        }
      }
      T_j = 0;
      T_i++;
    }
    tourStop();
  }
  async function tourBuild(ok) {
    bStop();
    if (T_j === 0) {
      bSet(0);
      tourSub(tour.buildIntro);
      await say(tour.buildIntro);
      if (!ok()) return;
      T_j = 1;
    }
    for (; T_j <= nStep; T_j++) {
      if (bk !== T_j) bSet(T_j);
      const s = steps[T_j - 1];
      const t = tour.stepLine(s);
      tourSub(t);
      await say(t);
      if (!ok()) return;
      while (shown < T_j) { await sleep(tour.poll); if (!ok()) return; }
      if (tour.afterStep) { await sleep(tour.afterStep); if (!ok()) return; }
    }
    tourSub(tour.buildEnd);
    await say(tour.buildEnd);
  }
  function tourPlay() {
    if (T_on) return;
    T_on = T_started = true;
    caption(null);
    hideHint();
    tourUI();
    toStage();
    tourRun(++T_tk);
  }
  function tourPause() {
    if (!T_on) return;
    T_on = false;
    T_tk++;
    tourUI();
  }
  function tourStop() {
    T_on = T_started = false;
    T_tk++;
    T_i = T_j = 0;
    tourUI();
  }
  function tourNext() {
    T_on = false;
    T_tk++;
    if (PAGE?.build && TOUR[T_i] === 'build') bSet(nStep);
    T_j = 0;
    if (++T_i >= TOUR.length) { tourStop(); return; }
    tourPlay();
  }
  function tourUI() {
    const b = $('tourBtn');
    b.textContent = T_on ? '❚❚ 导览' : T_started ? '▶ 继续' : '▶ 导览';
    b.setAttribute('aria-pressed', String(T_on));
    b.setAttribute('aria-label', T_on ? '暂停导览' : T_started ? '继续导览' : '开始自动导览');
    $('tsub').hidden = !(T_on || (T_started && PAGE && PAGE.id === TOUR[T_i]));
    $('tPause').textContent = T_on ? '暂停' : '继续';
    if (!T_on && T_started) $('ttxt').textContent = '导览已暂停。点“继续”接着讲，或者自己点着往下看。';
  }
  $('tourBtn').onclick = () => T_on ? tourPause() : tourPlay();
  $('tPause').onclick = () => T_on ? tourPause() : tourPlay();
  $('tNext').onclick = tourNext;
  $('tEnd').onclick = tourStop;

  let needs = 3;
  let last = performance.now();
  function kick() { needs = Math.max(needs, 3); }
  function loop(now) {
    requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    env.dt = dt;
    env.now = now;
    if (document.hidden && needs <= 0 && !tween && !bPlaying && !T_on) return;
    let act = stepTween(now);
    if (stage.spin && !tween && now - userHold > book.spinDelay) {
      view.th += stage.spin * dt;
      act = true;
    }
    act = stage.scalars(dt) || act;
    act = updateBuild(now) || act;
    act = stage.mats(dt) || act;
    if (ptr.size) act = true;
    const frame = window.__camFrame;
    if (frame) {
      view.t.set(frame.t[0], frame.t[1], frame.t[2]);
      view.r = frame.r;
      view.th = frame.th;
      view.ph = frame.ph;
      act = true;
    }
    if (act) kick();
    if (needs > 0 || window.__forceRender) {
      if (needs > 0) needs--;
      stage.place(now, env);
      render();
      updateLabels();
    }
  }

  if (book.intro) book.intro(view, fitR);
  resize();
  // 第一页也记进历史，否则从封面点进去之后后退是灰的。
  const h0 = location.hash.slice(1);
  go(pages[h0] ? h0 : 'home');
  requestAnimationFrame(loop);
  setTimeout(() => $('loading').classList.add('gone'), 60);
  window.__app = {
    go, PAGES: pages, view, S: stage.S, TG: stage.TG,
    steps, STEPS: steps, NSTEP: nStep,
    renderer, scene, cam, setState: st => stage.apply(st), camTo,
    bSet, bStop, tourPlay, tourPause, tourStop,
    tour: { play: () => tourPlay(), pause: () => tourPause(), next: () => tourNext(), state: () => ({ T_on, T_i, T_j }) },
    get bk() { return bk; },
    get shown() { return shown; },
    get buildShown() { return shown; },
    get moving() { return !!tween; },
  };
}
