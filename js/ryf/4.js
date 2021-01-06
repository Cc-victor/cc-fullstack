// 函数是天生可以复用的
//var Cat={
//    name:'',
//    color:'',
// }
function Cat(name,color){
//  console.log(name,color)
    return{
     name,
     color
 }
}
var cat1=Cat("支老大","黄色");
var cat1=Cat("支老二","黑色");
var cat1=Cat("支三狗","紫色");