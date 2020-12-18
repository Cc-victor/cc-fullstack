// console.log('leetcode.必考之TwoSum')
//手写代码 js
/**
 * @author ysw
 * @date 20-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}  
 */
var twosum = function(nums, target) {
    // 1.暴力 一下
    for(let i=0;i<nums.length; i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                arr=[i,j];
            }
        }
    }

    
    return arr;
};
console.log(twosum([2,7,11,15],9))