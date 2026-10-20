import { boot } from '../../reader/src/engine.js';
import { PAGES, CAM, TOUR, LEVELNAME, stepText } from './content.js';
import { createStage } from './stage.js';

let stage;
const book = {
  exposure: 1.15,
  pixelRatio: mobile => (mobile ? 2 : 1.75),
  awaitFonts: false,
  camera: { fov: 34, near: 0.3, far: 1500 },
  createStage(ctx) { stage = createStage(ctx); return stage; },
  cams: CAM,
  pages: PAGES,
  view0: { t: [0, 33, 0], r: 140, th: 0.55, ph: 1.45 },
  intro(view, fitR) { view.r = fitR(40, 70) * 1.8; view.th = 1.4; },
  camDur: 2.2,
  buildCamDur: 1.8,
  gesture: { ph: [0.05, 1.66], r: [3, 420], y: [0, 80], pan: 0.5 * 0.0025, wheel: 0.0012 },
  ink: {
    color: [0.15, 0.12, 0.09],
    depth: [0.015, 0.045],
    eps: 0,
    normal: [0.22, 0.5],
    fall: [1.3, 1000, 320, 0.35],
    alpha: 0.8,
    pxScale: pr => Math.max(1, pr * 0.75),
  },
  captionMs: 5000,
  richFacts: true,
  tools: [
    { id: 'cut', label: '剖开' },
    { id: 'xray', label: '透视' },
    { id: 'explode', label: '分层', cam: 'explode' },
    { id: 'sway', label: '地震' },
  ],
  spinOn: 0.08,
  explodeCam: 'explode',
  spinDelay: 3500,
  build: {
    lead: '像辽代工匠一样，从一块空地开始，按工序把木塔重新盖一遍。每一步都可以停下来，拖动着看。',
    emptyPs: '从一块空地开始',
    state(bk, steps) {
      const done = bk >= steps.length;
      const s = bk ? steps[bk - 1] : null;
      return { build: bk, cut: !done && s && s.tag === 'statue' ? 1 : 0, spin: done ? 0.06 : 0, labels: [] };
    },
    cam(bk) { return stage.buildCam(bk); },
    card(bk, steps) {
      const n = steps.length;
      const s = bk ? steps[bk - 1] : null;
      if (bk >= n) return `<small>第 ${n} / ${n} 步 · 落成</small><h3>一座木构的佛国</h3><p>从夯土筑台到塑像挂匾，一共 ${n} 道工序。现在可以拖动它，从任何角度看。</p>`;
      if (s) return `<small>第 ${bk} / ${n} 步 · ${LEVELNAME[s.level]}</small><h3>${s.name}</h3><p>${stepText(s)}</p>`;
      return `<small>第 0 / ${n} 步</small><h3>一块空地</h3><p>点“开始建造”，看它一步步立起来。</p>`;
    },
    playDelay: bk => (bk ? 300 : 1200),
    tickDelay: (bk, steps) => (bk >= steps.length ? 300 : steps[bk - 1].tag === 'up' ? 1400 : 2000),
    hold: 150,
    gap: step => (step.tag === 'up' ? 300 : 650),
    skip: fast => fast,
    appearMs: 850,
    snapOnExit: false,
    scroll: true,
  },
  tour: {
    say: text => text.length * 200 + 1000,
    intro: reduced => (reduced ? 300 : 1500),
    afterSay: 400,
    actPause: 1000,
    retake: true,
    buildIntro: '最后，我们像辽代工匠一样，从一块空地开始，把木塔重新盖一遍。',
    buildEnd: '一座木构的佛国就此落成。导览到这里结束，你可以拖动它转着看，也可以自己点着往下钻。',
    stepLine: s => `${s.name}。${stepText(s)}`,
    poll: 120,
    afterStep: 300,
  },
  tourRoute: TOUR,
};

boot(book).catch(e => {
  console.error(e);
  const el = document.getElementById('err');
  if (el) {
    el.hidden = false;
    el.textContent = '三维场景初始化失败：' + (e && e.message ? e.message : e);
  }
  document.getElementById('loading')?.classList.add('gone');
});
