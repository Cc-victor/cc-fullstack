- 阮一峰

1. JS变量的数据类型由值来决定
   常量的话。 ES6以前没有常量 var
   - 类型不可以改变
   - 简单类型的值不可变，复杂数据类型的值是可以改变的
   - 数据类型分为： 数值型、字符串、布尔值、undefined、null、symbol、对象（数组、函数）



2. typeof[1,2,3] 如何知道是数组？
   区分简单数据类型和复杂数据类型
   复杂数据类型之中 function
   typeof 可以正确（细致）得到数据类型的
   number string Boolean null undefin symbol object（array，function)



3. Object.prototype.toString.call()核心
   Object 是谁？ 所有对象的原型对象？这种机制怎么构建起来？
   prototy啥玩意

  call 向父类借用

-  call apply 借用方法  fn.call(绑定this,参数1，参数2，.....)
                        fn.apply(绑定this，[参数1，参数2，.....])

  ## 继承的几种方式

   1. 构造函数绑定  
   2. prototype模式 
   3. 直接继承prototype
   4. 利用空对象作为中介

   2跟3 ， 3的优点效率比较高（不用执行和建立Animal的实例了）Cat.prototype和Animal.prototype指向同一个对象，
   在理解上有点不妥  会改变父类的原型对象
