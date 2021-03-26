

type FunctionProps = {
    //omSomething 函数  参数+返回值
    onSomething: ()=>void;
    // input num 
    onChange: (id:number)=>void;
    //@types/react   泛型如何去做这件事呢？
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}

//  T 类型的占位
type Dog<T> = {name:string,type:T}
const dog:Dog<number> = {name:'wewe',type:2222}
React.MouseEvent<HTMLButtonElement>

interface Props{

}

const Item:React.FC<Props> =(props) =>{
   return(
       <div>
       </div>
   )
}