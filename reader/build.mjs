// 把一本书的 main.js 打进 docs/<name>/。几何、正文、阅读器合成一个 app.js，样式和页面原样拷过去。
import { createRequire } from 'node:module';
import { cpSync, mkdirSync, rmSync } from 'fs';
import path from 'node:path';

export async function buildBook({ name, dev = false, files = [] }) {
  // esbuild 装在每本书自己的 node_modules，阅读器目录不再单独装一份。
  const esbuild = createRequire(path.join(process.cwd(), 'package.json'))('esbuild');
  const out = new URL(`../docs/${name}/`, import.meta.url);
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  await esbuild.build({
    entryPoints: ['src/main.js'],
    bundle: true,
    minify: !dev,
    format: 'esm',
    target: 'es2022',
    charset: 'utf8',
    outfile: new URL('app.js', out).pathname,
    legalComments: 'none',
    sourcemap: dev,
    // 阅读器在仓库根的 reader/ 里，three 装在每本书自己的 node_modules。
    alias: { three: path.resolve(process.cwd(), 'node_modules/three') },
    banner: {
      js: '/* three.js 0.186.1 | Copyright 2010-2026 Three.js Authors | MIT License | https://github.com/mrdoob/three.js */',
    },
  });
  for (const file of files) cpSync(file.from, new URL(file.to, out));
  console.log(dev ? `docs/${name} (dev)` : `docs/${name}`);
}
