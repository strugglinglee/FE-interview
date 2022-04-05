# css常规问题

## 垂直居中的方案

- **弹性盒**
  - display:flex
  - align-items:center
  - justify-content:center
- **translate**
  - position: absolute
  - top: 50%
  - left: 50%
  - **transform: translate(-50%,-50%)**
- **相对定位**
  - position: absolute
  - top/right/bottom/left:0
  - margin:auto
- **table+vertical-align**
  - display: table-cell
  - vertical-align: middle

## 清除浮动和BFC

- **清除浮动原理**
  - 清除浮动代码

    ```css
    .clearfix:after{
        content:'';
        diaplay:block;
        clear:both
    }
    //兼容ie低版本
    .clearfix{
        *zoom:1
    }
    ```

  - 主要属性=>**clear:both  规定在左右两侧不允许浮动元素**
  - **display:block**  **clear只能在块级元素上起作用**
  - visibility:hidden/height:0  只要content的值为空，写不写都无所谓
- **BFC定义**
  - 块级格式化上下文，是一个独立的渲染区域
  - 让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。
- **触发BFC条件**
  - 根元素
  - position: absolute/fixed
  - display: inline-block / table
  - float 元素
  - ovevflow !== visible
- **BFC规则**
  - 属于同一个 BFC 的两个相邻 Box 垂直排列
  - 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
  - BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)
  - BFC 的区域不会与 float 的元素区域重叠
  - 计算 BFC 的高度时，浮动子元素也参与计算
  - 文字层不会被浮动层覆盖，环绕于周围
- **BFC应用**
  - 阻止margin重叠
  - 可以包含浮动元素 —— 清除内部浮动 (清除浮动的原理是两个div都位于同一个 BFC 区域之中)
  - 自适应两栏布局
  - 可以阻止元素被浮动元素覆盖
  - 其子元素的float/clear/vertical属性将失效

## css常用布局

- 盒模型包括怪异盒模型
- 定位
- 流式布局
- 浮动布局
- flex
- grid布局

## css权重

- **CSS权重**
  - 是指样式的优先级，有两条或多条样式作用于一个元素
  - 权重高的那条样式对元素起作用
  - 权重相同的，后写的样式会覆盖前面写的样式。
- 权重的等级
  - **!important**,加在样式属性值后，权重值为**10000**
  - **内联样式**，如：style=""，权重值为1000
  - **ID选择器，如：#content，权重值为100**
  - **类，伪类和属性选择器**，如：content、:hover权重值为10
  - **标签选择器和伪元素选择器**，如：div/p/:before权重值为1
  - 通用选择器（ * ) 、子选择器（>）、相邻选择器（+）、同胞选择器（~）、权重值为0

## px/em/rem的区别

- **px** (pixel，像素):相对长度单位。像素px是相对于显示器屏幕分辨率而言的
- **em**(相对长度单位，相对于当前对象内文本的字体尺寸):em是相对长度单位。相对于当前对象内文本的字体尺寸（参考物是父元素的font-size）如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸
  - 特点: em的值并不是固定的/em会继承父级元素的字体大小
- **rem**（root em，根em）
  - vue中使用postcss-px2rem
  - 自动将vue项目中的px转换为rem
  - 因为 postcss-plugin-px2rem 这个插件  配置选项上有  exclude 属性，它可以配置 是否对 某个文件夹下的所有css文件不进行从px到rem的转换。
  - rem是CSS3新增的一个相对单位，**rem是相对于HTML根元素的字体大小**（font-size）来计算的长度单位
  - 优点：只需要设置**根目录的大小**就可以把整个页面的成比例的调好
  - rem兼容性：除了IE8及更早版本外，所有浏览器均已支持rem
- em与rem的区别：
  - rem是相对于根元素（html）的字体大小，而em是相对于其父元素的字体大小
  - 如何使 1rem=10px？在设置HTML{font-size：62.5%；}即可
- 补充内容：
  - vw是相对视口（viewport）的宽度而定的，长度等于视口宽度的1/100
  - vh是相对视口（viewport）的高度而定的，长度等于视口高度的1/100
  - vm其中最小的那个被均分为100单位的vm

## 网站变灰--滤镜

- filter:grayscale(100%)

## 文本溢出

- **单行文本溢出省略**
  - overflow:hidden(文字超出限定宽度，则隐藏超出的内容)
  - white-space:nowrap(设置文字在一行显示，不能换行)
  - text-overflow:ellipsis(规定当文本溢出时，显示省略符号来代表被修剪得文本)
- **多行文本溢出省略**(只适用于webkit内核)
  - -webkit-line-clamp:2(用来限制在一个块元素现实的文本行数)
  - display:-webkit-box(和1结合使用，将对象作为弹性伸缩盒子显示)
  - -webkit-box-orient:vertical(和1结合使用，设置或检索伸缩对象的子元素的排列方式)
  - overflow:hidden
  - text-overflow:ellipsis

## 伪类/伪元素

- **伪元素**
  - ::fist-line为某个元素的第一行文字添加使用样式
  - ::first-letter为某个元素的文字的首字母或第一个字添加使用样式
  - ::before在某个元素之前插入一些内容
  - ::after在某个元素之后插入一些内容
  - ::selection对光标选中的元素添加样式
- 伪类
  - :link
    - 选取未访问过的超链接元素，只要点过的就会变色，从而标记哪个链接是访问过的,这个属性就是用来表示没访问过的链接
  - :visited
    - 与前者相反，用来标记哪个链接是已经访问过的，防止重复点击
  - :hover
    - 选取鼠标悬停的元素，经常用在PC端，当鼠标放在一个元素上面时的样式,移动端基本用不到
  - :active
    - 选取点中的元素，希望按钮有反馈的时候 可以用它来标记操作反馈的样式
    - 并不只可以用在按钮上
  - :focus
  - :empty
    - 选取没有子元素的元素，比如选择空的span
    - 要注意，就算有空格的化也不能算空，不会被这个伪类选中
  - :checked
    - 选取勾选状态的input元素，只对radio/checkbox生效
  - :disabled
    - 选取禁用的表单元素
  - :first/last/nth-child/:nth-last-child(an+b)
  - :only-child(选取**唯一**子元素)
  - :not
    - 该伪类本身没有优先级
    - 优先级由括号里面的内容决定

## 重绘和回流

- **重绘**:指当前页面的元素不脱离文档流，简单的进行样式的变化，如修改颜色背景，浏览器绘制样式等
- **回流**:指处于文档流中DOM的尺寸大小，位置或者某些属性发生变化时，导致浏览器重新渲染部分或者全部文档
- 回流比重绘消耗性能开支更大
