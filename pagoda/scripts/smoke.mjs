// 应县木塔冒烟测试：把当前这本立体书的翻页、导览、重建和点选钉住。
// 测的是 docs/pagoda/ 里发布出去的页面。画面不跟基准图做像素差，截图放在 smoke-out/pagoda/。
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { ensureNode } from '../../scripts/smoke/node.mjs';
import { repoRoot, sleep, withBrowser } from '../../scripts/smoke/chrome.mjs';

ensureNode();

const quick = process.argv.includes('--quick');
// 导览按字数睡眠，完整走完要十几分钟。?fast 已经把镜头收成瞬间到位，这里再把页面里的 setTimeout 缩短。
// 只作用于这次测试打开的页面，不改书的源码。路线、翻页、动作和重建仍走原来的函数。
// 无头 Chrome 里 requestAnimationFrame 的时间戳会比 performance.now() 落后一两百毫秒。
// ?fast 把镜头过渡收成 10 毫秒，这个落差会让缓动算出 NaN，控制台抛一次 toArray。测试里把回调时间改成 performance.now()，避开这个环境问题。
const SCALE = Number(process.env.SMOKE_TIME_SCALE || 16);
const INJECT = `(() => {
  const raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = fn => raf(() => fn(performance.now()));
  if (!/[?&]fast(?:&|$)/.test(location.search)) return;
  const timeout = window.setTimeout.bind(window);
  window.setTimeout = (fn, ms, ...args) => {
    const n = Number(ms) || 0;
    const next = n < 32 ? n : Math.max(24, Math.round(n / ${SCALE}));
    return timeout(fn, next, ...args);
  };
})();`;

const TOOLS = ['剖开', '透视', '分层', '地震', '旋转'];
const TOUR = ['应县木塔', '千年履历', '塔刹', '六重屋檐', '首层与副阶', '平坐与勾栏', '明五暗四', '暗层斜撑', '剖开看', '筒中筒', '各层塑像', '斗拱', '各层斗拱', '斗拱变小了', '叉柱造', '逐层收分', '榫卯', '为什么震不倒', '今天的木塔', '重建木塔'];
const STEPS = ['夯基筑台', '放线定柱网', '立首层柱', '阑额普拍枋', '安斗拱', '铺椽盖瓦', '一层暗层斜撑', '二层平坐', '二层立柱', '二层斗拱', '二层墙与屋檐', '二层暗层斜撑', '三层平坐', '三层立柱', '三层斗拱', '三层墙与屋檐', '三层暗层斜撑', '四层平坐', '四层立柱', '四层斗拱', '四层墙与屋檐', '四层暗层斜撑', '五层平坐', '五层立柱', '五层斗拱', '五层墙与屋檐', '立铁刹', '一层塑像', '二层塑像', '三层塑像', '四层塑像', '五层塑像'];
const SHOTS = new Set(['home', 'section', 'levels', 'dark', 'bracket', 'quake', 'today']);

