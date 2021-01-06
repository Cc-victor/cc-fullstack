const dogs =new Map();
const friends = new Map();
friends.set('泽哥','拼多多嫖娼');
friends.set('支总','被炒鱿鱼');

// 遍历它 key value
friends.forEach((val,key) => console.log(val,key))
for(const [key,val] of friends){
    //解构
       console.log(key,val);
}


const [a,b] = [1,2];
const {}={"a":1,"b":2}  // 怎么解
console.log(a,b);
