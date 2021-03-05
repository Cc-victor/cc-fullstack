// let a=[1,2,3];
// // console.log(a.shift());
// // && 与运算
// a.join=a.shift; // 其中一种
// 变成对象   第二种方法
// const a={
//     i:0,
//     valueOf:function(){return ++this.i}
// }
const a={
    value:[3,2,1],
    valueOf:function(){return this.value.pop()}
}
console.log(a==1 && a==2 && a==3)  // 结果 true