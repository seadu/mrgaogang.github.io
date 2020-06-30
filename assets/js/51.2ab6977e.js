(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{306:function(e,v,_){"use strict";_.r(v);var t=_(0),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("blockquote",[_("p",[e._v("http 缓存主要针如 css，js，图片等更新频率不大的静态文件。")])]),e._v(" "),_("p",[e._v("阅读本文可以了解到：")]),e._v(" "),_("ul",[_("li",[e._v("强缓存和协商缓存")]),e._v(" "),_("li",[e._v("缓存头部优先级")]),e._v(" "),_("li",[e._v("http缓存")]),e._v(" "),_("li",[e._v("http缓存方案")]),e._v(" "),_("li",[e._v("浏览器刷新对缓存的影响")])]),e._v(" "),_("p",[e._v("http 缓存大致分为两种: "),_("code",[e._v("强缓存")]),e._v("和"),_("code",[e._v("协商缓存")]),e._v("。")]),e._v(" "),_("h2",{attrs:{id:"一、强缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、强缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、强缓存")]),e._v(" "),_("blockquote",[_("p",[e._v("通过特殊的 HTTP"),_("code",[e._v("Cache-Control")]),e._v("首部和"),_("code",[e._v("Expries")]),e._v("首部,HTTP 让原始服务器向每个文档附加了一个过期日期,这些首部说明了在多长时间内可以将这些内容视为新鲜的。")])]),e._v(" "),_("h3",{attrs:{id:"强缓存的头部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#强缓存的头部","aria-hidden":"true"}},[e._v("#")]),e._v(" 强缓存的头部")]),e._v(" "),_("ol",[_("li",[_("p",[_("code",[e._v("Cache-control")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("max-age=x")]),e._v(": (单位秒) 。请求缓存后的 X 秒不再发起请求，属于"),_("code",[e._v("http1.1")]),e._v("属性，与下方"),_("code",[e._v("Expires")]),e._v("(http1.0 属性)类似，但优先级要比"),_("code",[e._v("Expires")]),e._v("高。"),_("strong",[e._v("max-age 是相对过期时间，Expires 是绝对过期时间")])]),e._v(" "),_("li",[_("code",[e._v("no-store")]),e._v(": 所有内容都不缓存")]),e._v(" "),_("li",[_("code",[e._v("no-cache")]),e._v(": 缓存，但是浏览器使用缓存前，都会请求服务器判断缓存资源是否是最新。不缓存过期资源。")]),e._v(" "),_("li",[_("code",[e._v("public")]),e._v(": 客户端和代理服务器(CDN)都可缓存")]),e._v(" "),_("li",[_("code",[e._v("private")]),e._v(": 只有客户端可以缓存")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Expires")])]),e._v(" "),_("blockquote",[_("p",[e._v("响应头，代表"),_("code",[e._v("资源过期时间")]),e._v("(绝对过期时间)，由服务器返回提供，GMT 格式日期，是 http1.0 的属性，在与 max-age(http1.1)共存的情况下，优先级要低。")])])])]),e._v(" "),_("h2",{attrs:{id:"二、协商缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、协商缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、协商缓存")]),e._v(" "),_("blockquote",[_("p",[e._v("在使用本地缓存前，先与服务器协商，核对缓存文件是否为最新。比如设置了 cache-control=no-cache，不管你做任何操作，都会发起请求，这一类就是协商性缓存了。")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Last-Modified")]),e._v("\n响应头，资源最新修改时间，由服务器告诉浏览器。")]),e._v(" "),_("li",[_("code",[e._v("if-Modified-Since")]),e._v("\n请求头，资源最新修改时间，由浏览器告诉服务器(其实就是上次服务器给的 Last-Modified，请求又还给服务器对比)，和 Last-Modified 是一对，它两会进行对比。")])]),e._v(" "),_("blockquote",[_("p",[e._v("服务器端返回字段："),_("code",[e._v("Last-Modified")]),e._v("(日期),对应客户端匹配字段"),_("code",[e._v("If-Modified-Since")]),e._v(":date"),_("strong",[e._v("如果服务器 date 小于等于客户端请求 date 则返回 304，否则返回修改后的资源")])])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Etag")]),e._v("\n响应头，资源标识，由服务器告诉浏览器。")]),e._v(" "),_("li",[_("code",[e._v("if-None-Match")]),e._v("\n请求头，缓存资源标识，由浏览器告诉服务器(其实就是上次服务器给的 Etag)，和 Etag 是一对，它两会进行对比。")])]),e._v(" "),_("blockquote",[_("p",[e._v("服务器端返回字段 "),_("code",[e._v("Etag")]),e._v("： xxxx (一般为 md5 值) 对应客户端匹 配字段为， "),_("code",[e._v("If-None-Match")]),e._v(": w/xxx("),_("strong",[e._v("xxx 的值和上面的 "),_("code",[e._v("etag")]),e._v(" 的 xxx 一样则返 回 304，否则返回修改后的资源")]),e._v(")")])]),e._v(" "),_("h2",{attrs:{id:"三、缓存头部优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、缓存头部优先级","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、缓存头部优先级")]),e._v(" "),_("p",[_("strong",[e._v("同时存在各种缓存头时，各缓存头优先级及生效情况")])]),e._v(" "),_("p",[e._v("1、强缓存和协商缓存同时存在，如果强缓存还在生效期则强制缓存覆盖协商缓存，协商缓存不生效；如果强缓存不在有效期，协商缓存生效。即："),_("code",[e._v("强缓存优先级 > 协商缓存优先级")])]),e._v(" "),_("p",[e._v("2、强缓存 expires 和 cache-control 同时存在时，则 cache-control 会覆盖 expires，expires 无论有没有过期，都无效。 即："),_("code",[e._v("cache-control优先级 > expires优先级")]),e._v("。")]),e._v(" "),_("p",[e._v("3、协商缓存 Etag 和 Last-Modified 同时存在时，则 Etag 会覆盖 Last-Modified，Last-Modified 不会生效。即："),_("code",[e._v("ETag优先级 > Last-Modified优先级")]),e._v("。")]),e._v(" "),_("p",[e._v("当然还有一种缓存 pragma，和 cache-control 类似，前者是 http1.0 内容后者是 http1.1 内容，并且"),_("code",[e._v("pragma优先级 > cache-control优先级")]),e._v("，不过前者目前基本不使用。")]),e._v(" "),_("p",[e._v("ps: 当我们不设置 cache-control，只设置协商缓存，在不同浏览器下会有不同的表现。chrome 会直接从本地缓存获取，其他会请求服务器返回 304.这时候有两种方式让他们的响应一致。")]),e._v(" "),_("p",[e._v("1、设置 cache-control: public, max-age=0;记住，这里的 public 是关键。因为默认值是 private，表示其他代理都不要缓存，只有服务器缓存，而 max-age 又为 0，所以每次都会发起 200 的请求。设置 public 的意思就是允许其他各级代理缓存资源，因此如果资源没改变会返回 304。")]),e._v(" "),_("p",[e._v("2、直接设置 max-age=1000。即是一秒之后内容过期，目的是触发浏览器缓存。也能达到想要 304 的效果。")]),e._v(" "),_("h2",{attrs:{id:"四、使用-http-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、使用-http-缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、使用 http 缓存")]),e._v(" "),_("h3",{attrs:{id:"使用-expires-gmt-时间格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-expires-gmt-时间格式","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Expires(GMT 时间格式)")]),e._v(" "),_("p",[e._v("浏览器会先对比当前时间是否已经大于 Expires，也就是判断文件是否超过了约定的过期时间。")]),e._v(" "),_("p",[e._v("时间没过，不发起请求，直接使用本地缓存。")]),e._v(" "),_("p",[e._v("时间过期，发起请求，继续上述的浏览器与服务器的谈话日常。")]),e._v(" "),_("p",[_("strong",[e._v("问题：假设 Expires 已过期，浏览器再次请求服务器，但 a.js 相比上次并未做任何改变，那这次请求我们是否通过某种方式加以避免？")])]),e._v(" "),_("h3",{attrs:{id:"使用-last-modified-与-if-modified-since-expires"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-last-modified-与-if-modified-since-expires","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用(Last-Modified 与 if-Modified-Since)+Expires")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("Expires")]),e._v("未过期，浏览器机智的使用本地缓存。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Expires")]),e._v("过期，服务器带上了文件最新修改时间"),_("code",[e._v("if-Modified-Since")]),e._v("(也就是上次请求服务器返回的"),_("code",[e._v("Last-Modified")]),e._v(")，服务器将"),_("code",[e._v("if-Modified-Since")]),e._v("与"),_("code",[e._v("Last-Modified")]),e._v("做了个对比。")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("if-Modified-Since")]),e._v(" 与"),_("code",[e._v("Last-Modified")]),e._v("不相等，服务器查找了最新的 a.js，同时再次返回"),_("code",[e._v("Expires")]),e._v("与全新的"),_("code",[e._v("Last-Modified")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("if-Modified-Since")]),e._v(" 与"),_("code",[e._v("Last-Modified")]),e._v("相等，服务器返回了状态码 304，文件没修改过，你还是用你的本地缓存。")])])])])]),e._v(" "),_("p",[_("strong",[e._v("问题：浏览器端可以随意修改 Expires，Expires 不稳定，Last-Modified 只能精确到秒，假设文件是在 1s 内发生变动，Last-Modified 无法感知到变化，这种情况下浏览器永远拿不到最新的文件(假想极端情况)。")])]),e._v(" "),_("h3",{attrs:{id:"使用-last-modified-与-if-modified-since-expires-cache-control-etag-和-if-none-match"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-last-modified-与-if-modified-since-expires-cache-control-etag-和-if-none-match","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 (Last-Modified 与 if-Modified-Since)+Expires+Cache-control+(Etag 和 If-None-Match)")]),e._v(" "),_("p",[e._v("由于"),_("code",[e._v("cache-control")]),e._v(" "),_("code",[e._v("max-age")]),e._v("的优先级比"),_("code",[e._v("Expires")]),e._v("的高.")]),e._v(" "),_("p",[_("strong",[e._v("第一次请求")])]),e._v(" "),_("p",[e._v("浏览器：我要资源 a.js")]),e._v(" "),_("p",[e._v("服务器：a.js 我给你，过期时间"),_("code",[e._v("Last-Modified")]),e._v("我也给你，再给你一个"),_("code",[e._v("max-age=60")]),e._v("(单位秒)，"),_("code",[e._v("Last-Modified")]),e._v("你也给我收好，再加一个文件内容唯一标识符"),_("code",[e._v("Etag")]),e._v("。")]),e._v(" "),_("blockquote",[_("p",[e._v("第一次请求，服务器给客户端的资源有："),_("strong",[e._v("最后更新时间 Last-Modified")]),e._v("，"),_("strong",[e._v("过期时间 max-age 和 Expires")]),e._v("（"),_("code",[e._v("因为max-age是http1.1，而Expires是http1.0的，为了兼容")]),e._v("）,"),_("strong",[e._v("文件唯一标识符:Etag")])])]),e._v(" "),_("p",[_("strong",[e._v("后续请求....")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("60S 内，不发起请求，直接使用本地缓存。（max-age=60 代表请求成功缓存后的 60S 内不再发起请求，与 Expires 相似，同时存在 max-age 优先级要比 Expires 高，区别后面具体说）")])]),e._v(" "),_("li",[_("p",[e._v("60S 后，浏览器带上了 "),_("code",[e._v("if-Modified-Since")]),e._v(" 与 "),_("code",[e._v("If-None-Match")]),e._v("(上次服务器返回来的 "),_("code",[e._v("Etag")]),e._v(")发起请求，服务器对比 "),_("code",[e._v("If-None-Match")]),e._v("与 "),_("code",[e._v("Etag")]),e._v("(不对比 "),_("code",[e._v("if-Modified-Since")]),e._v(" 与 "),_("code",[e._v("Last-Modified")]),e._v(" 了，"),_("strong",[e._v("Etag 优先级比 Last-Modified 高")]),e._v("，毕竟更精准)")])])]),e._v(" "),_("p",[_("code",[e._v("If-None-Match")]),e._v(" 与 "),_("code",[e._v("Etag")]),e._v(" 不相等，说明 "),_("code",[e._v("a.js")]),e._v(" 内容被修改过，服务器返回最新 "),_("code",[e._v("a.js")]),e._v(" 与全新的 "),_("code",[e._v("Etag")]),e._v(" 与 "),_("code",[e._v("max-age=60")]),e._v(" 与 "),_("code",[e._v("Last-Modified")]),e._v(" 与 "),_("code",[e._v("Expires")])]),e._v(" "),_("p",[_("code",[e._v("If-None-Match")]),e._v(" 与 "),_("code",[e._v("Etag")]),e._v(" 相等，说明 a.js 文件内容无任何改变，返回 "),_("code",[e._v("304")]),e._v("，告诉浏览器继续使用之前的本地缓存。")]),e._v(" "),_("p",[_("strong",[e._v("问题：我们已经可以精确的对比服务器文件与本地缓存文件差异，但其实上面方案的演变都存在一个较大缺陷， max-age 或 Expires 不过期，浏览器无法主动感知服务器文件变化。")])]),e._v(" "),_("h2",{attrs:{id:"五、http-缓存方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、http-缓存方案","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、HTTP 缓存方案")]),e._v(" "),_("h3",{attrs:{id:"文件名-hash"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件名-hash","aria-hidden":"true"}},[e._v("#")]),e._v(" 文件名 Hash")]),e._v(" "),_("p",[e._v("上述的将的 http 缓存，是针对某个文件，但是如果我所请求的资源路径发生变化了，那么是不是每次都请求的是新的呢？所以我们有如下的思路：")]),e._v(" "),_("ul",[_("li",[e._v("将不长变化的资源，设置长期缓存(max-age=较长时间)，通常包括`vue/vuex/vue-router 等资源库。")]),e._v(" "),_("li",[e._v("每次打包工程将修改过得文件名称进行 hash,这样只有相应的文件发生变化，浏览器只会请求变化的资源。"),_("code",[e._v("webpack")]),e._v("提供了"),_("code",[e._v("hash")]),e._v("，"),_("code",[e._v("chunk-hash")]),e._v("和"),_("code",[e._v("content-hash")]),e._v("三种对文件名称 hash 的方法。")])]),e._v(" "),_("h3",{attrs:{id:"cdn-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn-缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" CDN 缓存")]),e._v(" "),_("blockquote",[_("p",[e._v("CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。")])]),e._v(" "),_("p",[_("strong",[e._v("CDN 边缘节点缓存数据，当浏览器请求，CDN 将代替源站判断并处理此处请求。")])]),e._v(" "),_("h2",{attrs:{id:"六、浏览器刷新对http缓存的影响"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、浏览器刷新对http缓存的影响","aria-hidden":"true"}},[e._v("#")]),e._v(" 六、浏览器刷新对http缓存的影响")]),e._v(" "),_("ol",[_("li",[_("p",[_("strong",[e._v("浏览器地址栏回车，或者点击跳转按钮，前进，后退，新开窗口，这些行为，会让 Expires，max-age 生效")]),e._v("，也就是说，这几种操作下，浏览器会判断过期时间，再考虑要不要发起请求，当然 Last-Modified 和 Etag 也有效。")])]),e._v(" "),_("li",[_("p",[_("strong",[e._v("F5 刷新浏览器，或者使用浏览器导航栏的刷新按钮，这几种，会忽略掉 Expires，max-age 的限制，强行发起请求")]),e._v("，Last-Modified 和 Etag 在这种情况下也有效。")])]),e._v(" "),_("li",[_("p",[_("strong",[e._v("CTRL+F5 是强制请求，所有缓存文件都不使用，全部重新请求下载")]),e._v("，因此 Expires，max-age，Last-Modified 和 Etag 全部失效。")])])]),e._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/echolun/p/9419517.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http 缓存详解，http 缓存推荐方案"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=a.exports}}]);