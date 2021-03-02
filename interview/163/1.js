//symbol
// Es6 引入的新的原始数据类型Symbol,表示独一无二的值
// var sym1=Symbol();
// var sym2=Symbol('foo'); //唯一的
// var sym3=Symbol('foo'); //1111
// console.log(sym2==sym3);
// console.log(typeof sym1); //symbol1
// 1. 函数来创建，原始数据类型 冲突的地方？ 如何说明
// 变量都是要分配内存空间的，原始数据类型 找分配
// 引用类型 堆
// Symbol(字符串)？ 字符串有何用？ 做一个 标识
// console.log(sym3.toString());
// 2. Symbol 有何用？
// 3.原子数据类型和复杂数据类型在用法上有什么区别？
// new Symbol() //Symbol is not a constructor 
//原始数据类型不能被实例化

// var mySymbol=Symbol();
// // var shapeType ={  //形状的类型
// //     triangle:'Triangle', // 三角形
// //     square:'Square', //正方形
// // }
// // 精神大条一些，甚至不用给值  偷懒
// var shapeType ={  //形状的类型
//     triangle:Symbol(), // 三角形
//     square:Symbol(), //正方形
// }

// function getArea(shape,options){
//     var area = 0;
//     switch(shape){
//       case shapeType.triangle:
//           area=0.5*options.width*options.height;
//       break;
//       case shapeType.square:
//         area=options.width*options.height;
//        break;
//     }
//     return area;
// }
// console.log(getArea(shapeType.triangle,{
//     width:100,
//     height:100,
// }))

// var s1 = Symbol('foo'); 
// console.log(s1 instanceof Symbol); //原始数据类型


// const obj ={
//     toString(){  //覆盖Object.prototype.toString()
//         return 'abc'
//     }
// }
// const sym = Symbol(obj)

// console.log(sym.toString());

// var sym = Symbol("My symbol");
// console.log("your symbol is" + sym); //Cannot convert a Symbol value to a string
//                                       //                               at Object.
//symbol 可以用于 json object 添加 key 表示唯一
// symbol 作为json 的Key 第二种引用场景
var obj={};
var a = Symbol();   // 可以用于 json object 添加key
var b=Symbol();

obj[a]= 'Hello';// 偷懒
obj[b]='world';
obj.cc='cc'; // 常规做法 取个名字

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[a]);

for(let key in obj){
    console.log(obj[key])
}
Object.getOwnPropertySymbols(obj).forEach(item=>{
    console.log(obj[item]);
})