function Cat(name,color){
    //new 的时候一定会执行Cat
    this.name=name;   //this？指向实例
    this.color=color;
}
//原型对象
Cat.prototype.eat=function(){
    console.log('老鼠');
}
Cat.prototype.type='猫科动物';
//实例化
//new 的执行过程
var cat1=new Cat("支总","黄毛");
var cat2=new Cat("支二狗","绿毛");
var cat3=new Cat("支三鼠","紫毛");


console.log(cat1.constructor == cat2.constructor);   //构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);
cat1.Cat();