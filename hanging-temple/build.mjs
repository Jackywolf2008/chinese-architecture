import { buildBook } from '../reader/build.mjs';

await buildBook({
  name: 'hanging-temple',
  dev: process.argv.includes('--dev'),
  files: [
    { from: 'src/index.html', to: 'index.html' },
    { from: '../reader/src/shell.css', to: 'shell.css' },
  ],
});
