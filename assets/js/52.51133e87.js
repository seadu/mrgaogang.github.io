(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{299:function(t,s,a){"use strict";a.r(s);var n=a(17),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"预加载资源-preload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载资源-preload"}},[t._v("#")]),t._v(" 预加载资源 preload")]),t._v(" "),a("p",[t._v("此文章，旨在个人记录使用。文章摘录自："),a("a",{attrs:{href:"https://juejin.im/post/5a7fb09bf265da4e8e785c38",target:"_blank",rel:"noopener noreferrer"}},[t._v("用 preload 预加载页面资源"),a("OutboundLink")],1),t._v(" 和"),a("a",{attrs:{href:"https://shimo.im/docs/MD4Pl3F0eS0YIigM/read",target:"_blank",rel:"noopener noreferrer"}},[t._v("link 预加载详解"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("优化下一个页面显示的其中一个步骤，是可以在当前页面提前加载资源。包括"),a("code",[t._v("css")]),t._v("/'js'/'image'等。这时我们就可以使用到"),a("code",[t._v("preload")]),t._v("了。")]),t._v(" "),a("p",[t._v("preload 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，在需要执行的时候再执行。提供的好处主要是")]),t._v(" "),a("ul",[a("li",[t._v("将加载和执行分离开，可不阻塞渲染和 document 的 onload 事件")]),t._v(" "),a("li",[t._v("提前加载指定资源，不再出现依赖的 font 字体隔了一段时间才刷出")])]),t._v(" "),a("h2",{attrs:{id:"一、如何使用-preload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、如何使用-preload"}},[t._v("#")]),t._v(" 一、如何使用 preload?")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 使用 link 标签静态标记需要预加载的资源 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/path/to/style.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 或使用脚本动态创建一个 link 标签后插入到 head 头部 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/style.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("说明：preload 不仅仅支持 css 的预加载，上述只是使用 css，作为样例。那么具体支持哪些呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/js/preload-attr.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"二、注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、注意事项"}},[t._v("#")]),t._v(" 二、注意事项")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("避免滥用 preload")]),t._v(": 若不确定资源是必定会加载的，则不要错误使用 preload，以免本末倒置，给页面带来更沉重的负担。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("避免混用 preload 和 prefetch")]),t._v(" preload 和 prefetch 混用的话，并不会复用资源，而是会重复加载。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("避免错用 preload 加载跨域资源。")]),t._v(" crossorigin 属性在加载字体的时候是必须的，即便字体没有跨域是在自己公司的服务器上，因为用户代理必须采用匿名模式来获取字体资源。为什么？"),a("a",{attrs:{href:"https://drafts.csswg.org/css-fonts/#font-fetching-requirements",target:"_blank",rel:"noopener noreferrer"}},[t._v("请见这里"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://juejin.im/post/5a7fb09bf265da4e8e785c38#heading-13",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里：preload 预加载资源"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"三、不同资源加载的优先级规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、不同资源加载的优先级规则"}},[t._v("#")]),t._v(" 三、不同资源加载的优先级规则")]),t._v(" "),a("p",[t._v("我们先来看一张图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d3ff9f3c2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v("\n一共分成五个级别：")]),t._v(" "),a("ul",[a("li",[t._v("Highest 最高")]),t._v(" "),a("li",[t._v("Hight 高")]),t._v(" "),a("li",[t._v("Medium 中等")]),t._v(" "),a("li",[t._v("Low 低")]),t._v(" "),a("li",[t._v("Lowest 最低")])]),t._v(" "),a("h3",{attrs:{id:"html-主要资源，其优先级是最高的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-主要资源，其优先级是最高的"}},[t._v("#")]),t._v(" html 主要资源，其优先级是最高的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d481a1d53?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d66475b20?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"css-样式资源，其优先级也是最高的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-样式资源，其优先级也是最高的"}},[t._v("#")]),t._v(" css 样式资源，其优先级也是最高的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d481a1d53?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"script-脚本资源，优先级不一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-脚本资源，优先级不一"}},[t._v("#")]),t._v(" script 脚本资源，优先级不一")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d6d350cd4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d714e2b5d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v("\n前三个 js 文件是写死在 html 中的静态资源依赖，后三个 js 文件是根据首屏按需异步加载的组件资源依赖，这正验证了这个规则。")]),t._v(" "),a("h3",{attrs:{id:"font-字体资源，优先级不一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font-字体资源，优先级不一"}},[t._v("#")]),t._v(" font 字体资源，优先级不一")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d75e89bad?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d92882579?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v("\ncss 样式文件中有一个 @font-face 依赖一个 font 文件，样式文件中依赖的字体文件加载的优先级是 Highest；\n在使用 preload 预加载这个 font 文件时，若不指定 crossorigin 属性(即使同源)，则会采用匿名模式的 CORS 去加载，优先级是 High")]),t._v(" "),a("p",[t._v("看下图对比：")]),t._v(" "),a("p",[t._v("第一条 High 优先级，也就是 preload 的请求：\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d959d176e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[t._v("第二条 Highest 也就是样式引入的请求：\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16182c9d9b47ac32?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[t._v("可以看到，在 "),a("code",[t._v("preload")]),t._v(" 的请求中，缺少了一个 "),a("code",[t._v("origin")]),t._v(" 的请求头字段，表示这个"),a("code",[t._v("请求是匿名的请求")]),t._v("。\n让这两个请求能共用缓存的话，"),a("strong",[t._v("目前的解法是给 preload 加上 crossorigin 属性，这样请求头会带上 origin, 且与样式引入的请求同源，从而做到命中缓存：")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://at.alicdn.com/t/font_zck90zmlh7hf47vi.woff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"四、预加载使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、预加载使用场景"}},[t._v("#")]),t._v(" 四、预加载使用场景")]),t._v(" "),a("h3",{attrs:{id:"字体提前加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体提前加载"}},[t._v("#")]),t._v(" 字体提前加载")]),t._v(" "),a("p",[t._v("eb 字体是较晚才能被发现的关键资源中常见的一种。但是在用户体验对前端来说至关重要的现阶段前端开发来说，web 字体对页面的渲染也是至关重要。字体的引用被深埋在 css 中，即便预加载器有提前解析 css，也无法确定包含字体信息的选择器是否会真正作用在 dom 节点上。所以为了减少 FOUT(无样式字体闪烁，flash of unstyled text )需要预加载字体文件，有了 preload，一行代码搞定。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font.woff2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font/woff2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意："),a("code",[t._v("crossorigin")]),t._v(" 属性在加载字体的时候是必须的，即便字体没有跨域是在自己公司的服务器上，因为用户代理必须采用匿名模式来获取字体资源（为什么会这样呢？）。")])]),t._v(" "),a("h3",{attrs:{id:"动态加载，但不执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态加载，但不执行"}},[t._v("#")]),t._v(" 动态加载，但不执行")]),t._v(" "),a("p",[t._v("通常我们可能想在当前页去加载下一页的资源，但是在媒婆 preload 的情况下，我们常常使用动态创建 script 标签的形式，但是动态创建 script 标签的话，js 代码会立即执行。在有了"),a("code",[t._v("preload")]),t._v("之后，就可以做到"),a("strong",[t._v("动态加载，延迟执行")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myscript.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面这段代码可以让你预先加载脚本，下面这段代码可以让脚本执行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myscript.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"基于标记语言的异步加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于标记语言的异步加载"}},[t._v("#")]),t._v(" 基于标记语言的异步加载")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("asyncstyle.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("this.rel='stylesheet'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[a("em",[t._v("preload 的 onload 事件可以在资源加载完成后修改 rel 属性，从而实现非常酷的异步资源加载。")])]),t._v(" "),a("p",[t._v("脚本也可以采用这种方法实现异步加载")]),t._v(" "),a("p",[t._v("难道我们不是已经有了"),a("code",[t._v("<script async>")]),t._v(","),a("code",[t._v("<scirpt async>")]),t._v("虽好，但却会阻塞 window 的 onload 事件。某些情况下，你可能希望这样，但总有一些情况你不希望阻塞 window 的 onload 。")]),t._v(" "),a("p",[t._v("举个例子，你想尽可能快的加载一段统计页面访问量的代码，但又不愿意这段代码的加载给页面渲染造成延迟从而影响用户体验，关键是，你不想延迟 window 的 onload 事件。")]),t._v(" "),a("p",[t._v("有了 preload， 分分钟搞定。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("async_script.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("let script = document.createElement('script'); script.src = this.href; document.body.appendChild(script);"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"五、浏览器兼容性检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、浏览器兼容性检测"}},[t._v("#")]),t._v(" 五、浏览器兼容性检测")]),t._v(" "),a("p",[t._v("其浏览器支持如下：\n"),a("img",{attrs:{src:"/images/js/preload.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isPreloadSupported")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" relList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("relList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("relList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" relList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("supports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5a7fb09bf265da4e8e785c38",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考:用 preload 预加载页面资源"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://shimo.im/docs/MD4Pl3F0eS0YIigM/read",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考:link 预加载详解"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);