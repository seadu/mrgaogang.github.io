(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{268:function(t,a,s){t.exports=s.p+"assets/img/schema.c4ac40ef.png"},340:function(t,a,s){"use strict";s.r(a);var n=s(18),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("导语：在使用 APP 的过程中，我们肯定遇到过从 A APP 跳转到 B APP 指定页面的场景，那么这个是怎么做到的呢？其实就是使用了 URLSchema。")])]),t._v(" "),n("h2",{attrs:{id:"一、urlschema-跳转-app-store"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、urlschema-跳转-app-store"}},[t._v("#")]),t._v(" 一、URLSchema 跳转 App Store")]),t._v(" "),n("p",[t._v("使用 URLSchema 跳转其实和我们之前打开电话，短信一样都是使用"),n("code",[t._v("openURL")]),t._v("打开的；其次 每一个 app 在 app store 都是有一个唯一的路径，我们可以使用这个唯一标识符跳转到指定的 url")]),t._v(" "),n("p",[t._v("此处拿 APP 跳转到 app store 为例:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("alert "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertController")]),t._v(" alertControllerWithTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"对App进行评分"')]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请给予一个好评"')]),t._v(" preferredStyle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertControllerStyleAlert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertAction")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ok "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertAction")]),t._v(" actionWithTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"好的"')]),t._v(" style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertActionStyleDefault")]),t._v(" handler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertAction")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nonnull action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//URL Scheme 必须正确")]),t._v("\n        NSURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLWithString")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"itms-apps://itunes.apple.com/app/iqiyi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sharedApplication canOpenURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sharedApplication openURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("url options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" completionHandler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertAction")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cancel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertAction")]),t._v(" actionWithTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"取消"')]),t._v(" style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIAlertActionStyleCancel")]),t._v(" handler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alert addAction"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("ok"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alert addAction"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("cancel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self presentViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("alert animated"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("YES completion"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"二、系统设置页面跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、系统设置页面跳转"}},[t._v("#")]),t._v(" 二、系统设置页面跳转")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("touchesBegan"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSSet")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITouch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("touches withEvent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIEvent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2. iOS10只允许如下方式跳转到设置里自己app的界面，对跳转到其他界面做了限制：")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" sharedApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" openURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLWithString")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplicationOpenSettingsURLString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" completionHandler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"三、自定义-schema-和-app-指间的跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、自定义-schema-和-app-指间的跳转"}},[t._v("#")]),t._v(" 三、自定义 Schema 和 APP 指间的跳转")]),t._v(" "),n("p",[t._v("前面我们学习了如何使用 Schema 的方式跳转到 app store 和系统设置页面，那么我们如何实现自定义的 schema 跳转到指定的 app 页面呢？")]),t._v(" "),n("p",[t._v("由于 app 的跳转时按照 schema 的方式跳转，所以我们首先的给自己的 app 设置 schema。")]),t._v(" "),n("h3",{attrs:{id:"_1-为自定义-app-设置-schema"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-为自定义-app-设置-schema"}},[t._v("#")]),t._v(" 1. 为自定义 app 设置 schema")]),t._v(" "),n("p",[t._v("本次案例从 A 跳转到 B，所以首先需要给 B app 设置 schema,\n"),n("img",{attrs:{src:s(268),alt:""}})]),t._v(" "),n("p",[t._v("仅仅设置 schema 还是不够的，还需要给 A app 设置可以查询的白名单权限：")]),t._v(" "),n("p",[t._v("在 A App 中的 Info.plist 中新增:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("LSApplicationQueriesSchemes"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("bAPP"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-跳转到指定的-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-跳转到指定的-app"}},[t._v("#")]),t._v(" 2. 跳转到指定的 app")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打开一个App")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IBAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("openApp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sender "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.获取应用程序App-B的URL Scheme")]),t._v("\n    NSURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("appUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLWithString")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bApp://"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.判断手机中是否安装了对应程序")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" sharedApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" canOpenURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("appUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 打开应用程序App-B")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" sharedApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" openURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("appUrl options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" completionHandler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"没有安装"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//3.iOS9以后需要设置白名单，如果使用 canOpenURL:方法，该方法所涉及到的 URL Schemes 必须在"Info.plist"中将它们列为白名单，否则不能使用。key叫做LSApplicationQueriesSchemes ，键值内容是对应应用程序的URL Schemes。不论跳转到App还是具体的界面（app://或者app://abc），只需要设置一次')]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"_3-跳转到指定页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-跳转到指定页面"}},[t._v("#")]),t._v(" 3. 跳转到指定页面")]),t._v(" "),n("p",[t._v("实现的主要步骤：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("A APP 构造 schema 并使用 openURL 打开 B APP")])]),t._v(" "),n("li",[n("strong",[t._v("B APP 解析 URL，执行页面跳转")])])]),t._v(" "),n("p",[n("strong",[t._v("A APP 跳转 B APP")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A APP跳转，将参数放在url后面")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IBAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("openSpecial"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sender "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.获取应用程序App-B的URL Scheme")]),t._v("\n    NSURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("appUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLWithString")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testApp://VC1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.判断手机中是否安装了对应程序")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" sharedApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" canOpenURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("appUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 打开应用程序App-B")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" sharedApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" openURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("appUrl options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" completionHandler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"没有安装"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("B APP 根据传递的参数跳转到指定的页面")])]),t._v(" "),n("p",[t._v("其主要的方法需要重写"),n("code",[t._v("AppDelegate.m中的openURL方法")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AppDelegate.m")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("app openURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("url options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSDictionary")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplicationOpenURLOptionsKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到当前App的第一个界面")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("main "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyWindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据字符串关键字来跳转到不同页面")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("absoluteString containsString"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VC1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳转到应用App-B的Page1页面")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据segue标示进行跳转或者使用其他的方式，详情请见  https://mrgaogang.github.io/ios/controller/UIViewController%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.html")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main performSegueWithIdentifier"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v(" sender"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);