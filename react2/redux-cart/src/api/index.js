const goods = [
    {
        name:'iphone',
        price:5000,
        inventory:5,
        id:1
    },
    {
        name:'华为N123',
        price:17300,
        inventory:2,
        id:2
    },
    {
        name:'cart',
        price:10000,
        inventory:3,
        id:3
    },
    {
        name:'apple',
        price:50,
        inventory:10,
        id:4
    },
]

export default {
    //  cb? api 交给 action 调用
    //action 里的 同步修改状态的action
    getProducts:(cb,) => setTimeout(cb(goods),1000)
}