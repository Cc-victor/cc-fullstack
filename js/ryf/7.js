//  阮一峰面向对象第二篇
function Animal(name) {
    console.log(arguments,'---------');
    this.name=name;
    this.species="动物";
}
//Animal ->function
// 函数是一等对象 Object()
// 拿到函数的原型链上的方法，靠它
// console.log(Animal.__proto__.__proto__);
function Cat(name,color){
    // 拿到Animal的属性，归Cat所有呢？
    // call  借用一下Animal，并且指定内部的this 为当前的this
    //   Animal.call(this);
    // console.log(arguments);
      Animal.apply(this,arguments);
    Animal.call(this,name,color);
    //   this.name=name;
      this.color=color;
}
 var cat1=new Cat("大毛","黄色");
 console.log(cat1);
// 猫应该是Animal 的子类  面向对象的继承