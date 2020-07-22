(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{298:function(s,a,t){"use strict";t.r(a);var e=t(18),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("目标检测主要步骤有:")]),s._v(" "),t("ol",[t("li",[s._v("使用 labelimg 对图片做标注")]),s._v(" "),t("li",[s._v("使用 object_detection 下的工具 create_pascal_tf_record 将 xml 文件转换成 tfrecord 文件或者将 xml 转化昵称 csv 然后将 csv 转换成 tfrecord 文件")]),s._v(" "),t("li",[s._v("仿照 TensorFlow models/research/object_detection/data 文件夹下的 .pbtxt 文件编写自己的 .pbtxt 文件")]),s._v(" "),t("li",[s._v("选择目标算法并从 TensorFlow models/research/object_detection/samples/configs 文件夹内选择合适的一个 .config 文件(团队使用的是 ssd)并修改对应的参数，其中包括步数 num_steps，以及模型文件输出路径")]),s._v(" "),t("li",[s._v("选择 TensorFlow 中训练好的模型 SSD/Fast-RCNN 并选择 object_detection 中对应的 api 进行模型训练")]),s._v(" "),t("li",[s._v("使用训练好的模型进行目标检测；")]),s._v(" "),t("li",[s._v("如果训练出来的准确率不是很高需要对步长，算法以及 batch_size 进行微调")])]),s._v(" "),t("h2",{attrs:{id:"一、安装依赖及环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装依赖及环境"}},[s._v("#")]),s._v(" 一、安装依赖及环境")]),s._v(" "),t("p",[s._v("0、使用 pyenv 新增一个虚拟环境")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    pyenv virtualenv "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(".5 object_detection_demo\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n    pyenv activate object_detection_demo\n")])])]),t("p",[s._v("1、安装 Python 、TensorFlow 和其他依赖项")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tensorflow")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".1\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Pillow")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".1\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("lxml")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.3")]),s._v(".2\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jupyter")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("matplotlib")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".3\n")])])]),t("p",[s._v("2、安装 "),t("code",[s._v("Protoc")]),s._v(", 进入"),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Protoc"),t("OutboundLink")],1),s._v("下载页，下载对应的编译好的 zip 包。")]),s._v(" "),t("p",[s._v("下载后"),t("code",[s._v("bin")]),s._v("目录下会有一个"),t("code",[s._v("protoc")]),s._v("二进制文件，覆盖到对应目录：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" bin/protoc /usr/local/bin/protoc\n")])])]),t("p",[s._v("注意：应该拷贝到/usr/local/bin（可以读写）目录下不是/usr/bin（只读），否则会提示 Operation not permitted, 这一步踩了好多坑。")]),s._v(" "),t("p",[s._v("3、从"),t("code",[s._v("github")]),s._v("上下载目标检测 API 的源代码")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --branch r1.13.0 --depth "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" https://github.com/tensorflow/models\n")])])]),t("p",[s._v("4、编译"),t("code",[s._v("Protobuf")]),s._v("，进入 tensorflow/models/research 目录，运行下面命令进行编译：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    protoc object_detection/protos/*.proto --python_out"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".\n")])])]),t("p",[s._v("5、在当前目录下，添加"),t("code",[s._v("slim")]),s._v("环境变量")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PYTHONPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PYTHONPATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/slim\n")])])]),t("p",[s._v("6、测试目标检测 API 是否安装成功，下图中表示安装成功")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    python object_detection/builders/model_builder_test.py\n")])])]),t("p",[t("img",{attrs:{src:"/images/ai/demo/1.png",alt:"/images/ai/demo"}})]),s._v(" "),t("p",[s._v("7、运行"),t("code",[s._v("notebook Demo")]),s._v("，浏览器会自动跳转至如下界面：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/2.png",alt:"/images/ai/demo"}})]),s._v(" "),t("p",[s._v("进入 object_detection 文件夹中的 object_detection_tutorial.ipynb：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/3.png",alt:"/images/ai/demo"}})]),s._v(" "),t("p",[s._v("7、点击 Cell 内的"),t("code",[s._v("Run All")]),s._v("，等待 3 分钟左右，就可以显示如下效果：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/4.png",alt:"/images/ai/demo"}})]),s._v(" "),t("p",[s._v("8、新增自己的图片再次测试")]),s._v(" "),t("p",[s._v("在 models/research/object_detection/test_images 中新增一张图片，并且命名为 imageX.jpg。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/5.png",alt:"/images/ai/demo"}})]),s._v(" "),t("p",[s._v("然后更改")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    TEST_IMAGE_PATHS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" os.path.join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PATH_TO_TEST_IMAGES_DIR, "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'image{}.jpg'")]),s._v(".format"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" range"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("结果：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/6.png",alt:"/images/ai/demo"}})]),s._v(" "),t("h2",{attrs:{id:"可能会遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可能会遇到的问题"}},[s._v("#")]),s._v(" 可能会遇到的问题")]),s._v(" "),t("p",[s._v("1、AttributeError: module 'tensorflow' has no attribute 'contrib'")]),s._v(" "),t("p",[s._v("解决办法：因为 tf2.0 已经将 contrib 剥离，所以需要回退到 tf1.x")])])}),[],!1,null,null,null);a.default=r.exports}}]);