---
title: JavaScript
date: 2021-08-09
sidebar: 'auto'
categories:
  - 前端
tags:
  - JavaScript
---

::: tip

设计网页的灵魂

:::

<!-- more -->

---

## 语法：

### 闭包：

[闭包详解](https://zhuanlan.zhihu.com/p/22486908)

返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

### 字符串：

charAt() 指定字符串位置的字母

### 数组：

arr.slice(0,3) 截取 0 到第三个元素

arr.push 添加元素 arr.pop 删除元素

arr.reserve 倒序元素

arr.concat() 连接两个数组

定义数组 var arr2 = new Array(2);//规定了数组的长度为 2，不传 2 可看作切片

从索引 2 开始删除 3 个元素,然后再添加两个元素:

```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']
arr.splice(2, 3, 'Google', 'Facebook')
// 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
```

- join()添加连接元素

```js
var arr = ['A', 'B', 'C', 1, 2, 3]
arr.join('-') // 'A-B-C-1-2-3'
```

- map 和 set

var m = new Map(); // 空 Map

m.set('Adam', 67); // 添加新的 key-value

map()每个元素都调用一次

格式：arr.map(pow)

- reduce

把结果继续和序列的下一个元素做累积计算，其效果就是：

[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

- filter

筛选元素 加上 indexOf 去除重复元素

- trim

x.trim()去除首尾空格

- sort

x.sort() 不传参数默认 ASCII 升序 传函数 a<b,返回-1，位置 a 在 b 前面; a>b,返回 1，a 在 b 后面；返回 0，位置不变。

[具体内部排序方法](https://blog.csdn.net/ws9029/article/details/106734256)

- from

Array.from(obj,methods) 将数组浅拷贝，后面可加方法，使 obj 里的每一个元素都执行该方法

### 对象：

#### generator

generator 可保存对象状态 可以用 yield 返回多次

#### test

RegExp 对象的 test()方法用于测试给定的字符串是否符合条件。

#### JSON.parse

var user =JSON.parse(thsi.responseText); 将变量转化为对象，以便读取里边数组

### 正则表达式：

- ?表示懒惰模式，即匹配一次成功后就截止，默认是非懒惰，即匹配成功后仍继续匹配，直到末尾。

* +表示可以多匹配一个任意字符，
* .点则匹配除“\n”和"\r"之外的任何单个字符，
* \*匹配前面的子表达式任意次，\转义字符

```
/\{\{(.*?)\}\}/   表示匹配{{msg}}之类，.任意字符 *匹配任意次 ?匹配成功后即停止
```

### math：

math.floor(x) 返回 x 的最大整数

math.random()\*10+1;随机产生 1 到 10 的随机数

## 功能：

### a 标签跳转网页刷新时如何储存数据

[可使用本地储存数据](https://blog.csdn.net/julystroy/article/details/96493615)

### Cookie 用于存储 web 页面的用户信息

### js 中改变 style 样式

allDoms[i].style.cssText="display:block;"; allDoms[i] 可更换

### 获取滚轮高度

document.documentElement.scrollTop

### 获取 span 标签内容

document.getElementById("code").innerText

### 添加点击事件

document.getElementById('text').addEventListener("click", get);

可用来代替 onclik,get 是一个函数

### 改变 html

加引号说明要生成 html 文本，并用.innerhtml=`内容`可实现 HTML 新增面板，内容中加入 js 变量 \${变量}

## 可恨的 bug:

- ### 问题：js 改变 className 属性效果显示错误，如下图

<img src="C:\Users\20692\AppData\Roaming\Typora\typora-user-images\image-20210524205308219.png" alt="image-20210524205308219" style="zoom: 25%;" />

原因：渲染时间不够，造成数据流失，要加 setInterval()延迟函数给浏览器加载

- ### [Input 赋值不成功问题](https://blog.csdn.net/weixin_41297324/article/details/107941929)

- ### [ChildNode 空节点](https://www.cnblogs.com/zhangbao/p/5881769.html)

ChildNode[i].value 赋值了不显示问题，childNode 会把空格当作一节点，所以赋值了也显示不了，因为赋值在空格

- ### 点击事件不响应

原因：可能函数名为某些关键字不得使用，如命名为 scroll 的函数点击无法生效，需更换名称

## 注意：

- 箭头函数 v=>{v-1} ，加了{}则不能省略 return

- js 放头部问题，会出现节点未加载完吗，而无法使用 js,可以用延时函数

- 全局变量可以不用往函数传参数，但函数要有返回值

- 字面量创建方式特殊含义的字符不需要转义，实例创建方式需要转义

- 只要函数 return 全局变量即可保存
