// 无头 Chrome + DevTools，给两本书的冒烟测试共用。
// 不比较像素基准：SwiftShader、系统字体和动画帧在不同机器上对不齐，截图只留给人眼对照。
import { spawn, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync, statSync } from 'node:fs';
import http from 'node:http';
import net from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { inflateSync } from 'node:zlib';

export const repoRoot = path.resolve(fileURLToPath(new URL('../..', import.meta.url)));

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

export const sleep = ms => new Promise(r => setTimeout(r, ms));

function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

function which(cmd) {
  const r = spawnSync(process.platform === 'win32' ? 'where' : 'which', [cmd], { encoding: 'utf8' });
  if (r.status !== 0) return '';
  return r.stdout.split(/\r?\n/).map(s => s.trim()).find(Boolean) || '';
}

// CHROME_PATH 优先，其次 PATH 和常见安装位置。
export function findChrome() {
  const fromEnv = process.env.CHROME_PATH || process.env.CHROMIUM_PATH;
  if (fromEnv) {
    if (!existsSync(fromEnv)) throw new Error(`CHROME_PATH 指向的文件不存在：${fromEnv}`);
    return fromEnv;
  }
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome']) {
    const hit = which(name);
    if (hit) return hit;
  }
  const fixed = [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ];
  for (const p of fixed) if (existsSync(p)) return p;
  throw new Error('找不到 Chrome 或 Chromium。请安装浏览器，或设置环境变量 CHROME_PATH。');
}

function startServer(root) {
  const rootResolved = path.resolve(root);
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    let rel = decodeURIComponent(url.pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.resolve(rootResolved, `.${rel}`);
    if (file !== rootResolved && !file.startsWith(rootResolved + path.sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    let target = file;
    try {
      if (statSync(target).isDirectory()) target = path.join(target, 'index.html');
    } catch {
      res.writeHead(404);
      res.end('not found');
      return;
    }
    try {
      const data = readFileSync(target);
      res.writeHead(200, {
        'content-type': TYPES[path.extname(target)] || 'application/octet-stream',
        'cache-control': 'no-store',
      });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('not found');
    }
  });
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

// 只忽略字体 CDN 和 favicon：页面本来就允许字体加载失败后用系统字体。three.js 加载失败不能忽略。
function ignorable(text) {
  return /favicon\.ico/i.test(text) || (/fonts\.(googleapis|gstatic)\.com/i.test(text) && /fail|error|404|ERR_|blocked/i.test(text));
}

function decodePng(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('截图不是 PNG');
  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  let interlace = 0;
  const idat = [];
  while (offset + 8 <= buf.length) {
    const len = buf.readUInt32BE(offset);
    const type = buf.toString('ascii', offset + 4, offset + 8);
    const data = buf.subarray(offset + 8, offset + 8 + len);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    } else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
    offset += 12 + len;
  }
  if (interlace) throw new Error('不支持隔行 PNG');
  if (bitDepth !== 8) throw new Error(`不支持的 PNG 位深 ${bitDepth}`);
  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[colorType];
  if (!channels) throw new Error(`不支持的 PNG 颜色类型 ${colorType}`);
  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const out = Buffer.alloc(height * stride);
  let p = 0;
  const paeth = (a, b, c) => {
    const pa = Math.abs(b - c);
    const pb = Math.abs(a - c);
    const pc = Math.abs(a + b - 2 * c);
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
  };
  for (let y = 0; y < height; y++) {
    const filter = raw[p++];
    const row = y * stride;
    const prev = y ? out.subarray((y - 1) * stride, y * stride) : null;
    for (let x = 0; x < stride; x++) {
      const left = x >= channels ? out[row + x - channels] : 0;
      const up = prev ? prev[x] : 0;
      const ul = prev && x >= channels ? prev[x - channels] : 0;
      const v = raw[p++];
      let value = v;
      if (filter === 1) value = v + left;
      else if (filter === 2) value = v + up;
      else if (filter === 3) value = v + ((left + up) >> 1);
      else if (filter === 4) value = v + paeth(left, up, ul);
      else if (filter !== 0) throw new Error(`不支持的 PNG 滤波器 ${filter}`);
      out[row + x] = value & 255;
    }
  }
  return { width, height, channels, data: out };
}

// 看画面中间有没有模型：纸色很亮，木头和墨线会把亮度拉开。
export function imageSpread(png) {
  const { width, height, channels, data } = png;
  const x0 = Math.floor(width * 0.2);
  const x1 = Math.floor(width * 0.8);
  const y0 = Math.floor(height * 0.15);
  const y1 = Math.floor(height * 0.8);
  let n = 0;
  let dark = 0;
  let min = 255;
  let max = 0;
  const step = Math.max(1, Math.floor(Math.min(width, height) / 80));
  for (let y = y0; y < y1; y += step) {
    for (let x = x0; x < x1; x += step) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = channels > 1 ? data[i + 1] : r;
      const b = channels > 2 ? data[i + 2] : r;
      const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (l < 150) dark++;
      if (l < min) min = l;
      if (l > max) max = l;
      n++;
    }
  }
  return { spread: max - min, darkRatio: n ? dark / n : 0, samples: n, width, height };
}

