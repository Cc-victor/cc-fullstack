// user 类型  Object  name age 
const getUserInfo = function (user) {
    // console.log(Object.keys(user).includes('name'))
    if(!user || typeof user != 'Object' || !Object.keys(user).includes("name") || !Object.keys(user).includes("age")){
    //里面有 name age
      throw new Error('参数错误')
    }
     return `name:${user.name},age:${user.age}`  
}
// console.log(getUserInfo({name: 'koala',age:'10'}))
// 有什么问题？
console.log(getUserInfo())
//限制一下这种随意性？