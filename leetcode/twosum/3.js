const numbers=[3,62,234,7,23,74,23,76,92];
const arr=[];
// const largeNumbers=numbers.forEach(function(e,i) {
//         if(e>70){
//             arr.push(e);

//         }
// });
//filter在forEach基础上
//filter内置函数
// const cb=number=>{
//     return number>70
// }
// const largeNumbers=numbers.filter(cb);

// console.log(largeNumbers);
const cb=number=>number>70
const largeNumbers=numbers.filter(cb);

console.log(largeNumbers);