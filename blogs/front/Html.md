---
title: HTML
date: 2021-08-09
sidebar: 'auto'
categories:
  - 前端
tags:
  - HTML
---

::: tip

搭建网页的骨骼

:::

<!-- more -->

---

## 功能：

### !+tab 一键生成 html 模板

### ctrl shift r 或 ctrl+f5 强制刷新浏览器，使 css 立即生效

## 语法：

- p 标签自动换行 white-space: normal;

- dl dt dd 直接竖着的排列

- Img src 是引入，写路径，alt 是当该图片显示不了时用文字代替来传递信息

- list-sytle:none; 使 ul 的 li 无点

- &nbsp 表示空格

- select 标签 配合 option 可以选择男女之类的

- strong 标签起强调效果

- value 属性规定在表单被提交时被发送到服务器的值。

- ```html
  签 号 `
  ```

## 注意：

- 在 a 标签中添加图片需要 display:block 才能显示，没有此属性则 width height 设置无效
- 当某部分内容不显示时，要注意 html 里面放置的位置是否正确
- 图片不显示可能 a li 之类标签没有处理 基本属性 width height 没输入，更有可能是大小问题
- 犯错误很少在语法上，更多在于隐藏的逻辑，函数使用重复，js 会默认使用最后一个而其他的不起作用
- 改变文本框大小要 display,否则都是按文字大小定宽高
- label 标签 当点击 label 里边元素时，使 label 指向的标签发生变化
