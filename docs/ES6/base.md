# ES6

## 谈谈你对装饰器的理解

- 是一种与类（class）相关的语法，用来注释或修改类和类方法
- 装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。

## 谈谈你对set和map等的认识

### set数据结构

- 去除数组重复成员
- 去除字符串重复字符
- 实现并集（Union）、交集（Intersect）和差集（Difference）

    ```js
    let a = new Set([1, 2, 3]);let b = new Set([4, 3, 2]);
    ​// 并集
    let union = new Set([...a, ...b]);// Set {1, 2, 3, 4}
    // 交集
    let intersect = new Set([...a].filter(x => b.has(x)));// set {2, 3}
    // 差集
    let difference = new Set([...a].filter(x => !b.has(x)));// Set {1}
    ```

### weakset

WeakSet 的成员只能是对象，而不能是其他类型的值。
WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

### map

类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

### weakmap

只接受对象作为键名（null除外），不接受其他类型的值作为键名。
WeakMap的键名所指向的对象，不计入垃圾回收机制。
