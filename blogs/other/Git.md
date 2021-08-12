---
title: Git
date: 2021-08-10
sidebar: 'auto'
categories:
  - 其他
tags:
  - Git
---

::: tip

分布式版本控制系统

:::

<!-- more -->

---

## 语法：

mkdir name 创建文件夹

git init 创建 git 项目

git add read.txt 向 git 库添加文件

git commit -m “explain” 向库提交多个文件，-m 后面是注释

git status 查看当前状态，若有修改文件但未提交会有提醒

git diff read.txt 查看文件修改之处

git log --pretty=oneline 查看修改日志信息

git reset --hard HEAD^ 回退到上一个版本，多加^表示再上一个版本

git checkout -- file 撤销修改

git checkout -b dev 或 git switch -c dev 创建并切换分支

git checkout master 或 git switch master 切换到 master 分支

git branch 查看当前分支

git merge dev 合并 dev 到 master 分支上

git branch -d dev 删除 dev 分支
