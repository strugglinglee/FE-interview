# 性能优化

## 从输入 URL 到页面加载完成，发生了什么？

1. **DNS 解析**:首先我们需要通过 DNS（域名解析系统）将 URL 解析为对应的 IP 地址
2. **TCP 连接**:与这个 IP 地址确定的那台服务器建立起 TCP 网络连接
3. **HTTP 请求抛出**:随后我们向服务端抛出我们的 HTTP 请求
4. **服务端处理请求，HTTP 响应返回**:服务端处理完我们的请求之后，把目标数据放在 HTTP 响应里返回给客户端
5. **浏览器拿到响应数据，解析响应内容，把解析的结果展示给用户**:拿到响应数据的浏览器就可以开始走一个渲染的流程，渲染完毕，页面便呈现给了用户，并时刻等待响应用户的操作

## 你做过哪些性能优化

### 从输入 URL 到显示页面这个过程涉及到网络的层面的过程

1. DNS 解析
2. TCP 连接
3. HTTP 请求/响应: 减少请求次数/减少单次请求所花费的时间

### webpack 优化方案

优化瓶颈:

- webpack 的构建过程太花时间
- webpack 打包的结果体积太大

常见优化方式:

1. 用 include 或 exclude 来帮我们避免不必要的转译
2. **DllPlugin**
    基于 Windows 动态链接库（dll）的思想被创作出来的
    会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库
    这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包
3. Happypack——将 loader **由单进程转为多进程**
   充分释放 CPU 在多核并发方面的优势，帮我们把任务分解给多个子进程去并发执行，大大提升打包效率
4. 文件结构可视化，找出导致体积过大的原因: **包组成可视化工具**——webpack-bundle-analyzer
5. **按需加载**
webpack配置文件--指定 chunkFilename

```js
 output: {
     path: path.join(__dirname, '/../dist'),
     filename: 'app.js',
     publicPath: defaultSettings.publicPath,
     // 指定 chunkFilename
     chunkFilename: '[name].[chunkhash:5].chunk.js',
 },
```

路由处的代码也要做一下配合

```js
 const getComponent => (location, cb) {
   require.ensure([], (require) => {
     cb(null, require('../pages/BugComponent').default)
   }, 'bug')
 },
```

6. 前端资源的加载优化
    使用DataURL
            将小图片转换为base64编码，用DataURL来引用它，将图片变成编码和代码文件打包到一起，同样可以减少小图片请求数量的效果
            方法:处理文件时指定一个大小，当文件小于这个配置时，url-loader会将其转换为一个base64编码的DataURL
        图片压缩(image-webpack-loader)
        配置html-webpack-plugin插件
            配置压缩HTML的配置，压缩HTML中的代码
            minifyCSS开启
            minifyJS开启
            postcss-loader插件压缩CSS代码
7. 优化JS代码
        Tree shaking移除js中的无用代码
        使用 TerserPlugin 后，Terser 会移除那些没有对外暴露且没有额外副作用的方法，来减小构建出来的代码体积
        sideEffects
            移除的是无用的模块或者代码文件