export async function withBrowser(opt, fn) {
  const width = opt.width || 1440;
  const height = opt.height || 900;
  const outDir = path.join(repoRoot, 'smoke-out', opt.book);
  mkdirSync(outDir, { recursive: true });
  const server = await startServer(repoRoot);
  const port = server.address().port;
  const debugPort = await freePort();
  const userData = mkdtempSync(path.join(tmpdir(), `smoke-${opt.book}-`));
  const chromePath = findChrome();
  let stderr = '';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader',
    '--ignore-gpu-blocklist',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--remote-allow-origins=*',
    `--user-data-dir=${userData}`,
    `--remote-debugging-port=${debugPort}`,
    `--window-size=${width},${height}`,
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });
  chrome.stderr.on('data', d => {
    stderr += d.toString();
    if (stderr.length > 12000) stderr = stderr.slice(-12000);
  });

  const stop = () => {
    try { chrome.kill('SIGKILL'); } catch { /* 已经退出 */ }
    try { server.close(); } catch { /* 已经关掉 */ }
    try { rmSync(userData, { recursive: true, force: true }); } catch { /* 临时目录 */ }
  };

  try {
    const version = await waitJson(`http://127.0.0.1:${debugPort}/json/version`);
    const targets = await waitJson(`http://127.0.0.1:${debugPort}/json/list`);
    const page = targets.find(t => t.type === 'page');
    if (!page) throw new Error('Chrome 没有打开页面');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.addEventListener('open', res, { once: true });
      ws.addEventListener('error', () => rej(new Error('DevTools WebSocket 连接失败')), { once: true });
    });
    const session = new Session({ ws, port, outDir, browser: version.Browser || chromePath });
    await session.send('Page.enable');
    await session.send('Runtime.enable');
    await session.send('Log.enable');
    await session.send('Emulation.setEmulatedMedia', {
      features: [{ name: 'prefers-color-scheme', value: 'light' }],
    });
    if (opt.inject) await session.send('Page.addScriptToEvaluateOnNewDocument', { source: opt.inject });
    try {
      await fn(session);
      session.checkErrors('结束时');
    } finally {
      try { ws.close(); } catch { /* 关闭中 */ }
    }
  } catch (err) {
    if (/DevTools|没有起来|WebSocket|ECONNREFUSED/.test(String(err.message))) {
      const useful = stderr.split('\n').filter(line => line.trim() && !/dbus|GPU process|vk_|Fontconfig|DEPRECATED_ENDPOINT|TensorFlow|DevTools listening/.test(line)).join('\n');
      if (useful.trim()) err.message += `\nChrome:\n${useful.trim().slice(-1500)}`;
    }
    throw err;
  } finally {
    stop();
  }
}

async function waitJson(url) {
  for (let i = 0; i < 50; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return r.json();
    } catch { /* Chrome 还没起来 */ }
    await sleep(200);
  }
  throw new Error('Chrome DevTools 没有起来');
}

