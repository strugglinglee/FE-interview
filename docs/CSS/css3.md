# css3与html5

## html5新特性

- 用于绘画的**canvas**元素
- 用于媒介回放的 **video** 和**audio**元素
- **svg**,地理定位
- 对本地离线存储的更好的支持**localStorage**(5M的存储空间>>cookies的4K)
- 语义化标签 article、footer、header、nav、section
- **WebSocket**长链接

## css3

- **伪元素**
  - ::first-line（首行）
  - ::first-letter （首字）
  - ::before 在某个元素之前插入一些内容
  - ::after 在某个元素之后插入一些内容
- **盒模型**（box-sizing: border-box怪异盒模型的运用）
- **弹性盒子**
  - 定义
    - 一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式
    - 弹性盒子由**弹性容器**(Flex container)和**弹性子元素**(Flex item)组成。
    - 弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。
  - **flex-direction**  顺序指定了弹性子元素在父容器中的位置。
    - row：横向从左到右排列（左对齐），默认的排列方式。
    - row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面
    - column：纵向排列。
    - column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。
  - **justify-content** 属性(控制主轴)
    - justify-content: flex-start | flex-end | center | space-between | space-around
    - flex-start 弹性项目向行头紧挨着填充。默认值
    - flex-end 弹性项目向行尾紧挨着填充。
    - center 弹性项目居中紧挨着填充。
    - space-between 弹性项目平均分布在该行上，两端对齐。
    - space-around 弹性项目平均分布在该行上，两边留有一半的间隔空间。
  - **align-items** 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式
    - flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
    - flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
    - center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
    - baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
    - stretch：默认值，自动将子元素拉伸成容器的高度
  - **flex-wrap**属性用于指定弹性盒子的子元素换行方式
    - nowrap- 默认，弹性容器为单行。该情况下弹性子项可能会溢出容器。
    - wrap- 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行
    - wrap-reverse-反转 wrap 排列。
  - **align-content** 属性用于修改flex-wrap属性的行为。类似于align-items, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。
    - stretch- 默认。各行将会伸展以占用剩余的空间。
    - flex-start- 各行向弹性盒容器的起始位置堆叠。
    - flex-end- 各行向弹性盒容器的结束位置堆叠。
    - center-各行向弹性盒容器的中间位置堆叠。
    - space-between-各行在弹性盒容器中平均分布。
    - space-around- 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。
  - **align-self**属性用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式
    - auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。
    - flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
    - flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
    - center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。
    - baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
    - stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
  - **flex** 属性用于指定弹性子元素如何分配空间
  - **flex-basis** 用来设置子元素主轴方向的尺寸，eg:flex-basis:200px;
- 背景和边框
  - **border-radius**
  - **box-shadow**
  - border-image
  - background-size
  - background-origin
  - content-box
  - padding-box
  - border-box
  - 多重背景background-image:url(bg_flower.gif),url(bg_flower_2.gif);
  - 文本效果text-shadow（能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色）text-shadow: 5px 5px 5px #FF0000;
  - **word-wrap**允许您允许文本强制文本进行换行 即使这意味着会对单词进行拆分
- 字体
  - 将该字体文件存放到 web 服务器上，它会在需要时被自动下载到用户的计算机上（之前是需要下载到本地的）
  - @font-face 规则中定义
    - 首先定义字体的名称（比如 myFirstFont）然后指向该字体文件
- **2D/3D 转换**
  - CSS3 转换，我们能够对元素进行移动、缩放、转动、拉长或拉伸
  - 2D转换
    - **translate()**--translateX/Y
      - transform: translate(50px,100px);把元素从左侧移动 50 像素，从顶端移动 100 像素
    - **rotate()**:transform: rotate(30deg);元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转
    - **scale()**--scaleX/Y transform: scale(2,4)把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍。
    - **skew()**--skewX/Y元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数
      - transform: skew(30deg,20deg);围绕 X 轴把元素翻转 30 度，围绕 Y 轴翻转 20 度
    - **matrix()**
      - 把所有 2D 转换方法组合在一起
      - matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素
  - **3D转换**
    - translateX(x) /translateY(y)/translateZ(z)
    - scale3d(x,y,z)/scaleX(x)/scaleY(y)/scaleZ(z)
    - rotate3d(x,y,z,angle) /rotateX(angle)/rotateY(angle)/rotateZ(angle)
- **transition 过渡效果**
  - transition: property duration timing-function delay;
  - transition: 过渡动画
  - transition-property: 属性
  - transition-duration: 间隔
  - transition-timing-function: 曲线
  - transition-delay: 延迟
- **动画**
  - @keyframes 创建动画规则（from-to/0%~100%）
    - @keyframes myfirst{from {background: red;}to {background: yellow;}}
  - animation: **myfirst 5s linear 2s infinite alternate**;
  - animation-timing-function：规定动画的速度曲线。默认是ease
  - animation-delay：规定动画何时开始。默认是 0
  - animation-iteration-count：规定动画被播放的次数。默认是 1
  - animation-direction：规定动画是否在下一周期逆向地播放。默认是normal
  - animation-play-state ：规定动画是否正在运行或暂停。默认是running
  - animation-fill-mode：规定动画执行之前和之后如何给动画的目标应用，默认是none，保留在最后一帧可以用forwards
