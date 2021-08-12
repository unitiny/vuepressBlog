module.exports = {
    "title": "这是unitiny的宇宙",
    "description": "你好，世界",
    "dest": "public",
    "base":"/blog/",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/img/favicon.ico"
            }
        ],
        [
            "link",
            {
                "rel": "stylesheet",
                "href": "/css/style.css"
            }
        ],
        [
            "script",
            {
                "language": "javascript",
                "type": "text/javascript",
                "src": "https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"
            }
        ],
        // 引入鼠标点击脚本
        // [
        //     "script",
        //     {
        //         "language": "javascript",
        //         "type": "text/javascript",
        //         "src": "/js/MouseClickEffect.js"
        //     }
        // ],
        [
            "script",
            {
                "language": "javascript",
                "type": "text/javascript",
                "src": "/js/index.js"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    // "locales": {
    //     '/': {
    //         "lang": 'zh-CN' // 语言
    //     }
    // },
    "themeConfig": {
        "nav": require('./nav.js'),
        "sidebar": require('./sidebar.js'),
        "type": "blog",
        "mode": "dark", // 默认模式
        "locales": {
            '/': {
                recoLocales: {
                    homeBlog: {
                        article: 'Articles', // 默认 文章
                        tag: 'Tags', // 默认 标签
                        category: 'Categories', // 默认 分类
                        friendLink: '友链' // 默认 友情链接
                    },
                    pagation: {
                        prev: '上一页',
                        next: '下一页',
                        go: '前往',
                        jump: '跳转至'
                    }
                }
            }
        },
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        /*"friendLink": [{
                "title": "午后南杂",
                "desc": "Enjoy when you can, and endure when you must.",
                "email": "1156743527@qq.com",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],*/
        "subSidebar": 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        "sidebarDepth": 2,
        "logo": "/img/header.jpg",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "unitiny",
        "authorAvatar": "/img/header.jpg",
        "startYear": "2021"
    },
    "markdown": {
        lineNumbers: true,
        // // markdown-it-anchor 的选项
        // anchor: { permalink: false },
        // // markdown-it-toc 的选项
        // toc: { includeLevel: [1, 2] },
        // extendMarkdown: md => {
        //     // 使用更多的 markdown-it 插件!
        //     md.use(require('markdown-it-xxx'))
        // }
    },
    "plugins": [
        // 看板娘
        ["@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['haru1', 'haru2', 'haruto', 'blackCat', 'whiteCat', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
                clean: false,
                messages: {
                    welcome: '我是lookroot欢迎你的关注 ',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见哦',
                    info: 'http://vuepress-theme-reco.recoluan.com/views/other/theme-example.html'
                }
            },
        ],
        // 自动生成侧边栏
        ["vuepress-plugin-auto-sidebar", {
            sort: {
                mode: "asc",
                readmeFirst: true,
            },
            title: {
                mode: "titlecase",
                map: {}
            },
            sidebarDepth: 2,
            collapse: {
                open: false,
                collapseList: [],
                uncollapseList: []
            },
            ignore: []
        }],
        // 评论
        ['@vuepress-reco/comments', {
            solution: 'vssue',
            options: {
                title: 'vuepress-theme-reco',
                platform: 'github',
                owner: 'OWNER_OF_REPO',
                repo: 'NAME_OF_REPO',
                clientId: 'YOUR_CLIENT_ID',
                clientSecret: 'YOUR_CLIENT_SECRET',
            }
        }],
        // 音乐插件
        /* ['@vuepress-reco/vuepress-plugin-bgm-player', {
             audios: [
                 // // 本地文件示例
                 // {
                 //   name: '장가갈 수 있을까',
                 //   artist: '咖啡少年',
                 //   url: '/bgm/1.mp3',
                 //   cover: '/bgm/1.jpg'
                 // },
                 // 网络文件示例
                 {
                     name: '解药',
                     artist: '来一碗老于',
                     url: 'https://webfs.tx.kugou.com/202108111600/6a58a531349b75d21067eaec7698011b/KGTX/CLTX001/333c9c677274241a79c7b5c4985663c3.mp3',
                     cover: '/img/home1.jpg'
                 },
                 {
                     name: '用胳膊当枕头',
                     artist: '최낙타',
                     url: 'https://webfs.tx.kugou.com/202108111601/36cc756fa9ddbc7612e7870f47fb78e1/KGTX/CLTX001/9419699f95e915f26c60e3ba6eb43edb.mp3',
                     cover: 'https://imgessl.kugou.com/stdmusic/20210707/20210707011403316035.jpg'
                 }
             ]
         }],*/
        // 动态标题
        [
            'dynamic-title',
            {
                showIcon: '/favicon.ico',
                showText: '(/≧▽≦/)咦！又好了！',
                hideIcon: '/failure.ico',
                hideText: '(●—●)喔哟，崩溃啦！',
                recoverTime: 2000,
            },
        ],
        // 代码复制弹窗插件
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }],
        // 音乐插件
        ['meting', {
            //metingApi: "https://meting.sigure.xyz/api/music",
            meting: {
                // 网易
                server: "netease",
                // 读取歌单
                type: "playlist",
                mid: "696441716",
            },
            // 不配置该项的话不会出现全局播放器
            aplayer: {
                // 吸底模式
                fixed: true,
                mini: true,
                // 自动播放
                autoplay: true,
                // 歌曲栏折叠
                listFolded: true,
                // 颜色
                theme: '#f9bcdd',
                // 播放顺序为随机
                order: 'random',
                // 初始音量
                volume: 0.1,
                // 关闭歌词显示
                lrcType: 0
            },
            mobile: {
                // 手机端去掉cover图
                cover: false,
            }
        }]
    ]
}