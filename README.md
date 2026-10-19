# 立体书

两本各自独立的立体书，放在同一个项目里。谁也不是谁的子目录。

书架：https://jackywolf2008.github.io/yingxian-tower/

| 书 | 源码 | 在线 |
| --- | --- | --- |
| 应县木塔 | `pagoda/` | https://jackywolf2008.github.io/yingxian-tower/pagoda/ |
| 悬空寺 | `hanging-temple/` | https://jackywolf2008.github.io/yingxian-tower/hanging-temple/ |

应县木塔的介绍视频（约 90 秒）：https://jackywolf2008.github.io/yingxian-tower/video/

```sh
sh build.sh
```

这会分别构建两本书，再把书架页写到 `docs/`。也可以只构建其中一本：`sh pagoda/build.sh`，或在 `hanging-temple/` 里执行 `npm run build`。GitHub Pages 从 `docs/` 发布。

以前的地址 `/xuankong/` 会跳到悬空寺。目录名用英文：`pagoda`、`hanging-temple`。

仓库根目录的两份梁思成著作 PDF 是应县木塔的参考书，不归悬空寺。

## 许可

- **代码**：[MIT](LICENSE)。包括两本书的页面、构建脚本，以及 `pagoda/video/` 下的源代码与脚本。
- **内容**：[CC BY 4.0](LICENSE-CONTENT)。包括两本书里的讲解文字与导览词、立体书的画面、项目封面（`pagoda/video/out/cover.jpg`），以及应县木塔的介绍视频（`pagoda/video/out/`、`docs/video/`）和它的配乐。可以转载、改编，也可以商用，但要署名并注明出处，例如：

  > 应县木塔，Jackywolf2008，https://github.com/Jackywolf2008/yingxian-tower ，CC BY 4.0

- **不在上述授权范围内**：
  - 历史照片与测绘图（`pagoda/ta-1933.jpg`、`pagoda/liang-*.jpg`，它们在 `docs/pagoda/` 里的副本，以及介绍视频里出现的这些画面）出自梁思成《中国建筑史》和《图像中国建筑史》（中国营造学社测绘），版权归原作者所有。
  - `docs/pagoda/three.module.min.js` 和悬空寺页面里打包的 three.js 是 [three.js](https://github.com/mrdoob/three.js)，MIT 许可，版权归 three.js 作者。
  - 页面和视频用到的马善政、思源宋体、思源黑体来自 Google Fonts，按 SIL Open Font License 1.1 授权；仓库里不含字体文件。
