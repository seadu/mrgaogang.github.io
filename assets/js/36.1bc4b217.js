(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{318:function(e,t,r){"use strict";r.r(t);var a=r(17),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"vue的data属性为何为一个函数？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue的data属性为何为一个函数？"}},[e._v("#")]),e._v(" vue的data属性为何为一个函数？")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("重复创建实例造成多实例共享一个数据对象")]),e._v(";vue文件经过babel编译，将导出的对象直接替换成了一个对象变量，然后将这个变量传入到对应的组件构造函数中。因此，也就产生了引用共享的问题(所有js对象皆引用)")])]),e._v(" "),r("ul",[r("li",[e._v("每个组件都是 Vue 的实例。")]),e._v(" "),r("li",[e._v("组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他。")])]),e._v(" "),r("h3",{attrs:{id:"vue组件通信有哪些方式？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue组件通信有哪些方式？"}},[e._v("#")]),e._v(" vue组件通信有哪些方式？")]),e._v(" "),r("ul",[r("li",[e._v("props和$emit")]),e._v(" "),r("li",[e._v("$emit和$on")]),e._v(" "),r("li",[e._v("vuex")]),e._v(" "),r("li",[e._v("中央事件总线")]),e._v(" "),r("li",[e._v("provide和inject")]),e._v(" "),r("li",[e._v("$attr和$listener")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5cde0b43f265da03867e78d3#heading-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 组件间通信六种方式（完整版）"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"vue插槽了解吗？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue插槽了解吗？"}},[e._v("#")]),e._v(" vue插槽了解吗？")]),e._v(" "),r("ul",[r("li",[e._v("编译作用域:")])]),e._v(" "),r("blockquote",[r("p",[e._v("父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。")])]),e._v(" "),r("ul",[r("li",[e._v("具名插槽")])]),e._v(" "),r("blockquote",[r("p",[e._v("v-slot 只能添加在一个 <template> 上 (只有一种例外情况);<template> 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容。")])]),e._v(" "),r("blockquote",[r("p",[e._v("具名插槽缩写：即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header：如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：")])]),e._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("current"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("user #"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{ user }"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" user"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("firstName "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("current"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("user"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("ul",[r("li",[e._v("作用域插槽")])]),e._v(" "),r("blockquote",[r("p",[e._v("有时让插槽内容能够访问子组件中才有的数据是很有用的。")])]),e._v(" "),r("h3",{attrs:{id:"vue的slot和slot-scope"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue的slot和slot-scope"}},[e._v("#")]),e._v(" Vue的slot和slot-scope")]),e._v(" "),r("ul",[r("li",[e._v("slot具名插槽")]),e._v(" "),r("li",[e._v("slot-scope: 这个的作用，主要就是当向组件发送的内容需要和组件的props属性的内容有联系时，才使用这个作用域插槽。简单点来说就是：可以使用 子组件的数据 和 父组件传过来的props的值。")])]),e._v(" "),r("h3",{attrs:{id:"vue混入策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue混入策略"}},[e._v("#")]),e._v(" vue混入策略")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("data对象在内部会进行递归合并，并在发生冲突时以组件数据优先。")])]),e._v(" "),r("li",[r("p",[e._v("同名钩子（生命周期）函数将合并为一个数组，因此都将被调用。另外，"),r("strong",[e._v("混入对象的钩子将在组件自身钩子之前调用")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。")])])]),e._v(" "),r("blockquote",[r("p",[e._v("注意：Vue.extend() 也使用同样的策略进行合并。")])]),e._v(" "),r("h3",{attrs:{id:"vue的extends和mixin有什么区别？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue的extends和mixin有什么区别？"}},[e._v("#")]),e._v(" vue的extends和mixin有什么区别？")]),e._v(" "),r("blockquote",[r("p",[e._v("其实两个都可以理解为继承，mixins接收对象数组（可理解为多继承），extends接收的是对象或函数（可理解为单继承）。")])]),e._v(" "),r("blockquote",[r("p",[e._v("优先调用mixins和extends继承的父类，"),r("strong",[e._v("extends触发的优先级更高")]),e._v("，相对于是队列push(extend, mixin1, minxin2, 本身的钩子函数)")])]),e._v(" "),r("h3",{attrs:{id:"vue-diff算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-diff算法"}},[e._v("#")]),e._v(" Vue diff算法")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5affd01551882542c83301da",target:"_blank",rel:"noopener noreferrer"}},[e._v("详解vue的diff算法"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/blob/2.6/src/core/vdom/patch.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue2.6.0 diff源码"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"computed和watch有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#computed和watch有什么区别"}},[e._v("#")]),e._v(" computed和watch有什么区别?")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-10",target:"_blank",rel:"noopener noreferrer"}},[e._v("computed和watch有什么区别?"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"vue-computed-实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-computed-实现"}},[e._v("#")]),e._v(" Vue computed 实现")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/blob/2.6/src/core/instance/state.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 源码"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("大致思路：")]),e._v(" "),r("ul",[r("li",[e._v("初始化 data， 使用 Object.defineProperty 把这些属性全部转为 getter/setter。")]),e._v(" "),r("li",[e._v("初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 watch 实例。·每个属性提供的函数作为属性的 getter·，使用 Object.defineProperty 转化。")]),e._v(" "),r("li",[e._v("Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新计算。")]),e._v(" "),r("li",[e._v("若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集。")])]),e._v(" "),r("h3",{attrs:{id:"vue是如何实现双向绑定的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue是如何实现双向绑定的"}},[e._v("#")]),e._v(" Vue是如何实现双向绑定的?")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue是如何实现双向绑定的?"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"proxy比defineproperty优劣对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy比defineproperty优劣对比"}},[e._v("#")]),e._v(" Proxy比defineproperty优劣对比?")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-12",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考:Proxy比defineproperty优劣对比?"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proxy的13种拦截操作"),r("OutboundLink")],1)])])]),e._v(" "),r("h3",{attrs:{id:"虚拟dom实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom实现原理"}},[e._v("#")]),e._v(" 虚拟DOM实现原理?")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://user-gold-cdn.xitu.io/2019/8/1/16c49afec13e0416",target:"_blank",rel:"noopener noreferrer"}},[e._v("面试官: 你对虚拟DOM原理的理解?"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"既然vue通过数据劫持可以精准探测数据变化-为什么还需要虚拟dom进行diff检测差异"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#既然vue通过数据劫持可以精准探测数据变化-为什么还需要虚拟dom进行diff检测差异"}},[e._v("#")]),e._v(" 既然Vue通过数据劫持可以精准探测数据变化,为什么还需要虚拟DOM进行diff检测差异?")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-16",target:"_blank",rel:"noopener noreferrer"}},[e._v("既然Vue通过数据劫持可以精准探测数据变化,为什么还需要虚拟DOM进行diff检测差异?"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"vue为什么没有类似于react中shouldcomponentupdate的生命周期？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue为什么没有类似于react中shouldcomponentupdate的生命周期？"}},[e._v("#")]),e._v(" Vue为什么没有类似于React中shouldComponentUpdate的生命周期？")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-17",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue为什么没有类似于React中shouldComponentUpdate的生命周期？"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"vue中的key到底有什么用？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue中的key到底有什么用？"}},[e._v("#")]),e._v(" Vue中的key到底有什么用？")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-18",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue中的key到底有什么用？"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"服务端渲染vs客户端渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染vs客户端渲染"}},[e._v("#")]),e._v(" 服务端渲染VS客户端渲染")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://jkchao.cn/article/5a11155fb520d115154c8fa1",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务端渲染VS客户端渲染"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[e._v("题目来源")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("面试必备的13道可以举一反三的Vue面试题"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);