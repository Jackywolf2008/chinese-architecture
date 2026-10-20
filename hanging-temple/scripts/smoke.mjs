// 悬空寺冒烟测试。浏览器和静态服务由仓库根目录的共用脚本负责。
import { ensureNode } from '../../scripts/smoke/node.mjs';
import { sleep, withBrowser } from '../../scripts/smoke/chrome.mjs';

ensureNode();

const quick = process.argv.includes('--quick');

try {
  await withBrowser({ book: 'hanging-temple', width: 1440, height: 900 }, async s => {
    async function open(hash) {
      await s.goto(`http://127.0.0.1:${s.port}/docs/hanging-temple/index.html${hash}`);
      // 错误框里一开始就有占位文案，但是 hidden。只有它被打开，才算启动失败。
      const v = await s.waitFor(`window.__app ? 'ok' : (!document.getElementById('err').hidden && document.getElementById('err').textContent) || ''`, '悬空寺没有启动', 20000);
      if (v !== 'ok') throw new Error(v);
    }
    async function settle() {
      for (let i = 0; i < 40; i++) {
        if (!await s.ev(`window.__app.moving ? 1 : 0`)) return;
        await sleep(100);
      }
    }
    console.log('浏览器', s.browser);

    await open('#home');
    await settle();
    if (quick) {
      await sleep(500);
      await s.shot('xk-home');
      await s.ev(`window.__app.go('beams')`);
      await settle();
      await sleep(800);
      await s.shot('xk-beams');
      console.log('err', await s.ev(`document.getElementById('err').hidden + ' ' + getComputedStyle(document.getElementById('err')).display`));
      s.checkErrors('quick');
      return;
    }
    await sleep(400);
    const diag = await s.ev(`(() => {
      const c = document.getElementById('gl');
      const gl = c.getContext('webgl2');
      const b = new Uint8Array(4);
      gl.readPixels(c.width / 2 | 0, c.height / 2 | 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, b);
      const a = window.__app;
      return JSON.stringify({
        pix: [...b],
        cam: a.cam.position.toArray().map(n => +n.toFixed(1)),
        calls: a.renderer.info.render.calls,
        tris: a.renderer.info.render.triangles,
        err: document.getElementById('err').hidden,
      });
    })()`);
    console.log('diag', diag);
    await s.shot('xk-home');
    await s.ev(`document.querySelector('.lb.go')?.click()`);
    await settle();
    await sleep(300);
    console.log('drill', await s.ev(`document.getElementById('pt').textContent`));
    await s.ev(`window.__app.go('beams')`);
    await settle();
    await sleep(700);
    await s.shot('xk-beams');
    await s.ev(`window.__app.go('posts')`);
    await settle();
    await sleep(200);
    await s.shot('xk-posts');
    await s.ev(`window.__app.go('joinery')`);
    await settle();
    await sleep(200);
    await s.shot('xk-lab');
    await s.ev(`window.__app.go('south')`);
    await settle();
    await sleep(200);
    const southLinks = await s.ev(`document.getElementById('panel').innerText`);
    if (!southLinks.includes('纯阳宫')) throw new Error('south page missing halls: ' + southLinks.slice(0, 200));
    await s.ev(`window.__app.go('chunyang')`);
    await settle();
    await sleep(200);
    await s.shot('xk-chunyang');
    const hall = await s.ev(`document.getElementById('pt').textContent`);
    console.log('hall', hall);
    if (hall !== '纯阳宫') throw new Error('hall page ' + hall);
    await s.ev(`window.__app.go('three')`);
    await settle();
    await sleep(200);
    await s.shot('xk-three');
    await s.ev(`window.__app.go('sanjiao')`);
    await settle();
    await sleep(200);
    await s.ev(`document.querySelector('[data-a="0"]').click()`);
    await settle();
    await sleep(200);
    await s.shot('xk-sanctum');
    await s.ev(`window.__app.go('today')`);
    await settle();
    const today = await s.ev(`document.getElementById('panel').innerText`);
    if (/待校|两本书|等实测/.test(today)) throw new Error('unfinished copy still on today: ' + today.slice(0, 300));
    console.log('today ok');
    await s.ev(`window.__app.go('bridge')`);
    await settle();
    await sleep(200);
    await s.shot('xk-bridge');
    await s.ev(`window.__app.go('court')`);
    await settle();
    await sleep(200);
    await s.shot('xk-court');
    await s.ev(`window.__app.go('build'); window.__app.bStop(); window.__app.bSet(0)`);
    await settle();
    await sleep(200);
    await s.shot('xk-build0');
    await s.ev(`window.__app.bStop(); window.__app.bSet(6)`);
    for (let i = 0; i < 30; i++) {
      if (await s.ev(`window.__app.shown`) >= 6) break;
      await sleep(200);
    }
    await sleep(800);
    await s.shot('xk-build6');
    await s.ev(`window.__app.tourPlay()`);
    await sleep(1200);
    console.log('tour', await s.ev(`document.getElementById('ttxt').textContent`));
    await s.ev(`window.__app.tourStop()`);
    await s.ev(`window.__app.go('home')`);
    await settle();
    await sleep(200);
    const before = await s.ev(`document.getElementById('pt').textContent`);
    await s.ev(`(() => {
      const c = document.getElementById('gl');
      const r = c.getBoundingClientRect();
      const x = r.left + r.width * 0.46, y = r.top + r.height * 0.46;
      const opt = { bubbles: true, clientX: x, clientY: y, pointerId: 1, button: 0, isPrimary: true };
      c.dispatchEvent(new PointerEvent('pointerdown', opt));
      c.dispatchEvent(new PointerEvent('pointerup', opt));
    })()`);
    await sleep(400);
    const picked = await s.ev(`document.getElementById('pt').textContent`);
    console.log('pick', before, '->', picked);
    await s.ev(`document.getElementById('back').click()`);
    await sleep(200);
    console.log('back', await s.ev(`document.getElementById('pt').textContent`));
    await s.ev(`document.querySelector('[data-t="xray"]').click()`);
    await sleep(300);
    await s.ev(`document.querySelector('[data-t="explode"]').click()`);
    await sleep(300);
    await s.shot('xk-tools');
    await s.setViewport(390, 844, true);
    await s.ev(`window.__app.go('home')`);
    await settle();
    await sleep(300);
    await s.shot('xk-mobile');
    console.log('mobile', await s.ev(`JSON.stringify({title: document.getElementById('pt').textContent, cols: getComputedStyle(document.querySelector('.page')).gridTemplateColumns, tour: document.getElementById('tourBtn').textContent})`));
    console.log(await s.ev(`JSON.stringify({steps: window.__app.steps.length, page: document.getElementById('pt').textContent, shown: window.__app.shown, bk: window.__app.bk})`));
    s.checkErrors('结束时');
  });
  console.log(quick ? '悬空寺冒烟测试通过（quick）' : '悬空寺冒烟测试通过');
} catch (err) {
  console.error('\n悬空寺冒烟测试失败');
  console.error(err);
  process.exit(1);
}
