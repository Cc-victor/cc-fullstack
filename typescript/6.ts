//数据是要类型化的
//拿着数据做一大波操作，为了不掉链子
interface User {
    name: string;
    age: number;
    occupation: string
    };
    interface Admin{
        name: string;
        age:number;
        role:string;
    }
    export type Person =User | Admin;//普通用户或管理员
// export type User = {
//     name: string;
//     age: number;
//     occupation?: string;
//     role?:string
// };

    export const users: User[] = [ // ts 类型的约束， 每个元素，满足
    {
      name: '黄志乾',
      age: 18,
      occupation: "Chimney sweep"
    },
    {
      name: "郑孝龙",
      age: 18,
      occupation: "Astronaut"
    },
    {
        name: "徐磊",
        age: 38,
        occupation: "Administrator"
      }
  ];

  export function logPerson(user: Person) {
    //很放心  满足User 上的定义
  console.log(`- ${user.name}, ${user.age}`);
  let additionalInformation:string;
  if((<Admin>user).role){
    additionalInformation=(<Admin>user).role;
  }else{
    additionalInformation=(<User>user).occupation;
  }
  console.log(`- ${user.name}, ${user.age},${additionalInformation}`);
}

console.log("Users:");
users.forEach(logPerson);