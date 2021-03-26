class Cat<T>{
    private type:T
    constructor(type:T){
        this.type = type
    }
}

// 类型不确定 需要动态的给定时
const  cat:Cat<number> = new Cat(20)