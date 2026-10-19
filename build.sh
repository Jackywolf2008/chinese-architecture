#!/bin/sh
# 发布整个书架：两本各自构建，再加上入口页和旧地址跳转。GitHub Pages 从 docs/ 发布。
set -e
cd "$(dirname "$0")"
sh pagoda/build.sh
( cd hanging-temple && npm run build )
cp site/index.html docs/index.html
rm -rf docs/xuankong
mkdir -p docs/xuankong
cat > docs/xuankong/index.html << 'EOF'
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<link rel="canonical" href="../hanging-temple/">
<title>悬空寺</title>
<script>location.replace('../hanging-temple/' + location.hash);</script>
</head>
<body>
<p><a href="../hanging-temple/">悬空寺在这里。</a></p>
</body>
</html>
EOF
touch docs/.nojekyll
