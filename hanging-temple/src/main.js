import { boot } from './engine.js';

boot().catch(e => {
  console.error(e);
  const el = document.getElementById('err');
  if (el) {
    el.hidden = false;
    el.textContent = '三维场景初始化失败：' + (e && e.message ? e.message : e);
  }
  document.getElementById('loading')?.classList.add('gone');
});