// k 眉题，t 标题，s 副题，lead 是面板导语的开头。lab 页不显示剖开/透视/分层/地震。
const PAGES = [
  { id: 'home', k: '封面', t: '应县木塔', s: '佛宫寺释迦塔 · 辽清宁二年（1056）', lead: '山西应县佛宫寺里', links: ['levels', 'section', 'bracket', 'quake', 'history', 'today', 'build'], hot: [['塔刹 ›', 'spire'], ['六重屋檐 ›', 'eaves'], ['平坐与勾栏 ›', 'pingzuo'], ['斗拱 ›', 'bracket'], ['副阶周匝 ›', 'fujie'], ['台基 ›', 'base']] },
  { id: 'history', k: '年表', t: '千年履历', s: '从辽到今天', lead: '契丹人建立的辽朝', links: ['statues', 'today'] },
  { id: 'spire', k: '塔顶', t: '塔刹', s: '塔顶上一座缩小的窣堵坡', lead: '塔的源头是印度的窣堵坡', links: ['history'], acts: ['看铁链'] },
  { id: 'eaves', k: '外观', t: '六重屋檐', s: '五层六檐，檐角起翘', lead: '五层塔身，加上首层外面', links: ['brktypes', 'bracket', 'fujie'], acts: ['看屋角'], hot: [['屋檐靠什么挑出去？ ›', 'bracket']] },
  { id: 'pingzuo', k: '外观', t: '平坐与勾栏', s: '每层挑出的一圈环廊', lead: '二层以上，每层屋檐上方', links: ['levels', 'dark'], hot: [['平坐后面藏着什么？ ›', 'dark']] },
  { id: 'fujie', k: '一层', t: '首层与副阶', s: '副阶周匝：绕着首层的回廊', lead: '首层外面绕了一圈带屋檐', links: ['section', 'base'], hot: [['进门，剖开看 ›', 'section'], ['台基 ›', 'base']] },
  { id: 'base', k: '地基', t: '台基', s: '下方上八角', lead: '木塔坐在石砌的台基上', links: ['tube', 'build'], acts: ['俯看柱网'] },
  { id: 'levels', k: '结构', t: '明五暗四', s: '外看五层，里面九层', lead: '把塔一层层拉开，就能数', links: ['dark', 'section'], tg: { explode: 1 }, hot: [['一层暗层 ›', 'dark'], ['二层暗层 ›', 'dark'], ['三层暗层 ›', 'dark'], ['四层暗层 ›', 'dark']] },
  { id: 'dark', k: '结构', t: '暗层斜撑', s: '四道刚性的腰箍', lead: '把墙变透明，暗层的秘密', links: ['quake', 'today'], tg: { xray: 1, iso: 1 }, acts: ['看全部四层'] },
  { id: 'section', k: '内部', t: '剖开看', s: '沿中轴线一刀剖开', lead: '沿着中轴线把木塔剖开', links: ['tube', 'statues', 'stair'], tg: { cut: 1 }, hot: [['释迦牟尼坐像 约11米 ›', 'statues'], ['楼梯 ›', 'stair'], ['筒中筒 ›', 'tube']] },
  { id: 'tube', k: '内部', t: '筒中筒', s: '两个套在一起的八角筒', lead: '从上往下看首层的柱网', links: ['shoufen', 'fork'], tg: { cutY: 1 }, acts: ['侧面剖开'] },
  { id: 'statues', k: '内部', t: '各层塑像', s: '一座木构的佛国', lead: '五个明层都供着佛像', links: ['history'], tg: { cut: 1 }, acts: ['看一层坐像'] },
  { id: 'stair', k: '内部', t: '楼梯', s: '藏在两圈柱子之间', lead: '楼梯夹在内外两圈柱子之间', links: ['levels'], tg: { cut: 1, iso: 1 } },
  { id: 'bracket', k: '构造', t: '斗拱', s: '柱头上层层出挑的木构件', lead: '屋檐为什么能挑出去这么远', lab: true, links: ['scale', 'brktypes', 'ang', 'fork', 'joint'], acts: ['拆开构件', '放回塔上'] },
  { id: 'brktypes', k: '构造', t: '各层斗拱', s: '每一层的铺作都不一样', lead: '梁思成逐层记下了木塔斗拱', links: ['scale', 'ang', 'eaves'] },
  { id: 'scale', k: '构造', t: '斗拱变小了', s: '从辽到明清', lead: '把两组斗拱放在一样高的柱子上', lab: true, links: ['brktypes', 'bracket'] },
  { id: 'ang', k: '构造', t: '下昂', s: '一根杠杆挑起屋檐', lead: '斜着伸出的两根长杆叫下昂', lab: true, links: ['joint'], tg: { labEx: 0.85 } },
  { id: 'fork', k: '构造', t: '叉柱造', s: '上层柱怎么接到下层', lead: '上下两层的柱子不是一根通到顶', lab: true, links: ['shoufen'], acts: ['拆开'] },
  { id: 'shoufen', k: '结构', t: '逐层收分', s: '越往上越往里收', lead: '塔身逐层收小', links: ['quake'], tg: { xray: 1 } },
  { id: 'joint', k: '构造', t: '榫卯', s: '不靠钉子，靠咬合', lead: '构件之间靠榫卯咬合', lab: true, links: ['quake'], acts: ['拆开'] },
  { id: 'quake', k: '抗震', t: '为什么震不倒', s: '刚柔相济', lead: '据记载，元代一场大地震', links: ['joint', 'dark', 'today'], tg: { sway: 1 }, hot: [['斗拱：减震垫 ›', 'bracket'], ['暗层：腰箍 ›', 'dark']] },
  { id: 'today', k: '现状', t: '今天的木塔', s: '歪了，怎么修', lead: '近千年的荷载、地震和战火', links: ['dark', 'build'], tg: { lean: 1 }, acts: ['透视看斜撑'] },
  { id: 'build', k: '建造', t: '重建木塔', s: '从一块空地开始', lead: '像辽代工匠一样，从一块空地开始' },
];

