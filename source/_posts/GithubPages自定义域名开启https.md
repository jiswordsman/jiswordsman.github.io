---
title: Github Pages自定义域名开启https
date: 2018-11-29
categories:
  - 其他
  - 博客
tags:
  - 自定义域名
  - https
  - Github Pages
comments: true
abbrlink: 1
permalink: customDomainHttps.html
keywords: Github Pages,自定义域名,https
---

[![【数字生态，钜惠来袭】云服务器限时秒杀，首购1核1G 99元/年](/img/popularization/1537734-20190613143603431-1682477692.jpg)](https://cloud.tencent.com/redirect.php?redirect=1042&cps_key=c92a822e847f8d9a2f868d42d2065157&from=console)

Github Pages设置自定义域名，通过https访问会提示警告，很不友好。这是因为没有为网站提供证书，而证书需要购买。下面介绍一种简单免费的去除警告的方法，通过netlify实现。
<!-- more -->
![此处输入图片的描述][1]

 1. 打开[netlify](https://www.netlify.com/)，以github账号登陆(可能需要翻墙，翻墙教程见[免费翻墙工具](https://www.zybuluo.com/buzhimingyue/note/1316517))。
 
 ![此处输入图片的描述][2]
 2. 点击右上角new site from git
 
 ![此处输入图片的描述][3]
 3. 因为我们是github，因此这里选择github
 
 ![](http://piwgc559z.bkt.clouddn.com/18-11-29/56895543.jpg)
 4. 点击之后会提示你授权，然后输密码
 
 ![此处输入图片的描述][4]
 5. 授权成功后，会读取你的项目，点击youname.github.io项目，直接默认下一步即可
 
 ![此处输入图片的描述][5]
 6. 然后点击site setting设置，找到https，点击custom domain
 
 ![此处输入图片的描述][6]
 ![此处输入图片的描述][7]
 7. 点击edit site name，输入你自定义的名字，即可更改成功
 
 ![此处输入图片的描述][8]
 8. 然后通过你自定义的名字，通过https 访问就不会提示警告了




 


  [1]: http://piwgc559z.bkt.clouddn.com/18-11-29/22374790.jpg
  [2]: http://piwgc559z.bkt.clouddn.com/18-11-29/34199829.jpg
  [3]: http://piwgc559z.bkt.clouddn.com/18-11-29/23086520.jpg
  [4]: http://piwgc559z.bkt.clouddn.com/18-11-29/62933763.jpg
  [5]: http://piwgc559z.bkt.clouddn.com/18-11-29/3930489.jpg
  [6]: http://piwgc559z.bkt.clouddn.com/18-11-29/73819732.jpg
  [7]: http://piwgc559z.bkt.clouddn.com/18-11-29/42880127.jpg
  [8]: http://piwgc559z.bkt.clouddn.com/18-11-29/66150010.jpg