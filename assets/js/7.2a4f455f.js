(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{405:function(v,_,t){"use strict";t.r(_);var l=t(56),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"css常规问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css常规问题"}},[v._v("#")]),v._v(" css常规问题")]),v._v(" "),t("h2",{attrs:{id:"垂直居中的方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中的方案"}},[v._v("#")]),v._v(" 垂直居中的方案")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("弹性盒")]),v._v(" "),t("ul",[t("li",[v._v("display:flex")]),v._v(" "),t("li",[v._v("align-items:center")]),v._v(" "),t("li",[v._v("justify-content:center")])])]),v._v(" "),t("li",[t("strong",[v._v("translate")]),v._v(" "),t("ul",[t("li",[v._v("position: absolute")]),v._v(" "),t("li",[v._v("top: 50%")]),v._v(" "),t("li",[v._v("left: 50%")]),v._v(" "),t("li",[t("strong",[v._v("transform: translate(-50%,-50%)")])])])]),v._v(" "),t("li",[t("strong",[v._v("相对定位")]),v._v(" "),t("ul",[t("li",[v._v("position: absolute")]),v._v(" "),t("li",[v._v("top/right/bottom/left:0")]),v._v(" "),t("li",[v._v("margin:auto")])])]),v._v(" "),t("li",[t("strong",[v._v("table+vertical-align")]),v._v(" "),t("ul",[t("li",[v._v("display: table-cell")]),v._v(" "),t("li",[v._v("vertical-align: middle")])])])]),v._v(" "),t("h2",{attrs:{id:"清除浮动和bfc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动和bfc"}},[v._v("#")]),v._v(" 清除浮动和BFC")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("清除浮动原理")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("清除浮动代码")]),v._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[v._v(".clearfix:after")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("diaplay")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("block"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("clear")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("both\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("//兼容ie低版本\n.clearfix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    *"),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("zoom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])])])]),v._v(" "),t("li",[t("p",[v._v("主要属性=>"),t("strong",[v._v("clear:both  规定在左右两侧不允许浮动元素")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("display:block")]),v._v(" "),t("strong",[v._v("clear只能在块级元素上起作用")])])]),v._v(" "),t("li",[t("p",[v._v("visibility:hidden/height:0  只要content的值为空，写不写都无所谓")])])])]),v._v(" "),t("li",[t("strong",[v._v("BFC定义")]),v._v(" "),t("ul",[t("li",[v._v("块级格式化上下文，是一个独立的渲染区域")]),v._v(" "),t("li",[v._v("让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。")])])]),v._v(" "),t("li",[t("strong",[v._v("触发BFC条件")]),v._v(" "),t("ul",[t("li",[v._v("根元素")]),v._v(" "),t("li",[v._v("position: absolute/fixed")]),v._v(" "),t("li",[v._v("display: inline-block / table")]),v._v(" "),t("li",[v._v("float 元素")]),v._v(" "),t("li",[v._v("ovevflow !== visible")])])]),v._v(" "),t("li",[t("strong",[v._v("BFC规则")]),v._v(" "),t("ul",[t("li",[v._v("属于同一个 BFC 的两个相邻 Box 垂直排列")]),v._v(" "),t("li",[v._v("属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠")]),v._v(" "),t("li",[v._v("BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)")]),v._v(" "),t("li",[v._v("BFC 的区域不会与 float 的元素区域重叠")]),v._v(" "),t("li",[v._v("计算 BFC 的高度时，浮动子元素也参与计算")]),v._v(" "),t("li",[v._v("文字层不会被浮动层覆盖，环绕于周围")])])]),v._v(" "),t("li",[t("strong",[v._v("BFC应用")]),v._v(" "),t("ul",[t("li",[v._v("阻止margin重叠")]),v._v(" "),t("li",[v._v("可以包含浮动元素 —— 清除内部浮动 (清除浮动的原理是两个div都位于同一个 BFC 区域之中)")]),v._v(" "),t("li",[v._v("自适应两栏布局")]),v._v(" "),t("li",[v._v("可以阻止元素被浮动元素覆盖")]),v._v(" "),t("li",[v._v("其子元素的float/clear/vertical属性将失效")])])])]),v._v(" "),t("h2",{attrs:{id:"css常用布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css常用布局"}},[v._v("#")]),v._v(" css常用布局")]),v._v(" "),t("ul",[t("li",[v._v("盒模型包括怪异盒模型")]),v._v(" "),t("li",[v._v("定位")]),v._v(" "),t("li",[v._v("流式布局")]),v._v(" "),t("li",[v._v("浮动布局")]),v._v(" "),t("li",[v._v("flex")]),v._v(" "),t("li",[v._v("grid布局")])]),v._v(" "),t("h2",{attrs:{id:"css权重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css权重"}},[v._v("#")]),v._v(" css权重")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("CSS权重")]),v._v(" "),t("ul",[t("li",[v._v("是指样式的优先级，有两条或多条样式作用于一个元素")]),v._v(" "),t("li",[v._v("权重高的那条样式对元素起作用")]),v._v(" "),t("li",[v._v("权重相同的，后写的样式会覆盖前面写的样式。")])])]),v._v(" "),t("li",[v._v("权重的等级\n"),t("ul",[t("li",[t("strong",[v._v("!important")]),v._v(",加在样式属性值后，权重值为"),t("strong",[v._v("10000")])]),v._v(" "),t("li",[t("strong",[v._v("内联样式")]),v._v('，如：style=""，权重值为1000')]),v._v(" "),t("li",[t("strong",[v._v("ID选择器，如：#content，权重值为100")])]),v._v(" "),t("li",[t("strong",[v._v("类，伪类和属性选择器")]),v._v("，如：content、:hover权重值为10")]),v._v(" "),t("li",[t("strong",[v._v("标签选择器和伪元素选择器")]),v._v("，如：div/p/:before权重值为1")]),v._v(" "),t("li",[v._v("通用选择器（ * ) 、子选择器（>）、相邻选择器（+）、同胞选择器（~）、权重值为0")])])])]),v._v(" "),t("h2",{attrs:{id:"px-em-rem的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px-em-rem的区别"}},[v._v("#")]),v._v(" px/em/rem的区别")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("px")]),v._v(" (pixel，像素):相对长度单位。像素px是相对于显示器屏幕分辨率而言的")]),v._v(" "),t("li",[t("strong",[v._v("em")]),v._v("(相对长度单位，相对于当前对象内文本的字体尺寸):em是相对长度单位。相对于当前对象内文本的字体尺寸（参考物是父元素的font-size）如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸\n"),t("ul",[t("li",[v._v("特点: em的值并不是固定的/em会继承父级元素的字体大小")])])]),v._v(" "),t("li",[t("strong",[v._v("rem")]),v._v("（root em，根em）\n"),t("ul",[t("li",[v._v("vue中使用postcss-px2rem")]),v._v(" "),t("li",[v._v("自动将vue项目中的px转换为rem")]),v._v(" "),t("li",[v._v("因为 postcss-plugin-px2rem 这个插件  配置选项上有  exclude 属性，它可以配置 是否对 某个文件夹下的所有css文件不进行从px到rem的转换。")]),v._v(" "),t("li",[v._v("rem是CSS3新增的一个相对单位，"),t("strong",[v._v("rem是相对于HTML根元素的字体大小")]),v._v("（font-size）来计算的长度单位")]),v._v(" "),t("li",[v._v("优点：只需要设置"),t("strong",[v._v("根目录的大小")]),v._v("就可以把整个页面的成比例的调好")]),v._v(" "),t("li",[v._v("rem兼容性：除了IE8及更早版本外，所有浏览器均已支持rem")])])]),v._v(" "),t("li",[v._v("em与rem的区别：\n"),t("ul",[t("li",[v._v("rem是相对于根元素（html）的字体大小，而em是相对于其父元素的字体大小")]),v._v(" "),t("li",[v._v("如何使 1rem=10px？在设置HTML{font-size：62.5%；}即可")])])]),v._v(" "),t("li",[v._v("补充内容：\n"),t("ul",[t("li",[v._v("vw是相对视口（viewport）的宽度而定的，长度等于视口宽度的1/100")]),v._v(" "),t("li",[v._v("vh是相对视口（viewport）的高度而定的，长度等于视口高度的1/100")]),v._v(" "),t("li",[v._v("vm其中最小的那个被均分为100单位的vm")])])])]),v._v(" "),t("h2",{attrs:{id:"网站变灰-滤镜"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网站变灰-滤镜"}},[v._v("#")]),v._v(" 网站变灰--滤镜")]),v._v(" "),t("ul",[t("li",[v._v("filter:grayscale(100%)")])]),v._v(" "),t("h2",{attrs:{id:"文本溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本溢出"}},[v._v("#")]),v._v(" 文本溢出")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("单行文本溢出省略")]),v._v(" "),t("ul",[t("li",[v._v("overflow:hidden(文字超出限定宽度，则隐藏超出的内容)")]),v._v(" "),t("li",[v._v("white-space:nowrap(设置文字在一行显示，不能换行)")]),v._v(" "),t("li",[v._v("text-overflow:ellipsis(规定当文本溢出时，显示省略符号来代表被修剪得文本)")])])]),v._v(" "),t("li",[t("strong",[v._v("多行文本溢出省略")]),v._v("(只适用于webkit内核)\n"),t("ul",[t("li",[v._v("-webkit-line-clamp:2(用来限制在一个块元素现实的文本行数)")]),v._v(" "),t("li",[v._v("display:-webkit-box(和1结合使用，将对象作为弹性伸缩盒子显示)")]),v._v(" "),t("li",[v._v("-webkit-box-orient:vertical(和1结合使用，设置或检索伸缩对象的子元素的排列方式)")]),v._v(" "),t("li",[v._v("overflow:hidden")]),v._v(" "),t("li",[v._v("text-overflow:ellipsis")])])])]),v._v(" "),t("h2",{attrs:{id:"伪类-伪元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪类-伪元素"}},[v._v("#")]),v._v(" 伪类/伪元素")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("伪元素")]),v._v(" "),t("ul",[t("li",[v._v("::fist-line为某个元素的第一行文字添加使用样式")]),v._v(" "),t("li",[v._v("::first-letter为某个元素的文字的首字母或第一个字添加使用样式")]),v._v(" "),t("li",[v._v("::before在某个元素之前插入一些内容")]),v._v(" "),t("li",[v._v("::after在某个元素之后插入一些内容")]),v._v(" "),t("li",[v._v("::selection对光标选中的元素添加样式")])])]),v._v(" "),t("li",[v._v("伪类\n"),t("ul",[t("li",[v._v(":link\n"),t("ul",[t("li",[v._v("选取未访问过的超链接元素，只要点过的就会变色，从而标记哪个链接是访问过的,这个属性就是用来表示没访问过的链接")])])]),v._v(" "),t("li",[v._v(":visited\n"),t("ul",[t("li",[v._v("与前者相反，用来标记哪个链接是已经访问过的，防止重复点击")])])]),v._v(" "),t("li",[v._v(":hover\n"),t("ul",[t("li",[v._v("选取鼠标悬停的元素，经常用在PC端，当鼠标放在一个元素上面时的样式,移动端基本用不到")])])]),v._v(" "),t("li",[v._v(":active\n"),t("ul",[t("li",[v._v("选取点中的元素，希望按钮有反馈的时候 可以用它来标记操作反馈的样式")]),v._v(" "),t("li",[v._v("并不只可以用在按钮上")])])]),v._v(" "),t("li",[v._v(":focus")]),v._v(" "),t("li",[v._v(":empty\n"),t("ul",[t("li",[v._v("选取没有子元素的元素，比如选择空的span")]),v._v(" "),t("li",[v._v("要注意，就算有空格的化也不能算空，不会被这个伪类选中")])])]),v._v(" "),t("li",[v._v(":checked\n"),t("ul",[t("li",[v._v("选取勾选状态的input元素，只对radio/checkbox生效")])])]),v._v(" "),t("li",[v._v(":disabled\n"),t("ul",[t("li",[v._v("选取禁用的表单元素")])])]),v._v(" "),t("li",[v._v(":first/last/nth-child/:nth-last-child(an+b)")]),v._v(" "),t("li",[v._v(":only-child(选取"),t("strong",[v._v("唯一")]),v._v("子元素)")]),v._v(" "),t("li",[v._v(":not\n"),t("ul",[t("li",[v._v("该伪类本身没有优先级")]),v._v(" "),t("li",[v._v("优先级由括号里面的内容决定")])])])])])]),v._v(" "),t("h2",{attrs:{id:"重绘和回流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流"}},[v._v("#")]),v._v(" 重绘和回流")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("重绘")]),v._v(":指当前页面的元素不脱离文档流，简单的进行样式的变化，如修改颜色背景，浏览器绘制样式等")]),v._v(" "),t("li",[t("strong",[v._v("回流")]),v._v(":指处于文档流中DOM的尺寸大小，位置或者某些属性发生变化时，导致浏览器重新渲染部分或者全部文档")]),v._v(" "),t("li",[v._v("回流比重绘消耗性能开支更大")])])])}),[],!1,null,null,null);_.default=i.exports}}]);