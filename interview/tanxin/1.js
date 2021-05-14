var findContentChildren = function(g,s){
    if(g.length === 0 || s.length === 0){
        return 0
    }

    g.sort(function(a,b){return a-b})
    s.sort(function(a,b){return a-b})

  let i=0,j=0;
  while(i<g.length && j<s.length){
      if(s[j]>=g[i]){
          i++
      }
      j++
  }
   return i
} 
