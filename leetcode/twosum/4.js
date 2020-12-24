// const map = new Map();//es6新的数据结构，映射对象
// const cc =3;
// console.log(map.set(cc,cc+3));
// console.log(map.get(cc));
// console.log(map.has(cc));
// console.log(map.delete(cc));
// console.log(map.has(cc));

const twoSum = (nums,target)=>{
  let map=new Map();
  let res=[];
  nums.forEach((e,i)=>map.set(e,i));
//   console.log(map);
for(let i=0;i<nums.length;i++){
    let j=map.get(target-nums[i]);
    if(j && j!==i){
        res=[i,j];
        break;
    }
}
     return res;  
}
console.log(twoSum([2,7,11,15],9))