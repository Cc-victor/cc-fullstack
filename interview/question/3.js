var a =0xa;  //16进制
console.log(typeof a);
var b=010; // 8 进制
var c=0b01; // 2进制
console.log(c+3)// 十进制
console.log(b+19) //十进制
console.log(0.1+0.2) //0.30000000000000004 
                     //  JS 浮点数不精确 0.3
                     //JS 没有浮点数类型 所有的JS类型都是Number类和包装类
                     //不适合计算
                     //JS 转成二进制的时候，它会无限循环 32 舍弃一些位
                     //然后用 它们的二进制位相加 不准确
console.log((0.1).toString(2));  //toString 传进制数
console.log((8).toString(8));

console.log(Number.parseInt('010',8));
console.log(Number.parseInt('20',2));//结果是 NaN  把字符串转换成整数
//跟什么相关？ 上溢  大数字 BigInt
// JS Number类型只能安全的表达 -9007199254740991(-2(^53-1))
console.log(9999999999999999999n); //10000000000000000000
console.log(9007199254740992n === 9007199254740993n);
console.log(10+10n);// 不能和BigInt 混合使用  会报错