function assertBuilt() {
  const src = readFileSync(path.join(repoRoot, 'pagoda/index.html'), 'utf8');
  const built = readFileSync(path.join(repoRoot, 'docs/pagoda/index.html'), 'utf8');
  const i = src.indexOf('<div class="wrap">');
  const body = src.slice(i).replace(/https:\/\/cdn\.jsdelivr\.net\/npm\/three@[\d.]+\/build\/three\.module\.js/g, './three.module.min.js');
  if (i < 0 || !built.includes(body)) throw new Error('docs/pagoda/index.html 和 pagoda/index.html 不一致。先在仓库根目录执行 sh build.sh');
}

function must(cond, msg) {
  if (!cond) throw new Error(msg);
}

async function main(s) {
  const url = `http://127.0.0.1:${s.port}/docs/pagoda/index.html?fast`;
  console.log('浏览器', s.browser);

  async function boot() {
    await s.goto(url);
    await s.waitFor(`!!window.__app && document.getElementById('loading').classList.contains('gone')`, '木塔没有启动', 30000);
    const err = await s.ev(`document.getElementById('err').hidden ? '' : document.getElementById('err').textContent`);
    if (err) throw new Error(err);
    await settle();
  }
  async function settle() {
    // 镜头要等渲染帧才动。先等两帧，避免把“还没开始动”当成已经停稳。
    await s.ev(`new Promise(resolve => { let n = 0; const step = () => { if (++n >= 2) resolve(true); else requestAnimationFrame(step); }; requestAnimationFrame(step); })`);
    let prev = '';
    let stable = 0;
    for (let i = 0; i < 40; i++) {
      const cur = await s.ev(`(() => { const v = window.__app.view; return [v.th, v.ph, v.r, v.t.x, v.t.y, v.t.z].map(n => Number(n).toFixed(2)).join(','); })()`);
      if (cur === prev) {
        if (++stable >= 2) return;
      } else stable = 0;
      prev = cur;
      await sleep(40);
    }
    throw new Error('镜头没有停稳');
  }
  async function pageNow() {
    return s.ev(`(() => { const t = document.getElementById('pt').textContent; return Object.entries(window.__app.PAGES).find(([,p]) => p.t === t)?.[0] || ''; })()`);
  }
  async function go(id) {
    await s.ev(`window.__app.go(${JSON.stringify(id)})`);
    await settle();
  }
  async function click(finder, what) {
    const ok = await s.ev(`(() => { const el = ${finder}; if (!el) return ''; el.click(); return 'ok'; })()`);
    must(ok === 'ok', `点不到${what}`);
  }
  async function assertDrawn(where) {
    const g = await s.canvasSpread();
    console.log(`  画面 ${where} spread=${g.spread.toFixed(0)} dark=${g.darkRatio.toFixed(2)}`);
    must(g.spread >= 28 && g.darkRatio >= 0.015, `${where} 画面近乎空白 spread=${g.spread.toFixed(1)} dark=${g.darkRatio.toFixed(3)}`);
  }

  await boot();
  must(await s.ev(`document.querySelector('h1').textContent`) === '应县木塔', '主标题不对');
  must(await pageNow() === 'home', '打开后不在封面');
  const cols = await s.ev(`getComputedStyle(document.querySelector('.page')).gridTemplateColumns`);
  must(cols.split(/\s+/).length >= 2, `宽屏应该是两列：${cols}`);
  await assertDrawn('封面');
  await s.shot('home');
  s.checkErrors('封面');

  const names = JSON.parse(await s.ev(`JSON.stringify(window.__app.STEPS.map(s => s.name))`));
  must(names.length === STEPS.length && names.every((n, i) => n === STEPS[i]), `建造步骤变了：\n${names.join('、')}`);
  must(await s.ev(`window.__app.NSTEP`) === STEPS.length, 'NSTEP 和步骤数不一致');
  const ids = JSON.parse(await s.ev(`JSON.stringify(Object.keys(window.__app.PAGES))`));
  must(ids.join() === PAGES.map(p => p.id).join(), `页面目录变了：${ids.join('、')}`);

  console.log('前进、后退、封面、目录');
  must(await s.ev(`document.getElementById('back').disabled && document.getElementById('fwd').disabled`), '封面的前进后退应该是灰的');
  await click(`document.querySelector('#panel .lk[data-go="levels"]')`, '往下钻「明五暗四」');
  await settle();
  must(await pageNow() === 'levels', '往下钻没有进入明五暗四');
  must(!await s.ev(`document.getElementById('back').disabled`), '进入内页后后退应该可点');
  await click(`document.getElementById('back')`, '后退');
  await settle();
  must(await pageNow() === 'home' && !await s.ev(`document.getElementById('fwd').disabled`), '后退没有回到封面');
  await click(`document.getElementById('fwd')`, '前进');
  await settle();
  must(await pageNow() === 'levels', '前进没有回到明五暗四');
  await click(`document.getElementById('home')`, '封面');
  await settle();
  must(await pageNow() === 'home', '封面按钮没有回到应县木塔');
  await click(`document.getElementById('back')`, '再后退');
  await settle();
  must(await pageNow() === 'levels', '从封面再后退，应该回到明五暗四');

  await go('home');
  await click(`document.getElementById('tocBtn')`, '目录');
  must(await s.ev(`!document.getElementById('toc').hidden && document.getElementById('tocBtn').getAttribute('aria-expanded') === 'true'`), '目录没有展开');
  const toc = await s.ev(`document.getElementById('toc').innerText`);
  must(toc.includes('榫卯') && toc.includes('暗层斜撑') && toc.includes('重建木塔'), '目录缺页');
  await click(`([...document.querySelectorAll('#toc button')].find(b => b.textContent.trim() === '榫卯'))`, '目录里的榫卯');
  await settle();
  must(await pageNow() === 'joint', '目录没有打开榫卯');
  must(await s.ev(`document.getElementById('toc').hidden`), '翻页后目录应该合上');
  await click(`([...document.querySelectorAll('#addr button')].find(b => b.textContent.trim() === '斗拱'))`, '地址栏里的斗拱');
  await settle();
  must(await pageNow() === 'bracket', '地址栏没有回到斗拱');
  await go('shoufen');
  await click(`document.querySelector('#panel .upbtn')`, '回到上一级');
  await settle();
  must(await pageNow() === 'fork', '上一级应该是叉柱造');
  s.checkErrors('导航');

  console.log('视图开关');
  await go('home');
  const toolKey = { 剖开: 'cut', 透视: 'xray', 分层: 'explode', 地震: 'sway' };
  for (const label of TOOLS) {
    const finder = `([...document.querySelectorAll('#tools button')].find(b => b.textContent.trim() === ${JSON.stringify(label)}))`;
    const before = await s.ev(`${finder}.getAttribute('aria-pressed')`);
    await click(finder, label);
    await settle();
    const after = await s.ev(`${finder}.getAttribute('aria-pressed')`);
    must(after !== before, `${label} 按下后状态没变`);
    if (toolKey[label] && after === 'true') {
      const v = await s.ev(`window.__app.TG[${JSON.stringify(toolKey[label])}]`);
      must(v > 0.9, `${label} 没有反映到场景（${toolKey[label]}=${v}）`);
      if (label === '剖开') await s.shot('tool-cut');
    }
    await click(finder, `${label} 再点一次`);
    await settle();
    must(await s.ev(`${finder}.getAttribute('aria-pressed')`) === before, `${label} 没有切回原来的状态`);
    if (toolKey[label]) {
      const v = await s.ev(`window.__app.TG[${JSON.stringify(toolKey[label])}]`);
      must(v < 0.05, `${label} 关掉后场景还留着（${v}）`);
    }
  }
  s.checkErrors('视图开关');

  console.log('逐页');
  for (const page of PAGES) {
    await go(page.id);
    must(await pageNow() === page.id, `go(${page.id}) 失败`);
    must(await s.ev(`document.getElementById('pt').textContent`) === page.t, `${page.id} 标题不对`);
    must(await s.ev(`document.getElementById('pk').textContent`) === page.k, `${page.id} 眉题不对`);
    must(await s.ev(`document.getElementById('ps').textContent`) === page.s, `${page.id} 副题不对`);
    const lead = await s.ev(`document.querySelector('#panel .lead')?.textContent || ''`);
    must(lead.startsWith(page.lead), `${page.t} 导语不对：${lead.slice(0, 24)}`);
    const buttons = JSON.parse(await s.ev(`JSON.stringify([...document.querySelectorAll('#tools button')].map(b => b.textContent.trim()))`));
    if (page.id === 'build') {
      must(buttons.includes('开始建造'), `重建页的按钮是 ${buttons.join('、')}`);
      must(lead.includes('一块空地') && await s.ev(`document.getElementById('bnow').innerText.includes('一块空地')`), '重建页没有从空地开始');
    } else {
      // 实验室页藏起剖开/透视/分层/地震，旋转还在。
      const expect = [...(page.lab ? ['旋转'] : TOOLS), ...(page.acts || [])];
      must(buttons.join('|') === expect.join('|'), `${page.t} 的按钮是 ${buttons.join('、')}，期望 ${expect.join('、')}`);
      await assertDrawn(page.t);
      if (SHOTS.has(page.id)) await s.shot(page.id);
    }
    if (page.tg) {
      const tg = JSON.parse(await s.ev(`JSON.stringify(window.__app.TG)`));
      for (const [k, v] of Object.entries(page.tg)) must(Math.abs(tg[k] - v) < 0.001, `${page.t} 的 ${k}=${tg[k]}，期望 ${v}`);
    }
    if (!quick) {
      for (const label of page.acts || []) {
        const finder = `([...document.querySelectorAll('#tools [data-a]')].find(b => b.textContent.trim() === ${JSON.stringify(label)}))`;
        await click(finder, `${page.t} 的 ${label}`);
        await settle();
        must(await s.ev(`${finder}.getAttribute('aria-pressed')`) === 'true', `${page.t} 的「${label}」没有按下`);
        if (page.id === 'bracket' && label === '拆开构件') {
          await assertDrawn('斗拱拆开');
          await s.shot('bracket-open');
        }
        await click(finder, `${page.t} 的 ${label} 再点一次`);
        await settle();
        must(await s.ev(`${finder}.getAttribute('aria-pressed')`) === 'false', `${page.t} 的「${label}」没有关掉`);
      }
    }
    s.checkErrors(page.t);
    console.log(`  ${page.t}`);
  }

  if (!quick) {
    console.log('红点');
    for (const page of PAGES) {
      if (!page.hot) continue;
      await go(page.id);
      const texts = JSON.parse(await s.ev(`JSON.stringify([...document.querySelectorAll('.lb.go')].map(el => el.textContent.trim()))`));
      must(texts.length === page.hot.length, `${page.t} 的红点是 ${texts.join(' | ')}`);
      for (const [label, dest] of page.hot) {
        must(texts.includes(label), `${page.t} 没有红点「${label}」，现有：${texts.join(' | ')}`);
        await click(`([...document.querySelectorAll('.lb.go')].find(el => el.textContent.trim() === ${JSON.stringify(label)}))`, label);
        await settle();
        must(await pageNow() === dest, `红点「${label}」到了 ${await pageNow()}，期望 ${dest}`);
        await go(page.id);
      }
    }
    console.log('往下钻');
    for (const page of PAGES) {
      if (!page.links) continue;
      await go(page.id);
      const got = JSON.parse(await s.ev(`JSON.stringify([...document.querySelectorAll('#panel .lk')].map(b => b.dataset.go))`));
      must(got.join() === page.links.join(), `${page.t} 的往下钻是 ${got.join('、')}`);
      for (const id of page.links) {
        await go(page.id);
        await click(`document.querySelector('#panel .lk[data-go=${JSON.stringify(id)}]')`, id);
        await settle();
        must(await pageNow() === id, `从「${page.t}」往下钻到了 ${await pageNow()}，期望 ${id}`);
      }
    }
    s.checkErrors('红点和往下钻');
  }

  console.log('点选构件');
  await go('home');
  const pickPages = new Set(['bracket', 'dark', 'tube', 'statues', 'stair', 'spire', 'eaves', 'pingzuo', 'base', 'fujie', 'history']);
  let picked = '';
  const points = [[0.5, 0.5], [0.48, 0.58], [0.56, 0.46], [0.42, 0.52], [0.6, 0.62], [0.4, 0.4], [0.52, 0.36], [0.38, 0.66], [0.64, 0.44], [0.46, 0.7]];
  for (let y = 0.34; y <= 0.7 && !picked; y += 0.06) {
    for (let x = 0.36; x <= 0.64 && !picked; x += 0.06) points.push([+x.toFixed(2), +y.toFixed(2)]);
  }
  for (const [rx, ry] of points) {
    const top = await s.ev(`(() => {
      const c = document.getElementById('gl');
      const r = c.getBoundingClientRect();
      const x = r.left + r.width * ${rx}, y = r.top + r.height * ${ry};
      const el = document.elementFromPoint(x, y);
      if (!el || el.id !== 'gl') return el ? el.className || el.id : 'none';
      const opt = { bubbles: true, cancelable: true, clientX: x, clientY: y, pointerId: 1, button: 0, buttons: 1, isPrimary: true, pointerType: 'mouse' };
      c.dispatchEvent(new PointerEvent('pointerdown', opt));
      c.dispatchEvent(new PointerEvent('pointerup', { ...opt, buttons: 0 }));
      return 'gl';
    })()`);
    if (top !== 'gl') continue;
    await sleep(80);
    const id = await pageNow();
    if (id && id !== 'home') {
      must(pickPages.has(id), `点到构件后去了意外的页面 ${id}`);
      picked = id;
      break;
    }
  }
  must(picked, '在封面上点塔身没有进入任何构件页');
  console.log(`  封面点选 → ${picked}`);
  await go('bracket');
  let cap = '';
  for (const [rx, ry] of [[0.5, 0.48], [0.46, 0.55], [0.58, 0.42], [0.42, 0.6], [0.62, 0.58], [0.5, 0.35]]) {
    await s.ev(`(() => {
      const c = document.getElementById('gl');
      const r = c.getBoundingClientRect();
      const x = r.left + r.width * ${rx}, y = r.top + r.height * ${ry};
      const opt = { bubbles: true, cancelable: true, clientX: x, clientY: y, pointerId: 1, button: 0, buttons: 1, isPrimary: true, pointerType: 'mouse' };
      c.dispatchEvent(new PointerEvent('pointerdown', opt));
      c.dispatchEvent(new PointerEvent('pointerup', { ...opt, buttons: 0 }));
    })()`);
    await sleep(60);
    cap = await s.ev(`document.getElementById('cap').hidden ? '' : document.getElementById('cap').innerText`);
    if (cap) break;
  }
  must(cap, '斗拱实验室里点构件没有出现说明');
  console.log(`  斗拱点选 → ${cap.split('\n')[0]}`);
  s.checkErrors('点选');

  console.log('重建');
  await go('build');
  await s.waitFor(`window.__app.bk === 0 && window.__app.buildShown === 0`, '重建没有回到空地', 8000);
  must((await s.ev(`document.getElementById('bnow').innerText`)).includes('一块空地'), '第 0 步不是空地');
  await s.shot('build-0');
  // 两次点击放在同一次脚本里：开始会排一个定时器，但定时器要等当前脚本结束才跑，暂停来得及清掉它。
  const playing = await s.ev(`(() => { const b = document.getElementById('bplay'); b.click(); const t = b.textContent; b.click(); return t; })()`);
  must(playing === '暂停', `开始建造后按钮是「${playing}」`);
  await s.ev(`document.getElementById('bsl').value = '0'; document.getElementById('bsl').dispatchEvent(new Event('input', { bubbles: true }))`);
  await s.waitFor(`window.__app.bk === 0 && window.__app.buildShown === 0`, '暂停后没有回到空地', 8000);
  for (let n = 1; n <= STEPS.length; n++) {
    await click(`document.querySelector('#tools [data-b="1"]')`, `下一步 ${n}`);
    await s.waitFor(`window.__app.bk === ${n} && window.__app.buildShown >= ${n}`, `重建没有到第 ${n} 步`, 8000);
    const head = await s.ev(`document.querySelector('#bnow h3')?.textContent || ''`);
    if (n < STEPS.length) must(head === STEPS[n - 1], `第 ${n} 步标题是「${head}」，期望「${STEPS[n - 1]}」`);
    if (n % 8 === 0) console.log(`  第 ${n} / ${STEPS.length} 步`);
  }
  await settle();
  const done = await s.ev(`document.getElementById('bnow').innerText`);
  must(done.includes('一座木构的佛国') && done.includes(`${STEPS.length}`), `重建结束语不对：${done.slice(0, 80)}`);
  must(await s.ev(`document.querySelector('#tools [data-b="1"]').disabled`), '走完以后下一步应该是灰的');
  await assertDrawn('重建完成');
  await s.shot('build-done');
  await click(`document.querySelector('#tools [data-b="-1"]')`, '上一步');
  await s.waitFor(`window.__app.bk === ${STEPS.length - 1}`, '上一步没有退回', 8000);
  // 走完时标题换成落成语，最后一步的名字不会出现在标题上。退一格看到的是倒数第二步。
  must((await s.ev(`document.querySelector('#bnow h3').textContent`)) === STEPS.at(-2), '退一步后的标题不对');
  s.checkErrors('重建');

  if (!quick) {
    console.log('导览');
    await s.ev(`document.getElementById('tourBtn').click()`);
    const seen = [];
    let sawEnd = false;
    let maxBk = 0;
    const t0 = Date.now();
    while (Date.now() - t0 < 180000) {
      const o = JSON.parse(await s.ev(`JSON.stringify({ on: window.__app.tour.state().T_on, btn: document.getElementById('tourBtn').textContent, pos: document.getElementById('tpos').textContent, txt: document.getElementById('ttxt').textContent, bk: window.__app.bk })`));
      const m = /^导览 (\d+) \/ (\d+) · (.+)$/.exec(o.pos);
      if (m) {
        const i = Number(m[1]) - 1;
        must(Number(m[2]) === TOUR.length, `导览站数是 ${m[2]}`);
        if (seen[i] !== m[3]) {
          seen[i] = m[3];
          console.log(`  ${m[1]}/${m[2]} ${m[3]}`);
        }
      }
      if (String(o.txt).includes('导览到这里结束')) sawEnd = true;
      if (o.bk > maxBk) maxBk = o.bk;
      if (!o.on && o.btn === '▶ 导览' && seen.filter(Boolean).length === TOUR.length && sawEnd) break;
      if (!o.on && String(o.btn).includes('继续')) throw new Error(`导览中途停了：${o.pos} ${o.txt}`);
      s.checkErrors('导览');
      await sleep(30);
    }
    must(seen.filter(Boolean).length === TOUR.length, `导览没有走完：${seen.filter(Boolean).join('、')}`);
    for (let i = 0; i < TOUR.length; i++) must(seen[i] === TOUR[i], `导览第 ${i + 1} 站是「${seen[i]}」，期望「${TOUR[i]}」`);
    must(sawEnd, '导览没有念到结束语');
    must(maxBk >= STEPS.length, `导览里的重建只到第 ${maxBk} 步`);
    must(await s.ev(`document.getElementById('tsub').hidden`), '导览结束后字幕还在');
    s.checkErrors('导览结束');
  }

  console.log('窄屏');
  await s.setViewport(390, 844, true);
  await sleep(150);
  await go('home');
  const mobileCols = await s.ev(`getComputedStyle(document.querySelector('.page')).gridTemplateColumns`);
  must(await s.ev(`matchMedia('(max-width:880px)').matches`), '窄屏媒体查询没有生效');
  must(mobileCols.split(/\s+/).length === 1, `窄屏仍是多列：${mobileCols}`);
  must(await s.ev(`document.getElementById('pt').textContent`) === '应县木塔', '窄屏标题不对');
  must((await s.ev(`document.getElementById('tourBtn').textContent`)).includes('导览'), '窄屏没有导览按钮');
  await assertDrawn('窄屏');
  await s.shot('mobile');
  s.checkErrors('窄屏');
  if (s.ignored.length) console.log('忽略的环境报错', s.ignored.length);
  console.log('截图', s.outDir);
}

assertBuilt();
try {
  await withBrowser({ book: 'pagoda', width: 1440, height: 900, inject: INJECT }, async s => {
    try {
      await main(s);
    } catch (err) {
      try { console.error('失败截图', await s.shot('fail')); } catch { /* 截图本身失败就算了 */ }
      throw err;
    }
  });
  console.log(quick ? '应县木塔冒烟测试通过（quick）' : '应县木塔冒烟测试通过');
} catch (err) {
  console.error('\n应县木塔冒烟测试失败');
  console.error(err);
  process.exit(1);
}
