(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{314:function(e,a,_){"use strict";_.r(a);var i=_(1),v=Object(i.a)({},(function(){var e=this,a=e.$createElement,_=e._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[_("code",[e._v("Android")]),e._v(" 提供三个平台框架，帧动画（太耗资源能不用就不用），补间动画（包括：淡入淡出 "),_("code",[e._v("AlphaAnimation，缩放")]),e._v(" "),_("code",[e._v("ScaleAnimation")]),e._v(",平移 "),_("code",[e._v("TranslationAnimation")]),e._v(",和旋转 "),_("code",[e._v("RotateAnimation")]),e._v("），和属性动画。")]),e._v(" "),_("h2",{attrs:{id:"一、使用属性动画"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、使用属性动画","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、使用属性动画")]),e._v(" "),_("h3",{attrs:{id:"（一）补间动画局限性："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#（一）补间动画局限性：","aria-hidden":"true"}},[e._v("#")]),e._v(" （一）补间动画局限性：")]),e._v(" "),_("ul",[_("li",[e._v("补间动画只能用于 View 对象，也就是继承于 View 或者 View 的控件。")]),e._v(" "),_("li",[e._v("只有四种动画操作，淡入淡出，缩放，平移，旋转")]),e._v(" "),_("li",[e._v("不见动画是改变 View 的显示效果，但是没有改变真正的属性。也就是假设 View 移动了，要是点击移动后的地方是没有用的，还是只能点击期初的位置。")])]),e._v(" "),_("h3",{attrs:{id:"（二）属性动画的特性："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#（二）属性动画的特性：","aria-hidden":"true"}},[e._v("#")]),e._v(" （二）属性动画的特性：")]),e._v(" "),_("ul",[_("li",[e._v("持续时间：默认长度 300Ms")]),e._v(" "),_("li",[e._v("时间插值器（Time Interpolation）。能够指定为计算当前动画运行时间的函数的属性值来觉得动画范围内的变化频率。")]),e._v(" "),_("li",[e._v("重复次数和行为。")]),e._v(" "),_("li",[e._v("动画集合（AnimationsSet）")]),e._v(" "),_("li",[e._v("帧刷新延迟：默认 10s 刷新一次。")])]),e._v(" "),_("p",[e._v("具体的使用："),_("strong",[e._v("查看 View 相关技术--\x3eAnimation 相关---\x3e属性动画")])]),e._v(" "),_("h2",{attrs:{id:"二、硬件加速"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、硬件加速","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、硬件加速")]),e._v(" "),_("h3",{attrs:{id:"（一）硬件加速原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#（一）硬件加速原理","aria-hidden":"true"}},[e._v("#")]),e._v(" （一）硬件加速原理")]),e._v(" "),_("p",[e._v("在硬件加速渲染模型中有一个重要的核心类："),_("strong",[e._v("DisplayList,每个 View 内部都会维护一个 DisplayList")]),e._v("。")]),e._v(" "),_("p",[e._v("在不支持硬件加速的版本中，View 的更新通过 "),_("code",[e._v("draw")]),e._v(" 和 "),_("code",[e._v("invalidate")]),e._v("()方法通知更新并重新渲染。")]),e._v(" "),_("p",[e._v("在支持硬件加速的版本中，其中执行绘制的 "),_("code",[e._v("draw")]),e._v(" 方法会把所有绘制命令记录到一个新的显示列表（DisplayList），这个 "),_("code",[e._v("DisplayList")]),e._v(" 包含输出的 View 层级绘制代码，但是并不是加入到显示列表立即执行，当 ViewTree 的 DisplayList 全部记录完毕后，由 "),_("code",[e._v("OpenGLRender")]),e._v(" 负责将 root view 的 "),_("code",[e._v("DisplayList")]),e._v(" 渲染到屏幕上，而 invalidate（）只是显示列表中的记录和更新显示层级就可以了，不用更新 View。")]),e._v(" "),_("h3",{attrs:{id:"（二）硬件加速的级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#（二）硬件加速的级别","aria-hidden":"true"}},[e._v("#")]),e._v(" （二）硬件加速的级别")]),e._v(" "),_("ul",[_("li",[e._v('Application 级别：在 Mnifest.xml 文件中的 application 中添加属性：android:hardwareAccelerated="true"，这样整个应用都采用硬件加速')]),e._v(" "),_("li",[e._v("Activity 级别：在"),_("code",[e._v('<activity android:hardwareAccelerated="true"/>')])]),e._v(" "),_("li",[e._v("Window 级别："),_("code",[e._v("getWindow().setFlags(WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED,WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED).")])]),e._v(" "),_("li",[e._v("View 级别："),_("code",[e._v("View.setLayerType(View.LAYER_TYPE_SOFTWARE,null).")])])]),e._v(" "),_("h3",{attrs:{id:"三-在动画上使用硬件加速"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-在动画上使用硬件加速","aria-hidden":"true"}},[e._v("#")]),e._v(" (三)在动画上使用硬件加速")]),e._v(" "),_("p",[e._v("使用 "),_("code",[e._v("view.setLayerType(type,Paint)")]),e._v("方法，第一个参数是使用的层类型，第二个参数为可选参数，可以吧 "),_("code",[e._v("paint")]),e._v(" 参数应用到颜色过滤上，特别是混合模式或者是对一个 Layer 进行不透明处理。\n类型有以下几种：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("LAYER_TYPE_NONE")]),e._v(":默认渲染方式，不会返回一个离线缓冲，默认值")]),e._v(" "),_("li",[_("code",[e._v("LAYER_TYPE_HARDWARE")]),e._v(":使用硬件加速")]),e._v(" "),_("li",[_("code",[e._v("LAYER_TYPE_SOFTWARE")]),e._v(":此 View 通过软件渲染为一个 Bitmap。")])]),e._v(" "),_("p",[e._v("设计动画的流程：\n将要执行动画的 "),_("code",[e._v("View")]),e._v(" 的 "),_("code",[e._v("TYPE")]),e._v(" 设置为 "),_("code",[e._v("LAYER_TYPE_HARDWARE。")]),e._v("\n计算动画 View 的属性和信息，更新 view 的属性\n若动画结束，将 "),_("code",[e._v("LayerType")]),e._v(" 设置为 "),_("code",[e._v("None。")])]),e._v(" "),_("h2",{attrs:{id:"三、硬件加速的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、硬件加速的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、硬件加速的问题")]),e._v(" "),_("ul",[_("li",[e._v("在软件渲染的时候，可以重用 Bitmap 的方法来节省内存，但是如果开启硬件加速就不行了。")]),e._v(" "),_("li",[e._v("开启硬件加速的 view 在前台运行，需要耗费额外的内存，加速的 UI 切换到后台时，产生的额外内存可能不会释放。")]),e._v(" "),_("li",[e._v("当 UI 中存在过度绘制时候，硬件加速会比较容易发生问题。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);