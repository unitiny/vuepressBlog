---
title: 项目经验及总结
date: 2021-08-09
sidebar: 'auto'
categories:
  - 其他
tags:
  - Summary
---

::: tip

我的后花园带锁的

:::

<!-- more -->

---

## 凌达项目 --- 学生信息系统展示

### 项目介绍：

##### 背景介绍：

​ 展示学生的各种信息，已有 pc 端网站，要求做个移动端的，且界面要好看,响应式

##### 使用软件：

​ UI---------adminLTE 3 css ------- less html----------bootstrap 响应式布局 js---可以

​ 使用 jQuery 语法 上传代码 ---------- sourcetree 共同开发 ----------- gitlab

##### 格式结构：

​ 页面为 php 文件，使用 Html Js Css 知识开发

### 解决的难题和收获的灵感（重点）

##### 收获 1：

通过 js 来循环输出 HTML，只需修改父级的 innerHTML 即可

##### 收获 2：

获取 div 宽度来实现功能，

```
$(document.getElementById('main')).width()
```

##### 问题 1：

###### 描述：

​ 隔行更换颜色，但元素按宽度自动排列，连续两元素宽度 50%则一行两个，连续两元素宽度一 50%一 100%则变两行，如何判断换行了

###### 思路：

​ 添加变量 num 用于计数，判断元素为 50%，num+1，元素 100%，num+2。若 num>2 即是换行了， 则使 bgc="background:skybule", xxx.innerHTML+=bgc 。且当 num>=3 时要归零（用途自己想） 即 实现效果

##### 问题 2：

###### 描述：

​ 多个 li 的链接标签，点击其中一个后该 li 标签样式为激活状态，且激活状态的图标代码不同，要更换。 难点：点击标签后会刷新，如何保存获取的索引值

###### 思路：

​ 先 for 循环为每一标签添加 onclick 点击事件，获取当前的索引值（li 各不相同的 id 或 class 都可以），使 用`sessionStorage.setItem('key',data)`暂时缓存到浏览器（关闭网页缓存清空，local Storage 则一直本地保存）以上设置为 getLiIndex() 函数

​ 然后获取索引值 sessionStorage.getItem('key') ,通过索引值渲染特定的 li 标签。此设置为 setLiStyle() 函数

​

##### 问题 3：

###### 描述：

​ pc 端卡片要显示，移动端卡片要隐藏，如何实现

###### 思路：

​ 通过设定宽度来区分，若大于此宽度，则为 pc 端，然后通过 id 获取特定 div 修改 className 即可

##### 问题 4：

###### 描述：

​ 修改 className 后效果与实际不符

###### 思路：

​ 忽略了浏览器渲染 css 需要时间，在未渲染完成前修改下一个样式，可能会跳过下一样式的渲染，造成 数据流失，达不到该有效果。要使用 setInterval()延时函数给时间等待渲染

## 微信小程序 --- 品优购商城

### 背景介绍：

已有后端数据，通过数据获取，页面样式摆放，js 功能实现来搭建 PYG 商城

### 使用软件：

微信小程序开发者工具 原生框架 MENA less 语法

### 格式结构：

wxml wxss js json less 类文件

### 难题和收获:

#### 收获 1：css flex 布局

css 的 flex 布局更加熟练，样式掌握更多

```css
//子项目宽|高 比为2：3
flex:2
flex:3

//定义主题颜色变量
定义： --themeColor:skybule
使用： var(--themeColor)

//文本格式和省略号
//以下为第二行多出的文本内容省略号代替
display: -webkit-box;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

#### 收获 2：封装代码

将 wx.request 内容打包成 Promise 对象，要使用则引入文件，可减少代码量

```js
// 多个异步请求同时发生的次数
let ajaxTimes = 0

export const request = (params) => {
  ajaxTimes++
  //显示加载中
  wx.showLoading({
    title: '加载中',
    mask: true,
  })
  return new Promise((reslove, reject) => {
    //定义公共部分url
    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        reslove(result.data.message)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTimes--
        ajaxTimes === 0 ? wx.hideLoading() : null
      },
    })
  })
}
```

#### 收获 3：组件使用

滑至底部触发函数 加载界面函数 下拉刷新函数

轮播图 swiper 及参数 autoplay(自动播放) circular(循环播放) indicator-dots(索引圆点)

富文本 rich-text 可加入 js 渲染的 html 区块

重组数据 将现有的 goodlist 与 res.data 拼接

```js
goodlist: [...this.data.goodlist, ...res.data]
```

有框架后，html 可以接收和发送参数就可以极少使用 js 的 document.getElementById()之类函数了

### 收获 4：功能

全选和反选功能

勾选商品并重新计算数据

### 收获 5：数组方法

##### 数组遍历几种心得

array.forEach 遍历中要执行复杂的操作

array.map 想提取数组里面的某一元素构成新数组,也可新增属性

array.findIndex 遍历查询索引值的时候，返回查询到的数据

array.every 子元素全部为 true 才返回 true,否则返回 false，类似总审核

array.some 子元素有一个返回 true，即返回 true，类似筛选

array.filter 过滤操作，返回选中的元素构成一新数组

## uniapp 微信小程序 --- 懂你找图

### 收获 1：下载文件

```js
// 用户下载到设备中
const result2 = await uni.saveImageToPhotosAlbum({
  filePath: tempFilePath,
})

