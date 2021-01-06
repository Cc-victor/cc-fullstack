function duplicateCount(text) {
    var str =text.toLowerCase().split('').sort().join('');
    //请得到所有的数字
     var text  ='123-456-666'
    // /\d+/  正则  判断字符串是否符合规则
    // console.log(/\d+/.test(text));
    // console.log(text.match(/\d+/g));
    // 相邻的字符是一样的，
    // \d 数字    ，[] 表示取值范围
    // \n  表示之前匹配到的第几个小组
    // ([a-z])\1   \1 找相同的字符
    // var arr = str.match(/([a-z])\1+/g); 
    // var arr = str.match(/([^])\1+/g); // "/1"代表第一个单元
    var arr = str.match(/(.)\1+/g);
    // console.log(arr)
    return arr;
}
console.log(duplicateCount('aaaddsjwidj'))