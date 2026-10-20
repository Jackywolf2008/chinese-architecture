#!/bin/sh
# 把应县木塔打进 ../docs/pagoda/。几何、正文和阅读器合成 app.js，页面和图片原样拷过去。
set -e
cd "$(dirname "$0")"
npm run build
cp ta-1933.jpg liang-*.jpg ../docs/pagoda/
rm -f ../docs/pagoda/three.module.min.js ../docs/pagoda/three.min.js
