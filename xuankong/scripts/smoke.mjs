import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const port = 8765;
const server = spawn('python3', ['-m', 'http.server', String(port), '--bind', '127.0.0.1'], { cwd: '/workspace', stdio: 'ignore' });
const chrome = spawn('google-chrome', [
  '--headless=new', '--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist',
  '--user-data-dir=/tmp/xk-chrome', '--remote-debugging-port=9222', '--window-size=1440,900', 'about:blank',
], { stdio: 'ignore' });

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function json(url) {
  for (let i = 0; i < 40; i++) {
    try { const r = await fetch(url); if (r.ok) return r.json(); } catch {}
    await sleep(200);
  }
  throw new Error('devtools not up');
}

await json('http://127.0.0.1:9222/json/version');
const targets = await json('http://127.0.0.1:9222/json/list');
const page = targets.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
let id = 0;
const pending = new Map();
ws.onmessage = ev => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) pending.get(msg.id)(msg);
};
function send(method, params = {}) {
  const msgId = ++id;
  return new Promise(res => { pending.set(msgId, res); ws.send(JSON.stringify({ id: msgId, method, params })); });
}
await send('Page.enable');
await send('Runtime.enable');
const errors = [];
ws.addEventListener('message', ev => {
  const msg = JSON.parse(ev.data);
  if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails.text + ' ' + (msg.params.exceptionDetails.exception?.description || ''));
  if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') errors.push(msg.params.args.map(a => a.value || a.description).join(' '));
});

async function open(hash) {
  await send('Page.navigate', { url: `http://127.0.0.1:${port}/docs/xuankong/index.html${hash}` });
  await sleep(1200);
  for (let i = 0; i < 20; i++) {
    const r = await send('Runtime.evaluate', { expression: 'window.__app ? "ok" : document.getElementById("err")?.textContent || ""', returnByValue: true });
    const v = r.result?.result?.value;
    if (v === 'ok') return;
    if (v) throw new Error(v);
    await sleep(200);
  }
  const body = await send('Runtime.evaluate', { expression: 'document.body ? document.body.innerText.slice(0,500) : "no body"', returnByValue: true });
  console.log('body', body.result?.result?.value);
  console.log('errors', errors);
  throw new Error('app did not boot');
}
async function shot(name) {
  const data = await ev(`(() => {
    const c = document.getElementById('gl');
    let d = document.getElementById('glshot');
    if (!d) {
      d = document.createElement('canvas');
      d.id = 'glshot';
      d.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none';
      c.insertAdjacentElement('afterend', d);
    }
    d.width = c.width;
    d.height = c.height;
    const ctx = d.getContext('2d');
    ctx.drawImage(c, 0, 0);
    return d.toDataURL('image/jpeg', 0.72);
  })()`);
  writeFileSync(`/tmp/${name}-gl.jpg`, Buffer.from(String(data).replace(/^data:image\/jpeg;base64,/, ''), 'base64'));
  const r = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(`/tmp/${name}.png`, Buffer.from(r.result.data, 'base64'));
}
async function settle() {
  for (let i = 0; i < 40; i++) {
    const v = await ev(`window.__app.moving ? 1 : 0`);
    if (!v) return;
    await sleep(100);
  }
}
async function ev(expr) {
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  if (r.result?.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails));
  return r.result?.result?.value;
}

const quick = process.argv.includes('--quick');
await open('#home');
await settle();
if (quick) {
  await sleep(500);
  await shot('xk-home');
  await ev(`window.__app.go('beams')`);
  await settle();
  await sleep(800);
  await shot('xk-beams');
  const hidden = await ev(`document.getElementById('err').hidden + ' ' + getComputedStyle(document.getElementById('err')).display`);
  console.log('err', hidden);
  console.log('errors', errors);
  ws.close(); chrome.kill(); server.kill();
  process.exit(errors.length ? 1 : 0);
}
await sleep(400);
const diag = await ev(`(() => {
  const c = document.getElementById('gl');
  const gl = c.getContext('webgl2');
  const b = new Uint8Array(4);
  gl.readPixels(c.width/2|0, c.height/2|0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, b);
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
await shot('xk-home');
await ev(`document.querySelector('.lb.go')?.click()`);
await settle();
await sleep(300);
const drilled = await ev(`document.getElementById('pt').textContent`);
console.log('drill', drilled);
await ev(`window.__app.go('beams')`);
await settle();
await sleep(700);
await shot('xk-beams');
await ev(`window.__app.go('posts')`);
await settle();
await sleep(200);
await shot('xk-posts');
await ev(`window.__app.go('joinery')`);
await settle();
await sleep(200);
await shot('xk-lab');
await ev(`window.__app.go('three')`);
await settle();
await sleep(200);
await shot('xk-three');
await ev(`document.querySelector('[data-a="0"]').click()`);
await settle();
await sleep(200);
await shot('xk-sanctum');
await ev(`window.__app.go('bridge')`);
await settle();
await sleep(200);
await shot('xk-bridge');
await ev(`window.__app.go('court')`);
await settle();
await sleep(200);
await shot('xk-court');
await ev(`window.__app.go('build'); window.__app.bStop(); window.__app.bSet(0)`);
await settle();
await sleep(200);
await shot('xk-build0');
await ev(`window.__app.bStop(); window.__app.bSet(6)`);
for (let i = 0; i < 30; i++) {
  const shown = await ev(`window.__app.shown`);
  if (shown >= 6) break;
  await sleep(200);
}
await sleep(800);
await shot('xk-build6');
await ev(`window.__app.tourPlay()`);
await sleep(1200);
const sub = await ev(`document.getElementById('ttxt').textContent`);
console.log('tour', sub);
await ev(`window.__app.tourStop()`);
await ev(`window.__app.go('home')`);
await settle();
await sleep(200);
const before = await ev(`document.getElementById('pt').textContent`);
await ev(`(() => {
  const c = document.getElementById('gl');
  const r = c.getBoundingClientRect();
  const x = r.left + r.width * 0.46, y = r.top + r.height * 0.46;
  const opt = { bubbles: true, clientX: x, clientY: y, pointerId: 1, button: 0, isPrimary: true };
  c.dispatchEvent(new PointerEvent('pointerdown', opt));
  c.dispatchEvent(new PointerEvent('pointerup', opt));
})()`);
await sleep(400);
const picked = await ev(`document.getElementById('pt').textContent`);
console.log('pick', before, '->', picked);
await ev(`document.getElementById('back').click()`);
await sleep(200);
console.log('back', await ev(`document.getElementById('pt').textContent`));
await ev(`document.querySelector('[data-t="xray"]').click()`);
await sleep(300);
await ev(`document.querySelector('[data-t="explode"]').click()`);
await sleep(300);
await shot('xk-tools');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await ev(`window.__app.go('home')`);
await settle();
await sleep(300);
await shot('xk-mobile');
const mobile = await ev(`JSON.stringify({title: document.getElementById('pt').textContent, cols: getComputedStyle(document.querySelector('.page')).gridTemplateColumns, tour: document.getElementById('tourBtn').textContent})`);
console.log('mobile', mobile);
const info = await ev(`JSON.stringify({steps: window.__app.steps.length, page: document.getElementById('pt').textContent, shown: window.__app.shown, bk: window.__app.bk})`);
console.log(info);
console.log('errors', errors);
ws.close();
chrome.kill();
server.kill();
if (errors.length) process.exit(1);
