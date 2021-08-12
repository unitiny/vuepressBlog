---
title: Uniapp
date: 2021-08-09
sidebar: 'auto'
categories:
  - 前端
tags:
  - Uniapp
---

::: tip

制作小程序、App 利器

:::

<!-- more -->

---

### 创建和导入：

```shell
npm install -g @vue/cli

vue create -p dcloudio/uni-preset-vue my-project

cd到目录后
npm run dev:mp-weixin

在微信小程序导入路径：

....\my-project\dist\dev\mp-weixin
```

### 全局储存变量：

```js
getApp().globalData.imgList = this.list
```

### scroll-view flex 布局不生效

```html
<scroll-view enable-flex="true"></scroll-view> // 要加入enable-flex
另外可能scroll-view没设置高度
```

### TypeError: this.getOptions is not a function

```js
原因：sass版本过高，不兼容
解决：https://www.jianshu.com/p/fd38d024b35a
```
