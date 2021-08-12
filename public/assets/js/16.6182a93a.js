(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{547:function(t,a,e){"use strict";e.r(a);var s=e(3),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("储存数据的神秘空间")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/winton-nfs/p/11524007.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 安装教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/lihua5419/article/details/73881837/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sqlyog 安装教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.php.cn/jishu/mysql/409664.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 安装教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("启动 mysql -u root -p 要有设置环境变量后")]),t._v(" "),e("p",[t._v("ctrl+c 强行终止进程")]),t._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),e("h3",{attrs:{id:"表格相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表格相关"}},[t._v("#")]),t._v(" 表格相关")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("show databases 展示数据")])]),t._v(" "),e("li",[e("p",[t._v("use school 使用学校这个表")])]),t._v(" "),e("li",[e("p",[t._v("show tables 展示所有学校表里的表格名")])]),t._v(" "),e("li",[e("p",[t._v("describe student 展示表格名为 student 的数据")])]),t._v(" "),e("li",[e("p",[t._v("create databases 名 创建表单")])]),t._v(" "),e("li",[e("p",[t._v("drop 删除表格")])]),t._v(" "),e("li",[e("p",[t._v("修改字段格式(了解)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("\t```mysql\n\talter table goodstudent1 modify age varchar(10);\n\t```\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"插入数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插入数据"}},[t._v("#")]),t._v(" 插入数据")]),t._v(" "),e("p",[t._v("插入表格 goodstudent1 的 name 和 sex 字段多个值")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("INSERT INTO `goodstudent1`(`name`,`sex`) VALUES('张山','男'),('阿瑟','女'),('kk','女');\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"更新数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新数据"}},[t._v("#")]),t._v(" 更新数据")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("UPDATE goodstudent SET name='张狂' WHERE id=2;\nUPDATE goodstudent SET sex='男' WHERE id<15;\nUPDATE student SET birthday=CURRENT DATE WHERE Id BETWEEN 1 AND 2\nUPDATE student SET age=12 WHERE id!=3 AND hobby='dfsa';\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"删除数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[t._v("#")]),t._v(" 删除数据")]),t._v(" "),e("p",[t._v("删除 chat 表中符合 from='小李' 和 to='小明'条件的字段")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("DELETE FROM chat WHERE `from`='小李' AND `to`='小明'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"查询数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[t._v("#")]),t._v(" 查询数据")]),t._v(" "),e("p",[t._v("格式： select 列名 as 改名 from 表")]),t._v(" "),e("h4",{attrs:{id:"模糊查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询"}},[t._v("#")]),t._v(" "),e("strong",[t._v("模糊查询")])]),t._v(" "),e("ul",[e("li",[t._v("like 两种写法 返回值为 1 或零")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 查找subject表的subjectname字段其中是否含有’数学‘这一关键字\nSELECT `subjectname` LIKE '%数学%' FROM `subject`\nSELECT `subjectname` FROM `subject` WHERE `subjectname` LIKE '%数学%'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ul",[e("li",[t._v("in 要全名")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT `subjectname` FROM `subject` WHERE `subjectname` IN ('Java程序设计-1');\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:"联表查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联表查询"}},[t._v("#")]),t._v(" 联表查询")]),t._v(" "),e("p",[t._v("inner join 只要找到符合条件的都写上")]),t._v(" "),e("h4",{attrs:{id:"升降序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升降序"}},[t._v("#")]),t._v(" 升降序")]),t._v(" "),e("p",[t._v("order by 字段名 DESC/ASC 降/升")]),t._v(" "),e("h4",{attrs:{id:"分页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分页"}},[t._v("#")]),t._v(" 分页")]),t._v(" "),e("p",[t._v("limit 10，5； 从第十条数据开始，每页五条")]),t._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("ul",[e("li",[t._v("1064：语法错误")])]),t._v(" "),e("p",[t._v("观察,;``是否使用正确")]),t._v(" "),e("ul",[e("li",[t._v("1062：Duplicate entry '2' for key 'goodstudent1.PRIMARY'")])]),t._v(" "),e("p",[t._v("id 重复 把表格改为 id 自增，且不用插入 id，系统自动配给。")]),t._v(" "),e("ul",[e("li",[t._v("登录报错")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/lihua5419/article/details/80394716",target:"_blank",rel:"noopener noreferrer"}},[t._v("看看别人怎么说"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost' (10061) 无法连接数据库")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/chen97_08/article/details/81484286",target:"_blank",rel:"noopener noreferrer"}},[t._v("看看别人怎么做"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("执行 sql 语句但不更新数据库")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_28602957/article/details/51019267",target:"_blank",rel:"noopener noreferrer"}},[t._v("看看别人怎么办"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("错误：undefined function xxx()")])]),t._v(" "),e("p",[t._v("修改 php.ini 相关扩展，一般是删除前面；分号")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhidao.baidu.com/question/938079074590093492.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("看看别人怎么弄"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),e("p",[t._v("命令符所有的语句都要分号结尾")])])}),[],!1,null,null,null);a.default=r.exports}}]);