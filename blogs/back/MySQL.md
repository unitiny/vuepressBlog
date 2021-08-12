---
title: MySQL
date: 2021-08-09
sidebar: 'auto'
categories:
  - 后端
tags:
  - 数据库
  - MySQL
---

::: tip

储存数据的神秘空间

:::

<!-- more -->

---

## 使用

[MySQL 安装教程](https://www.cnblogs.com/winton-nfs/p/11524007.html)

[Sqlyog 安装教程](https://blog.csdn.net/lihua5419/article/details/73881837/)

[phpMyAdmin 安装教程](https://www.php.cn/jishu/mysql/409664.html)

启动 mysql -u root -p 要有设置环境变量后

ctrl+c 强行终止进程

## 语法

### 表格相关

- show databases 展示数据

- use school 使用学校这个表

- show tables 展示所有学校表里的表格名

- describe student 展示表格名为 student 的数据

- create databases 名 创建表单

- drop 删除表格

- 修改字段格式(了解)

      	```mysql
      	alter table goodstudent1 modify age varchar(10);
      	```

### 插入数据

插入表格 goodstudent1 的 name 和 sex 字段多个值

```
INSERT INTO `goodstudent1`(`name`,`sex`) VALUES('张山','男'),('阿瑟','女'),('kk','女');
```

### 更新数据

```mysql
UPDATE goodstudent SET name='张狂' WHERE id=2;
UPDATE goodstudent SET sex='男' WHERE id<15;
UPDATE student SET birthday=CURRENT DATE WHERE Id BETWEEN 1 AND 2
UPDATE student SET age=12 WHERE id!=3 AND hobby='dfsa';
```

### 删除数据

删除 chat 表中符合 from='小李' 和 to='小明'条件的字段

```mysql
DELETE FROM chat WHERE `from`='小李' AND `to`='小明'
```

### 查询数据

格式： select 列名 as 改名 from 表

#### **模糊查询**

- like 两种写法 返回值为 1 或零

```mysql
// 查找subject表的subjectname字段其中是否含有’数学‘这一关键字
SELECT `subjectname` LIKE '%数学%' FROM `subject`
SELECT `subjectname` FROM `subject` WHERE `subjectname` LIKE '%数学%'
```

- in 要全名

```mysql
SELECT `subjectname` FROM `subject` WHERE `subjectname` IN ('Java程序设计-1');
```

#### 联表查询

inner join 只要找到符合条件的都写上

#### 升降序

order by 字段名 DESC/ASC 降/升

#### 分页

limit 10，5； 从第十条数据开始，每页五条

## 问题

- 1064：语法错误

观察,;``是否使用正确

- 1062：Duplicate entry '2' for key 'goodstudent1.PRIMARY'

id 重复 把表格改为 id 自增，且不用插入 id，系统自动配给。

- 登录报错

[看看别人怎么说](https://blog.csdn.net/lihua5419/article/details/80394716)

- ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost' (10061) 无法连接数据库

[看看别人怎么做](https://blog.csdn.net/chen97_08/article/details/81484286)

- 执行 sql 语句但不更新数据库

[看看别人怎么办](https://blog.csdn.net/qq_28602957/article/details/51019267)

- 错误：undefined function xxx()

修改 php.ini 相关扩展，一般是删除前面；分号

[看看别人怎么弄](https://zhidao.baidu.com/question/938079074590093492.html)

## 注意

命令符所有的语句都要分号结尾
