const maopao =arr=>{
    let len=arr.length
    if(len<=1) return
    // for(let i=0;i<len-1;i++){
    //     for(let j=0;j<len-i-1;j++){
    //         if(arr[j]>arr[j+1]){
    //             const temp = arr[j]
    //             arr[j]=arr[j+1]
    //             arr[j+1]=temp
    //         }
    //     }
    // }
    //优化
    for(let i=0;i<len-1;i++){
        let swapped=false,temp;
        for(let j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                 temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                swapped=true
            }
        }
        if(swapped = false){
            return 
        }
    }
    return arr
}

console.log(maopao([2,3,1,7,3,4,1,8,5]))