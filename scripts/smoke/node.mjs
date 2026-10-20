// Node 22 起全局才有 WebSocket。Node 20 里它还在 --experimental-websocket 后面，这里自动加上再跑一遍。
import { spawnSync } from 'node:child_process';

export function ensureNode() {
  const major = Number(process.versions.node.split('.')[0]);
  if (major < 20) {
    console.error(`需要 Node.js 20 或更高版本，当前是 ${process.version}`);
    process.exit(1);
  }
  if (typeof globalThis.WebSocket === 'function') return;
  if (process.execArgv.includes('--experimental-websocket')) {
    console.error('当前 Node 即使加上 --experimental-websocket 也没有全局 WebSocket。请升级到 Node 22，或使用 20 的最新小版本。');
    process.exit(1);
  }
  const r = spawnSync(process.execPath, ['--experimental-websocket', ...process.execArgv, ...process.argv.slice(1)], {
    stdio: 'inherit',
    env: process.env,
  });
  process.exit(r.status === null ? 1 : r.status);
}
