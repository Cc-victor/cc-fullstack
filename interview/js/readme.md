# 相信奇迹的人，本身就是一个奇迹
# 把面试题当成高考题
  1. 以题目来检验下当前js之所学  推动之
     黄冈中学 出试卷的 
  2. 衡水一中 
     清北方法论


    打卡  课后的任何事情  
    2. 能力增长点
    JS能力  

- null 和 undefined 的区别是什么
  Obiect.prototype._proto__ == null



  Undefined 意思是类型， 当一个声明了一个变量未初始化时，得到的是undefined
   1.箭头函数和普通函数不一样
   es5 时代的arguments 有用的
     不只是便利，有的地方也被干掉了 arguments
     () => {} function () {} 都可以省掉arguments 但是es6里提供了 reset 运算符 ...
     function() {}
2. Object的原型对象
new Object()
Object(函数).prototype 
父（原型）对象
Object(函数).prototype.__proto__
为什么？ 到顶了，不该有原型
null 此处没有对象，不该有值
跟禅宗一样，充满着智慧

- 选择元素 可以通过标签、ID、选择器（）、类名、子元素（），
   任何元素都有这些方法，不仅限document
           1.找到所有的.box元素有什么方法？
             通过ID获取（getElementById）
             通过name属性（getElementsByName）
             通过标签名（getElementsByTagName）
             通过类名（getElementsByClassName）
             通过选择器获取一个元素（querySelector）
             通过选择器获取一组元素（querySelectorAll）
             获取html的方法（document.documentElement）
             document.documentElement是专门获取html这个标签的
             获取body的方法（document.body）
             document.body是专门获取body这个标签的。
