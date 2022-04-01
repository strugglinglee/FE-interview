#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://strugglinglee.github.io
# git push -f git@github.com:strugglinglee/strugglinglee.github.io.git main

# 如果发布到 https://strugglinglee.github.io/<REPO>
git push -f git@github.com:strugglinglee/vuepress-starter.git main:gh-pages

cd -