class Session {
  constructor({ ws, port, outDir, browser }) {
    this.ws = ws;
    this.port = port;
    this.outDir = outDir;
    this.browser = browser;
    this.errors = [];
    this.ignored = [];
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener('message', ev => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        this.pending.get(msg.id)(msg);
        return;
      }
      this.onEvent(msg);
    });
  }

  onEvent(msg) {
    if (msg.method === 'Runtime.exceptionThrown') {
      const d = msg.params.exceptionDetails;
      this.pushError(`${d.text || ''} ${d.exception?.description || ''}`.trim());
    } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
      this.pushError(msg.params.args.map(a => a.value ?? a.description ?? a.unserializableValue ?? '').join(' '));
    } else if (msg.method === 'Log.entryAdded' && msg.params.entry?.level === 'error') {
      const e = msg.params.entry;
      this.pushError(`${e.text || ''} ${e.url || ''}`.trim());
    }
  }

  pushError(text) {
    const line = String(text || '').trim();
    if (!line) return;
    if (ignorable(line)) {
      if (!this.ignored.includes(line)) this.ignored.push(line);
      return;
    }
    if (!this.errors.includes(line)) this.errors.push(line);
  }

  checkErrors(where) {
    if (!this.errors.length) return;
    throw new Error(`${where}有控制台错误：\n${this.errors.map(e => `- ${e}`).join('\n')}`);
  }

  send(method, params = {}, timeout = 30000) {
    const msgId = ++this.id;
    return new Promise((res, rej) => {
      const timer = setTimeout(() => {
        this.pending.delete(msgId);
        rej(new Error(`DevTools 超时：${method}`));
      }, timeout);
      this.pending.set(msgId, msg => {
        clearTimeout(timer);
        this.pending.delete(msgId);
        if (msg.error) rej(new Error(`${method}：${msg.error.message || JSON.stringify(msg.error)}`));
        else res(msg);
      });
      this.ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  async ev(expr) {
    const r = await this.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    const details = r.result?.exceptionDetails;
    if (details) throw new Error(details.exception?.description || details.text || '页面脚本抛错');
    return r.result?.result?.value;
  }

  async waitFor(expr, label, timeout = 20000) {
    const t0 = Date.now();
    let last = '';
    while (Date.now() - t0 < timeout) {
      try {
        const v = await this.ev(expr);
        if (v) return v;
        last = JSON.stringify(v);
      } catch (e) {
        last = e.message;
      }
      await sleep(80);
    }
    throw new Error(`${label}（${timeout}ms）${last ? `：${last}` : ''}`);
  }

  async goto(url) {
    await this.send('Page.navigate', { url });
    await this.waitFor(`document.readyState === 'complete'`, '页面没有加载完', 20000);
  }

  async shot(name) {
    const r = await this.send('Page.captureScreenshot', { format: 'png' });
    const buf = Buffer.from(r.result.data, 'base64');
    const file = path.join(this.outDir, `${name}.png`);
    writeFileSync(file, buf);
    return file;
  }

  // 截画布中间一块，用来判断三维有没有画出来。不把这块存下来。
  async canvasSpread() {
    const box = await this.ev(`(() => {
      const r = document.getElementById('gl').getBoundingClientRect();
      return { x: r.x, y: r.y, w: r.width, h: r.height };
    })()`);
    if (!box || box.w < 40 || box.h < 40) throw new Error('画布尺寸不对');
    const clip = {
      x: box.x + box.w * 0.28,
      y: box.y + box.h * 0.22,
      width: Math.max(8, box.w * 0.44),
      height: Math.max(8, box.h * 0.5),
      scale: 1,
    };
    const r = await this.send('Page.captureScreenshot', { format: 'png', clip });
    return imageSpread(decodePng(Buffer.from(r.result.data, 'base64')));
  }

  async setViewport(w, h, mobile) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width: w,
      height: h,
      deviceScaleFactor: 1,
      mobile: !!mobile,
    });
  }
}
