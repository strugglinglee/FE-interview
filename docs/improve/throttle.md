# 防抖与节流

## 什么是防抖和节流？有什么区别？如何实现？

- 节流
  - n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
- 防抖
  - n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

防抖在连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。

节流在间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 搜索框，搜索联想功能