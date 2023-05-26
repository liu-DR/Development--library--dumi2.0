---
title: tips
toc: content
group:
  title: JavaScript
  order: 4
---

## 1、javascript 数据类型

- **基本数据类型**：
  - 数字`Number`
  - 字符串`String`
  - 布尔值`boolean`
  - `null`
  - `undefined`：表示变量未赋值时的属性
  - 任意精度的整数`BigInt`：可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制
  - `Symbol`：唯一且不可改变的数据类型
- **引用数据类型**：
  - 对象`Object`
  - 数组`Array`
  - 函数`Function`

## 2、深拷贝与浅拷贝

- **浅拷贝**：将对象的各个属性依次复制，基本数据类型会进行直接赋值，对于引用数据类型时，复制的是指向的堆内存地址，源对象属性改变时，副本对象属性也会随之改变

  ```js

  let obj1 = {a: 1, b: { c: 1 }}
  let obj1_copy = Object.assign({},obj1)

  <!-- 修改源对象中的基本数据类型值，副本中对应值不发生改变 -->
  obj1.a = 2

  console.log(obj1,'obj1')    // { a: 2, b: { c: 1 } }
  console.log(obj1_copy,'obj1_copy')    // { a: 1, b: { c: 1 } }

  <!-- 修改引用数据类型值时，副本对应值跟着变化 -->
  obj1.b.c = 3

  console.log(obj1,'obj1')    // { a: 1, b: { c: 3 } }
  console.log(obj1_copy,'obj1_copy')    // { a: 1, b: { c: 3 } }
  ```

- **深拷贝**：开辟一个新的存储空间，`递归`拷贝源对象中的所有属性，生成的两个对象对应不同的地址，两者之间的变化互不影响
