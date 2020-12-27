/**
 * @author ysw
 * @date 20-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}  
 */
// 箭头函数
 const twosum=(nums,target)=>{
    // console.log('两数相加')
    let map={};//JSON Object
    let res=[];
    //编写功能 一个函数完成 一个功能
    // nums.forEach((e,i) => {
    //     console.log(e,i);
    // });
    //es6更简洁
    //callback
    //for +执行功能
    nums.forEach((e,i)=>map[e]=i);//O(n)以空间换时间
    // console.log(map)
    //?
    for(let i=0;i<nums.length;i++){
        let j=map[target-nums[i]];// 没有 undefinded
        if(j&&j!==i){
            res=[i,j];
            break;
        }
    }
    return res;

 }
 console.log(twosum([2,7,11,15],9));