// 有哪些情况会是undefined?
let a; // 声名， 没有赋值
// 变量声明时，JS类型由值来决定
console.log(typeof a);  //undefined 1
//undefined 2 函数没有返回值
const fnNoReturn =() =>{}
console.log(fnNoReturn(),'2');
//参数不传值 unfined 3
const fn = (b) =>{
    //函数一运行就会有的 this  ->指针对象，指向一个对象
    console.log(arguments);
    console.log(typeof b);
}
console.log(fn(1,2,3));
//当对象调用不存在的属性时，会返回undefined 4
const o={c:'1'};
console.log(o.d,'4');
console.log(zg);