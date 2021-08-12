---
title: 微信小程序
date: 2021-08-09
sidebar: 'auto'
categories:
  - 前端
tags:
  - 微信小程序
---

::: tip

实现应用“触手可及”的梦想

:::

<!-- more -->

---

## 使用及插件：

### css tree 插件 ，在扩展程序中搜索安装

介绍：快速获取 div 的 class 名称

使用：ctrl+shift+p

## 语法类

### view{\$}\*100 会生成 100 个 view 标签

### 包裹一个代码块，通常放置 wx:if，显示一大块面板

```html
<block></block>
```

######

### 第二行省略号隐藏功能，对 view 有效，text 无效

```html
display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

######

### scope.address 属性名怪异，含.，要[]包裹起来使其合法

```html
const scopeAdress=result.authSetting['scope.address']
```

### 生命周期函数

```vue
onShow() //每次页面显示都会调用 onLoad() //只有加载该页面时才会调用
//从二级页面返回该页面时，onLoad不会再次加载，而onshow会重新加载
```

### every 方法

遍历数组对象 若所有返回值都为 true 输出才为 true 否则 false

```js
const checkedAll = cart.length ? cart.every((v) => v.isChecked) : false
```

#####

## 遇到问题和 bug

### 当文件夹与文件同名时，components 组件可能不显示

办法：重命名文件夹即可

### wxss 计算高度表达式

wxss 计算高度表达式复杂时要加括号以免没计算出结果

用 calc()计算时 空格尤其重要，有无会影响结果的成功

### 报错 ：cart.forEach is not a function

原因 : cart 是通过 wx.getStorageSync 获取的，得到的 cart 不是一个数组

解决 : 在赋值 cart 处用 Array.from 数组化

### components 下的组件向父组件传递事件参数：

```js
this.triggerEvent('handleTabItemChange', { index })
//父组件接收：
bindhandleTabItemChange = 'handleTab'

//注意 bind后面事件要与triggerEvent的事件一致，即要绑定的是自定义事件，
//handleTab才是父组件的js事件
```

### replace 替换文本时不生效，原因没有重新赋值

```js
swiperList.map((v) => v.navigator_url.replace(/main/, 'index')) //错误，没赋值
swiperList.map(
  (v) => (v.navigator_url = v.navigator_url.replace(/main/, 'index'))
)
```

## 注意：

识别文本的换行符 用 text 标签，view 标签无法识别
