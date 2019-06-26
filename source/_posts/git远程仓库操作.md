---
title: git查看添加删除远程仓库
categories:
  - 编程
tags:
  - git
  - 远程仓库
comments: true
permalink: gitRemote.html
keywords: 'git,远程仓库'
abbrlink: 5413
date: 2018-12-16 00:00:00
---

本篇文章记录一些git远程仓库的常用操作和命令。
<!-- more -->

[![【数字生态，钜惠来袭】云服务器限时秒杀，首购1核1G 99元/年](/img/popularization/1537734-20190613143603431-1682477692.jpg)](https://cloud.tencent.com/redirect.php?redirect=1042&cps_key=c92a822e847f8d9a2f868d42d2065157&from=console)

## 查看远程仓库

```
git remote -v

```

## 删除远程仓库

```
git remote remove origin

```

## 添加远程仓库

```
git remote add origin 仓库地址

```

## 关联远程分支

重新关联远程仓库后，使用git pull更新代码时，会提示

[![git.jpg](https://i.postimg.cc/jSGTzzMK/git.jpg)](https://postimg.cc/4YbjGhCF)

大致意思就是当前本地分支没有关联远程分支，需要关联远程分支才能更新代码。可以使用如下命令：

```
git branch --set-upstream-to=origin/要关联的远程分支名称 本地分支名称

```