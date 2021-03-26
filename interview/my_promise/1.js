const createFlow = require('./flow')
const delay =  (ms) => new Promise((resolve) =>
setTimeout(resolve,ms));
// 一大波正在逼近
const subFlow = createFlow([
    ()=>delay(1000).then(()=>console.log('c'))
])
// 数组  sources.length
createFlow([
    ()=>console.log("a"),
    ()=>console.log("b"),
    subFlow,//函数里面嵌套函数  是闭包  采用递归 递归不是算法，是编程技巧   大问题分小问题的思路
    [
        ()=>delay(1000).then(() => console.log("d")),
        ()=>console.log("e")
    ]
]).run(() => {
    console.log("done")
})
//如果函数返回值是Promise实例
// 那么就是 链式调用 thenable
