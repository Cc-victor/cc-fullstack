const climbStairs= function(n){
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    return climbStairs(n-1)+climbStairs(n-2);
}
//递归的算法 

console.log(climbStairs(99))