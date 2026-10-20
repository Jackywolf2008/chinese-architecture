import { boot } from '../../reader/src/engine.js';
import { PAGES, TOUR, CAM } from './content.js';
import { createStage } from './stage.js';

let stage;
const book = {
  preserveDrawingBuffer: true,
  exposure: 1.12,
  pixelRatio: mobile => (mobile ? 1.5 : 1.75),
  awaitFonts: true,
  camera: { fov: 36, near: 0.2, far: 800 },
  createStage(ctx) { stage = createStage(ctx); return stage; },
  cams: CAM,
  pages: PAGES,
  view0: { t: [-2, 30, 1], r: 78, th: 0.9, ph: 1.15 },
  camDur: 1.7,
  gesture: { ph: [0.25, 1.55], r: [3, 140], y: [2, 60], pan: 0.45 * 0.0022, wheel: 0.0011 },
  ink: {
    color: [0.16, 0.12, 0.08],
    depth: [0.02, 0.06],
    eps: 0.001,
    normal: [0.25, 0.55],
    fall: [1.25, 800, 280, 0.4],
    alpha: 0.72,
  },
  captionMs: 5200,
  tools: [
    { id: 'cut', label: '剖开' },
    { id: 'xray', label: '透视' },
    { id: 'explode', label: '分层' },
    { id: 'sway', label: '摇一摇' },
  ],
  spinOn: 0.06,
  spinDelay: 2800,
  build: {
    lead: '从一面石壁开始，按工序把悬空寺嵌上去。每一步都可以停下来，拖动着看。',
    emptyPs: '从一面石壁开始',
    state(bk, steps) {
      const done = bk >= steps.length;
      return { build: bk, spin: done ? 0.04 : 0, lab: null, cut: 0, sway: 0 };
    },
    cam(bk) { return stage.buildCam(bk); },
    card(bk, steps) {
      const n = steps.length;
      const s = bk ? steps[bk - 1] : null;
      if (bk >= n) return `<small>第 ${n} / ${n} 步 · 落成</small><h3>嵌进崖壁</h3><p>石窝、飞梁、两楼、栈道和立柱都在了。可以拖动它，从下面往上看。</p>`;
      if (s) return `<small>第 ${bk} / ${n} 步</small><h3>${s.name}</h3><p>${s.text}</p>`;
      return `<small>第 0 / ${n} 步</small><h3>一面石壁</h3><p>点“开始建造”，看楼阁从石龛里长出来。</p>`;
    },
    playDelay: () => 700,
    tickDelay: (bk, steps) => (bk >= steps.length ? 400 : 1600),
    hold: 120,
    gap: () => 520,
    skip: (fast, reduced) => fast || reduced,
    appearMs: 680,
    snapOnExit: true,
    scroll: false,
  },
  tour: {
    say: (text, fast) => (fast ? 40 : text.length * 190 + 900),
    intro: reduced => (reduced ? 200 : 900),
    afterSay: 0,
    actPause: 1000,
    retake: false,
    buildIntro: '最后，从这一面石壁开始，把悬空寺重新嵌上去。',
    buildEnd: '一座挂在崖上的寺就位了。导览到这里结束，你可以自己点着往下看。',
    stepLine: s => `${s.name}。${s.text}`,
    poll: 80,
    afterStep: 0,
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
