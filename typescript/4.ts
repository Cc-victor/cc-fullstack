type IUserInfoFunc =(user:IUser) =>string
interface IUser{
    name:string;
    age:number;
}

const getUserInfoWidthType:IUserInfoFunc=(user)=>{
    return `name:${user.name},age:${user.age}`
}
getUserInfoWidthType({name:"koala",age:18})