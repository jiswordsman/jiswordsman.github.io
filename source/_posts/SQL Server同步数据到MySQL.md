---
title: SQL Server同步数据到MySQL
categories:
  - 工具
tags:
  - mysql
  - Navicat
comments: true
permalink: navicat.html
keywords: 'mysql,数据同步,sqlServer'
abbrlink: 21617
date: 2019-03-18 00:00:00
---

# 背景

项目上要迁移几个SQL Server的数据库表到MySQL，SQL Server数据库表的建表语句跟MySQL是不同的，迁移库时如果要一个一个表的写SQL，毫无疑问工作量很大。作为一个有追求的程序猿，当然不甘心做低效又没技术含量的事儿了。怎么办呢？

好在百度了一下，发现常用的Navicat Premium就可以实现这个需求(顿时对它有点刮目相看呢)，顺便还能把数据也迁移过去。

# 操作

1. 打开目标数据库连接(mysql)，新建一个同名的数据库，然后在右侧界面点击“导入向导”按钮。[![image.png](https://i.postimg.cc/yd1nttH1/image.png)](https://postimg.cc/Y4P1mX0Z)
2. 在弹出的导入向导界面中选择“ODBC”，下一步
3. 在数据链接属性界面的“提供程序”页签，选择SQL Server Native Client10.0，然后切换到“连接”页签
4. 输入源数据库(SQL Server)的服务器ip、端口号、用户名、密码等信息。选择数据库。确认。跳转到导入向导界面。
[![image.png](https://i.postimg.cc/DfCYkv0t/image.png)](https://postimg.cc/7b2NSygV)
5. 选择要同步的表，下一步。
[![image.png](https://i.postimg.cc/vHc2GJ6D/image.png)](https://postimg.cc/vcwtzShd)
6. 配置目标表的新表名(可以沿用原来的表名)，下一步。[![2.png](https://i.postimg.cc/hP6yv29s/2.png)](https://postimg.cc/jL6QkQ3n)
7. 配置新表的新字段名(可以沿用原来的字段名)，下一步。
8. 开始任务，静静得等待完成就好了。

# 注意事项

索引、唯一约束等需要自己手工添加。

# 后续
Navicat Premium是一个非常非常强大的工具，除了今天介绍的导入向导功能，还有服务器监控、自定义报表、自定义批处理作业、数据建模等非常强大企业级应用功能，感兴趣的同学可以自行了解一下。