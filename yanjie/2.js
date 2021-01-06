function duplicateCount(text) {
    //Map  JSONObject
    let map={}
    let count=0;
    for(let i = 0;i<text.length;i++){
        let char =text[i];
        if(char in map){
            count++
        }else{
            map[char]=1
        }
    }
    return count;
}
console.log (duplicateCount('aaddsfewsf'));