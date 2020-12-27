/**
 * @author 支总叫我去嫖娼
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */
const isTypeof = (o,type) =>{
    //打补丁 判断
    if(['number','boolean','function','string'].indexOf(type)>0)
    {  
    return  typeof o ===type      //number string.....
    }
    
    //   console.log(typeof o)
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0
    
}
let a=null;
// let a=()=>{}
// let a="hello"
// let a=true;
// let a;
// let a=null;//宁缺
//null array 是有问题的
// console.log(typeof a);
console.log(isTypeof(a,'null'))