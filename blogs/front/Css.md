---
title: CSS
date: 2021-08-09
sidebar: 'auto'
categories:
  - 前端
tags:
  - CSS
---

::: tip

负责网页的皮肤制作

:::

<!-- more -->

---

## 语法：

### flex:

[flex 布局](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

flex:1 使子元素均匀分布

justify-content: space-between; 元素放置两边

### float:

clear:both; 清除浮动样式

### 字体：

font-style: italic; 字体倾斜

margin-right: auto; 设置右边距 margin 边缘

text-align:justify; 改变字与字之间的间距使得每行对齐：

word-wrap: break-word; 换行

Currentcolor 继承当前文字颜色，类似一个变量

### padding margin：

padding: 8px; 文本与背景上下左右间隔

margin-left 是该元素与其他元素的间隔，而不是里面的子元素间隔，float 同理

### z-index：

z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

z-index 改变页面不改变 ，受上层 css 影响

[z-index 不起作用问题](https://blog.csdn.net/apple_01150525/article/details/76546367)

### position：

[了解 position:relative](https://www.cnblogs.com/chinafine/articles/1765967.html)

position:inline 会影响 margin:0 auto 居中

### box:

box-shadow: 0 6px 12px rgb(0 0 0 /18%); 阴影效果

### 选择子元素：

:nth-child(n) 选择器匹配父元素中的第 n 个子元素，元素类型没有限制。

### background:

Background-image:url()括号中路径反斜杠不是\，要成/才能显示，改变背景图片大小用 background-size

Background-color 填充的是整个页面的大小，background-size height width 无法改变大小

background-size 放前放后都能改变 Background-image 的大小，但后面优先，会覆盖前面的。

background: linear-gradient(#E53E49,#D43636); 渐变

Opacity 属性设置一个元素的透明度级别。

div background-size:cover 背景覆盖

### 图片：

background-size:150%/50% 图片放大缩小
filter: blur(20px); 滤镜效果

[背景图片铺满整个屏幕](https://blog.csdn.net/julystroy/article/details/96493615)

### 伪元素：

设置元素的首字母、首行的样式

在元素的内容之前或之后插入内容

::before 伪元素可用于在元素内容之前插入一些内容。

::selection 伪元素匹配用户选择的元素部分,对用户选中的文 字部分添加样式，

### 对齐方法：

margin:0 auto; 让元素相对父元素居中

verticla-align 垂直居中

top:50%与 margin-top：height/2 配合

margin-bottom: 5px; 行间距

对里面元素整体横着居中

```css
//对ul标签设置，可让里面元素li标签水平对齐
display: flex;
flex-direction: sow;
justify-content: center;
```

元素正中间

```css
display: flex;
justify-content: center;
align-items: center;
```

[各种居中](https://blog.csdn.net/julystroy/article/details/96493615)

## 功能：

### 处理标题

```css
white-space: nowrap; //只输出一行
text-overflow: ellipsis; //溢出用...表示
overflow: hidden; //多出隐藏
```

### 元素摆放

让子 div 置于父 div 下方：

父级相对定位，子级绝对定位，再 bottom=0

vertical-align 属性设置一个元素的垂直对齐方式。

### 改变图片颜色（前提图片黑色背景白色）：

在 background 的 url 后加上,linear-gradient(#f00, #f00) no-repeat;

或者用 opacity 改透明度变灰

### 图片缩放

```css
width: 100%;
height: 0;
padding-top: 100%;
overflow: hidden;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
-webkit-background-size: cover;
-moz-background-size: cover;
```

### 更改鼠标样式

cursor 规则是设定网页浏览时用户鼠标指针的样式，也就是鼠标的图形形状

cursor：pointer 设定鼠标的形状为一只伸出食指的手

### 内容溢出使用省略号：

```css
//以下为第二行多出的文本内容省略号代替
display: -webkit-box;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

## 注意：

### hover 不起作用

1 要放置在 visited 之后，没有 visited 不用理

2 被 z-index：-1 的背景遮挡住，把-1 改成大于等于零就行

### [修改 js 的 display 但没反应问题](https://blog.csdn.net/julystroy/article/details/96493615)

### margin:0 auto 仍不居中

margin:0 auto 是上下界边距零，左右自适应，因此要设置宽度才能自适应。同时 position 为 absolute 也不行，要 relative
