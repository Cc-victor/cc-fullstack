function duplicateCount(text){
    var str =text.toLowerCase().split('').sort().join('');
    var arr= str.match(/(-)\1+/g);
   console.log(arr);
   if(arr==null) return 0;
   else return arr.length; 
}

   