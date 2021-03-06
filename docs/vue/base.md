# 基础篇

## 说说你对MVVM的理解

- Model-View-ViewModel的缩写，Model代表数据模型，View代表UI组件,ViewModel将Model和View关联起来
- 数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知**viewModel**层更新数据

> [了解mvc/mvp/mvvm的区别](https://juejin.im/post/5e898a3be51d45470125665f)

## Vue2.x响应式数据/双向绑定原理

- Vue 数据双向绑定主要是指：**数据变化更新视图，视图变化更新数据**。其中，View变化更新Data，可以通过事件监听的方式来实现，所以 Vue数据双向绑定的工作主要是如何**根据Data变化更新View**。
- **简述**：
  - 当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。
  - 这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。
  - 每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

- 深入理解：
  - **监听器 Observer**：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
  - **解析器 Compile**：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
  - **订阅者 Watcher**：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新——这是一个典型的观察者模式
  - **订阅器 Dep**：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

## computed 和 watch 的区别和运用的场景？

- computed：是计算属性，依赖其它属性值，并且 computed 的值有**缓存**，只有它**依赖的属性值**发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；
- watch：没有缓存性，更多的是「**观察**」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；当我们需要深度监听对象中的属性时，可以打开deep：true选项，这样便会对对象中的每一项进行监听
- **运用场景**：
  - 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
  - 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用watch选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

## Vue2.x组件通信有哪些方式？

- 父子组件通信
  - 事件机制(**父->子props,子->父 `$on、$emit`)
  - 获取父子组件实例 `$parent、$children`
  - Ref 获取实例的方式调用组件的属性或者方法
  - Provide、inject (不推荐使用，组件库时很常用)
- 兄弟组件通信
  - **eventBus** 这种方法通过**一个空的 Vue实例作为中央事件总线（事件中心**），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件
    > Vue.prototype.`$bus` = new Vue
  - **Vuex**
- 跨级组件通信
  - Vuex
  - `$attrs、$listeners`
  - Provide、inject

## 说一下v-if和v-show的区别

- 当条件不成立时，v-if不会渲染DOM元素，v-show操作的是样式(display)，切换当前DOM的显示和隐藏。
- v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；
- v-show 则适用于需要非常频繁切换条件的场景。

## 为什么 v-for 和 v-if 不建议用在一起

- 当 v-for 和 v-if 处于同一个节点时，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。如果要遍历的数组很大，而真正要展示的数据很少时，这将造成很大的性能浪费
- 这种场景建议使用 computed，先对数据进行过滤

## 组件中的data为什么是一个函数？

- 一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。
- 如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

## 子组件为什么不可以修改父组件传递的Prop？/怎么理解vue的单向数据流？

- Vue提倡单向数据流,即父级props的更新会流向子组件,但是反过来则不行。
- 这是为了防止意外的改变父组件状态，使得应用的数据流变得难以理解。
- 如果破坏了单向数据流，当应用复杂时，debug 的成本会非常高。

## v-model是如何实现双向绑定的？

- v-model是用来在表单控件或者组件上创建双向绑定的
- 他的本质是v-bind和v-on的语法糖
- 在一个组件上使用v-model，默认会为组件绑定名为value的prop和名为input的事件

## nextTick的实现原理是什么？

- 在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用 nextTick 来获取更新后的 DOM。
- nextTick主要使用了**宏任务**和**微任务**。
- 根据执行环境分别尝试采用Promise、MutationObserver、setImmediate，如果以上都不行则采用setTimeout定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

## Vue不能检测数组的哪些变动？Vue 怎么用 `vm.$set()` 解决对象新增属性不能响应的问题 ？

- Vue 不能检测以下数组的变动：
  - 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
  - 当你修改数组的长度时，例如：vm.items.length = newLength
  - 解决办法：
    - 第一类问题

            ```
            // 法一：Vue.set
            Vue.set(vm.items, indexOfItem, newValue)
            // 法二：Array.prototype.splice
            vm.items.splice(indexOfItem, 1, newValue)
            ```
    - 第二类问题，可使用 splice：

            ```
            vm.items.splice(newLength)
            ```

- vm.`$set` 的实现原理是：
  - 如果目标是数组，直接使用数组的 splice 方法触发相应式；
  - 如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）

## Vue事件绑定原理是什么？

- 原生事件绑定是通过addEventListener绑定给真实元素的，组件事件绑定是通过Vue自定义的`$on`实现的。

## 说一下虚拟Dom以及key属性的作用

- 由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的产生原因。
- Virtual DOM本质就是用一个**原生的JS对象去描述一个DOM节点**。是对真实DOM的一层抽象。(也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中。)
- 虚拟 DOM 的实现原理主要包括以下 3 部分：
  - 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
  - diff 算法 — 比较两棵虚拟 DOM 树的差异；
  - pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。
- key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速
  - 更准确：因为带 key 就不是就地复用了，在 sameNode 函数a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。
  - 更快速：利用 key 的唯一性生成 map 对象来获取对应节点，比遍历方式更快

## 为什么不建议用index作为key?

- 不建议 用index 作为 key，和没写基本上没区别，因为不管你数组的顺序怎么颠倒，index 都是 0, 1, 2 这样排列，导致 Vue 会复用错误的旧子节点，做很多额外的工作
