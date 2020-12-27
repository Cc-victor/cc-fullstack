function Cat(name,color){
    this.name=name;   //this？指向实例
    this.color=color;
}

//实例化
var cat1=new Cat("支总","黄毛");
var cat2=new Cat("支老二","绿毛");
var cat3=new Cat("支三狗","紫毛");


console.log(cat1.constructor == cat2.constructor);   //构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);