// 将远程文件下载到小程序的内存中
const result1 = await uni.downloadFile({
  url: this.imgDetail.img,
})
```

### 收获 2： 自定义左右滑动组件

```js
 <view @touchstart="handleTouchStart"
        @touchend="handleTouchEnd">
  </view>

// 通过touchstart,touchend 触发点击开始和离开后的事件，可以获取开始和离开的时间，点击坐标来判断滑动方向
```

### 收获 3：视频静音，转发功能

```js
// 视频静音 muted的true或false控制
// objectFit 宽度填充百分百
<video :src="videoObj.video"
       objectFit="fill"
       :muted="muted"></video>

// 转发 加入open-type
<button open-type="share"></button>
```

### 收获 4 ：使用 moment 转换时间格式

### 收获 5：下拉触底加载下一页功能

### 收获 6：自定义左右滑动组件

## uniapp 微信小程序 --- 品优购

### 制作感想：

#### 1 制作左侧索引栏

- 想法 1：

为 cateList 数组每一个元素添加一个 isSelect 元素，再在遍历时判断 isSelect 是否为 true，来添加 class 样式。

问题：未实现用 map()向字符串数组添加新属性，且新增数据过多，对编译不友好。处理问题显得笨重

- 想法 2：

定义变量 currentIndex,每次点击 item 后赋值 currentIndex=index。然后遍历时只需判断 currentIndex 是否等于该 item 的 index 即可。解法更优

#### 2 两个独立的侧边滑动栏

问题：又忘记要给滑动栏添加固定高度了

#### 3 croll-view 组件设置 scroll-top 无效

https://www.jianshu.com/p/51c25d126750

#### 4 获取页面传递参数

```vue
onLoad (option) { },
```

## php 论坛 --- sfkbbs

### 介绍：

用 PHP 制作后台，前端用基础三大语言，数据库 MySQL

管理员账号 admin aaa 密码都为 111111

### 收获：

#### 语法类：

```php
mysqli_connect($host,$user,$password,$database,$post); // 连接数据库mysqli_set_charset($link, 'utf8'); // 设置字符编码exit(mysqli_connect_error());  // 输出连接数据库错误exit(mysqli_error($link));  // 输出执行语句错误mysqli_query($link, $query); // 执行sql语句，返回数据mysqli_fetch_assoc($result)  // 解析mysqli_query返回的数据mysqli_real_query($link, $query);  // 执行sql语句，只返回布尔值&$varible // &引用，类似指针，做函数参数时，不会随函数释放后而释放    $_SERVE //包含很多网址    // 实现链接三秒后自动跳转到指定页面<meta http-equiv="refresh" content="3;URL={$url}" /> basename($_SERVER['SCRIPT_NAME'] // 获取当前网址的文件名empty($_POST['module_name'])	// 判断数据是否为空mb_strlen($_POST['module_name'] // 判断字符串长度 要转为utf-8计算is_numeric($_POST['sort'])		// 判断是否是数字strtolower();					// 字符串小写化md5() sha1();					// 加密字符串optgroup标签实现子层菜单效果CURDATE(); 						// sql语句中获取当前时间Y-M-Dtrim($str,',')					// 去除字符串首尾的逗号，默认是空格ceil()							// 向上取整http_build_query($arr_query);	// 将数组元素组合为字符串，如1=a& 2=b& 3=c,url专用count($arr)							// 计算数组长度reset($arr)							// 返回数组第一个单元的值key($arr) 							// 返回数组中当前单元的键名end($arr) 							// 将 array 的内部指针移动到最后一个单元并返回其值。// 将 array 的第一个单元移出并作为结果返回，将 array// 的长度减一并将所有其它单元向前移动一位。所有的数字键名将改为从零开始计数，文字键名将不变array_shift($arr) 	// 弹出并返回 array 数组的最后一个单元，并将数组 array 的长度减一。array_pop($arr) array_unshift($arr,$var)			// 插入$var到数组头部位置array_push($arr,$var)				// 插入$var到数组尾部位置
```

### 问题：

#### excute 执行失败

```
原因：$query = `delete from sfk_father_module where id={$_GET['id']}`;无法执行``和单引号''都不能正确显示{$_GET['id']}变量,要使用双引号改正：$query = "delete from sfk_father_module where id={$_GET['id']}";
```

#### a 标签跳转后无法加载 css

```php
href="../father_module_add.php"要改为href="../father_module_add.php/"
```

#### 如何 echo 中使用变量

```php
echo "<option value='{$data_father['id']}'>{$data_father['module_name']}</option>";// 注意最外层要双引号
```

#### Unknown column 'aaa' in 'field list'

```
原因是变量不符合数据库的字段类型，要给输入aaa的变量加引号变为字符串类型，即'{$_POST['id']}'
```

#### a 标签不在当前页面跳转

```
若网址尾部有/，表示进入了下一层目录，a标签跳转时自然在下一层目录跳转。删除/即可实现当前页面跳转
```

#### 浏览器储存某变量

```
session_start();$_SESSION['vcode']; // vcode为key
```

#### 验证码加载不出来

```
php版本问题，换到5.4版本即可
```

#### \$\_SESSION 无法储存变量

```
情况：若只在两文件其一中使用，则login.php中调用为空原因：调用完show_code.php，会自动关闭session_start()，故在login.php中调用需再次开启session_start().改正：show_code.php和config.inc.php都是用session_start(),即login.php和show_code.php中都要使用session_start()总结：一定要在使用之前用session_start()函数开启，本次错误在show_code.php中使用session_start()造成未开启$SESSION。
```

### 功能:

#### 储存信息到 cookie，判断是否登录状态，以防止重复注册

```php
// 储存用户信息，判断是否登录setcookie("sfk['name']", $_POST['name']);setcookie("sfk['pw']", $_POST['pw']);
```

#### 获取多个 id 组成字符串的数据处理

```php
// 如此结尾会多个,用trim处理后变为 1，2，3 形式，搜索数据库时可用in({$id_son})$id_son.=$data_son['id'].',';$id_son=trim($id_son,',');
```

#### 得到 url 路径并拆分出参数

```php
$arr_current=parse_url($current_url);//将当前url拆分到数组里面$current_path=$arr_current['path'];//将文件路径部分保存起来parse_str($arr_current['query'],$arr_query); // 解析参数并放入$arr_query数组中unset($arr_query[$page]);// 销毁$arr_query[$page]的值
```

#### 获得数组的头尾部键值对，并向头尾删增元素

```php
reset($html);$key_first=key($html);end($html);$key_end=key($html);if($key_first!=1){    array_shift($html);    array_unshift($html,"<a href='{$url}=1'>1...</a>");}if($key_end!=$page_num_all){    array_pop($html);    array_push($html,"<a href='{$url}={$page_num_all}'>...{$page_num_all}</a>");}
```

#### 内容输出带有 html 的换行空格代码

```
s
```

#### 系统信息

```php
<div class="explain">    <ul>        <li>|- 服务器操作系统：<?php echo PHP_OS?> </li>        <li>|- 服务器软件：<?php echo $_SERVER['SERVER_SOFTWARE']?> </li>        <li>|- MySQL 版本：<?php echo  mysqli_get_server_info($link)?></li>        <li>|- 最大上传文件：<?php echo ini_get('upload_max_filesize')?></li>        <li>|- 内存限制：<?php echo ini_get('memory_limit')?></li>        <li>|- <a target="_blank" href="phpinfo.php">PHP 配置信息</a></li>    </ul></div><div class="explain">    <ul>        <li>|- 程序安装位置(绝对路径)：<?php echo SA_PATH?></li>        <li>|- 程序在web根目录下的位置(首页的url地址)：<?php echo SUB_URL?></li>        <li>|- 程序版本：sfkbbs V1.0 <a target="_blank" href="http://www.sifangku.com">[查看最新版本]</a></li>        <li>|- 程序作者：孙胜利 :))</li>        <li>|- 网站：<a target="_blank" href="http://www.sifangku.com">www.sifangku.com</a></li>    </ul></div>
```

### 感悟：

注册后应记录用户信息到 cookie 中，同时跳转到已登录的界面，屏蔽掉注册按钮。下次进入网址时，通过搜索 cookie 信息和数据库匹配来判断是否处于登录状态，以此禁止访问注册界面，防止重复注册。

## PHP 外链接删除

### 收获：

#### 收获 1：如何在 wp 后台头部尾部添加 js 和 css

```php+HTML
/* 添加css文件 */function wpc_add_custom_admin_css(){    echo '<link rel="stylesheet" type="text/css"     href="' . plugins_url('url/style/public.css', dirname(__FILE__)) . '">';}add_action('admin_head', 'wpc_add_custom_admin_css');$num = mysqli_num_rows($data); // 获取结果条数
```

#### 收获 2：js 如何通过表单向 php 传递额外参数

加一条隐藏的 input 即可 value 值写上要传的参数

```HTML
<input type="text" value="1" hidden>
```

#### 收获 3：php 向 js 函数传递数组或对象参数

1 json 化

```php
<?php echo json_encode($val); ?>
```

2 字符串化，js 接收再通过 split()转化为数组

```php
<?php $str = implode("|",$val);echo $str ?>
```

#### 收获 4：制作自定义弹窗

#### 收获 5：正则表达式

```js
// 正则匹配链接、文章内容链接、文章ip地址$reg[0] = '/<a href="(https:\/\/.+?|http:\/\/.+?)\"/m';$reg[1] = '/(http?|https?|ftp|file):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/m';$reg[2] = '/((1[0-9][0-9]\.)|(2[0-4][0-9]\.)|(25[0-5]\.)|([1-9][0-9]\.)|([0-9]\.)){3}((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([0-9]))([-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|])?/m';
```

#### 收获 6：滚动至头尾部

```js
// 滚动至头尾部位置function scrollToSpot(way) {    if (way == 'up') {        document.documentElement.scrollTop = 0;    } else if (way == 'down') {        document.documentElement.scrollTop = document.body.scrollHeight;    }}
```

### 问题：

#### strpos() 无法查询相同的字符串

```
原因：strpos($str,$find)返回$find在$str中的位置，若两者一模一样，则返回的位置是零。显示的效果像匹配错误一样
```

## 网页三兄弟 网页制作 --- 花瓣网

### 功能：

1 广告轮播

在 js 中使用 setInterval 函数，for 循环遍历将所有图片 opacity 透明度变零，另给 index，使 index 的图片 opacity 变 1，即呈现消失出现效果。然后 index++，指定下一图片。但 index 超过图片数，则归零重来。

2 吸顶效果

用 window.onscroll 监听滚轮位置，用 document.documentElement.scrollTop 获取滚轮高度，再 display:none 或 block 即可

3 返回顶部

onclick="return header" header 为 HTML 标签

## 前后端尝试 --- 用户管理系统

### 所用语言

前端 html css javascript

后端 php mysql

其他 pdo ajax

### 功能：

- 使用 math.random 函数可产生随机数和随机颜色

- js 与 PHP 交互

      	用ajax 的var xhr =new XMLHTTPREQUEST()，即可xhr.open 打开PHP，xhr.onload=function(){}加载PHP并可写入js操作，然后PHP用ehco 传回判断的值，js x=this.responseText接收并执行相应操作。(这里不清楚为什么js调用的PHP中并不能用echo执行js语法，所以才传值回给js)

- PHP 与数据库交互

      	用PHP的pdo方法，$pdo=new PDO(一系列参数)，$sql=”” 写入数据库语句，再$sql->exec()执行或prepare加execute执行

### 注意：

- 功能函数最好不参杂某一特定标签，如此可以随时调用此功能。否则就像 verifyCode 只能用于登录注册，因为函数已经\$(‘login’)之类写死了，外部改变不了参数。
- 全局变量在函数中要 return 才能保存改变的数值，且 xhr.onload=function(){}中不可 return 。
- 注意 child Node 会使用空字段占用一个位置
- 数据库要注册才能插入调用等操作

wordpress 主题开发 仿中山大学岭南大学网站

遇到难题：

在 a 标签中<?php get_the_content() ?>不发挥作用

菜单栏如何从点击展开到 hover 展开的改变

项目功能：

首页导航

幻灯片轮播图并加上链接

导航栏，并有下拉菜单，链接打不开注意 url 别名不能是中文，且可以为选项添加样式倒三角，在 WP 导航标签中设置 HTML,或添加 css 类

页面对应模板文件 page.php,文章对应模板文件是 single.php

小工具的分类，作者归档功能对应 archive.php 模板文件

页面更相对静态，文章呈现动态

直接用菜单制作比小工具更容易，更美观。小工具其实就是小的导航栏

设置显示标题只一行，多的省略号表示

$category[0]->slug  $category[0]->cat_name 获取别名和分类名

<!-- 设置参数  -->

<?php set_query_var('category', $category); ?>

<!-- 另一页面接收参数  -->

<?php  $category=get_query_var('category'); ?>

截取文章内容 strpos 索引并返回位置 substr 截取两位置间的内容

is_subpage() 获取父级页面 ID

next_post_link 下一篇链接 默认按时间排序

previous_post_link 上一篇链接

<?php if (function_exists('bcn_display')) {

bcn_display();

} ?>  面包屑导航

开发感想：

css 知识更加巩固熟练

运用了 bootstrap 布局

本次 wp 开发主题依靠 wp 后台没写 js
