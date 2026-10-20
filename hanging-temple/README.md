# 悬空寺

一本可以一层层点进去的悬空寺立体书。和应县木塔是两本独立的书，共用 `reader/` 里的阅读器。`npm run build` 再打成一个页面。

在线访问：https://jackywolf2008.github.io/chinese-architecture/hanging-temple/

- `src/model.js`：崖壁、飞梁、南北楼、栈道、构件实验室
- `src/stage.js`：剖开岩壁、透视、分层、摇一摇
- `src/content.js`：每页的文字、镜头和导览路线
- `src/index.html`：纸面外壳。样式用阅读器的 `reader/src/shell.css`

```sh
npm install
npm run build
```

输出到 `../docs/hanging-temple/`。本地查看需要一个静态服务器，例如在仓库根目录执行 `python3 -m http.server`，然后打开 `/docs/hanging-temple/`。

模型是结构示意，不是测绘。尺寸和两处互相不一致的记载，写在页面底部的“说明与出处”里。

代码随仓库按 [MIT](../LICENSE) 授权。讲解文字和画面按 [CC BY 4.0](../LICENSE-CONTENT) 授权。
