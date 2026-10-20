// 两本立体书的冒烟测试一起跑。参数会原样传下去，例如 npm test -- --quick。
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ensureNode } from './smoke/node.mjs';

ensureNode();

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const tests = [
  ['悬空寺', 'hanging-temple/scripts/smoke.mjs'],
  ['应县木塔', 'pagoda/scripts/smoke.mjs'],
];
const flags = typeof globalThis.WebSocket === 'function' ? [] : ['--experimental-websocket'];
let failed = 0;
for (const [name, script] of tests) {
  console.log(`\n======== ${name} ========`);
  const r = spawnSync(process.execPath, [...flags, path.join(root, script), ...process.argv.slice(2)], {
    stdio: 'inherit',
    cwd: root,
  });
  if ((r.status ?? 1) !== 0) {
    console.error(`${name} 失败`);
    failed++;
  }
}
if (failed) process.exit(1);
console.log('\n两本都通过了');
