# 应县木塔

一本可以一层层点进去的应县木塔（佛宫寺释迦塔）立体书。和悬空寺是两本独立的书，共用 `reader/` 里的阅读器。

在线访问：https://jackywolf2008.github.io/chinese-architecture/pagoda/

介绍视频：https://jackywolf2008.github.io/chinese-architecture/video/

- `src/model.js`：塔身几何
- `src/stage.js`：剖切、分层、地震、构件实验室
- `src/content.js`：每页的文字、镜头和导览路线
- `src/index.html`：纸面外壳。样式用阅读器的 `reader/src/shell.css`
- `build.sh`：打成 `../docs/pagoda/`，并带上照片
- `video/`：约 90 秒介绍视频，画面从这本立体书里逐帧抓取（见 `video/README.md`）

```sh
npm install
npm run build
```

历史照片（`ta-1933.jpg`、`liang-dougong.jpg`、`liang-spire.jpg`）是梁思成《中国建筑史》图 64、图 65-2、图 65-3。立面和断面（`liang-elev.jpg`、`liang-sect.jpg`）是同书图 65、图 65-1，一九三五年测绘。读库版《图像中国建筑史》把这两张图补在王南的序里，不是该书原来的图版。版权归原作者所有。
