const getUserInfoWidthTs = (user:{name:string,age:number}):string =>`name:${user.name}age:${user.age}`;

console.log(getUserInfoWidthTs({name:'koala',age:21}))