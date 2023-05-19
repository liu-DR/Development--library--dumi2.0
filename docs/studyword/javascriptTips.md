---
title: tips 技巧
toc: content
group:
  title: JavaScript 知识点
  order: 4
---

## 1、javascript 数据类型

- **基本数据类型**：

## 2、深拷贝与浅拷贝

- **浅拷贝**：创建一个对源对象属性值进行拷贝的副本，当属性值为基本数据类型时，被拷贝的就是属性的值，属性值发生改变时，双方互不影响；当属性值为引用数据类型`Object`时，被拷贝的就是该属性的内存地址，属性值发生变化时，另一方跟着变化

  ```js

  let obj1 = { a: 1, b: { c: 1 } }
  let obj1_copy = { ...obj1 }

  console.log(obj1,'obj1')    // { a: 1, b: { c: 1 } }
  console.log(obj1_copy,'obj1_copy')    // { a: 1, b: { c: 1 } }

  <!-- 修改源对象中的基本数据类型值，副本中对应值不发生改变 -->
  obj1.a = '李四'

  console.log(obj1,'obj1')    // { name: '李四', age: 12, list: { foot: '西瓜' } }
  console.log(obj1_copy,'obj1_copy')    // { name: '张三', age: 12, list: { foot: '西瓜' } }

  <!-- 修改源对象中的属性b，b的属性值是一个对象 -->

  ```
