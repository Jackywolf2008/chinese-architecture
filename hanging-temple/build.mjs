import * as esbuild from 'esbuild';
import { cpSync, mkdirSync, rmSync } from 'fs';

const dev = process.argv.includes('--dev');
const out = new URL('../docs/hanging-temple/', import.meta.url);
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !dev,
  format: 'esm',
  target: 'es2022',
  outfile: new URL('app.js', out).pathname,
  legalComments: 'none',
  sourcemap: dev,
  banner: {
    js: '/* three.js 0.186.1 | Copyright 2010-2026 Three.js Authors | MIT License | https://github.com/mrdoob/three.js */',
  },
});

cpSync(new URL('src/index.html', import.meta.url), new URL('index.html', out));
cpSync(new URL('src/shell.css', import.meta.url), new URL('shell.css', out));
console.log(dev ? 'docs/hanging-temple (dev)' : 'docs/hanging-temple');
