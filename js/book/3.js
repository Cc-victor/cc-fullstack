class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
Object.assign(Point.prototype,{
    toString(){},
    toValue(){}
})
const o=new Point(1,2);
// console.log(Object.getOwnPropertyNames(o))
console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(Object.keys(Point.prototype));
console.log([...Object.getOwnPropertyNames(o),...Object.keys(o.__proto__),
    ...Object.keys(o.__proto__.__proto__)])

    const getAllProperties =(o) =>{
     const arr =Object.getOwnPropertyNames(o);
     let p=o._proto_;
     let res=[...arr];
     while(p){
        const keys=Object.keys(p);
        for(let key in keys){
            res.push(key);
        }
         p=p._proto_;

     }
    //  console.log(res);
    //  return [...res];
     return res;
    }
    console.log(getAllProperties(o));