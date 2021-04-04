import * as types from './action-types'
import {combineReducers} from 'redux'
//reducer 状态数的一个分支，一个状态数据模块

const goods =(state=[],action) =>{
     const {type,payload}=action
     switch(type) {
        case types.DECREMENT_INVENTORY:
            return state.map(good => (
                goods.id === payload.id && good.inventory>0
                ?{...good,inventory:--good.inventory}
                :good
            ))
        case types.CLEAN_SHOPCART:
         let sessionGoods = JSON.parse(sessionStorage.getItem('goods'));   
         //sessionStorage存储数据，关闭后数据丢失 
         for (let i=0;i<sessionStorage.length;i++){
             let item = sessionStorage[i];
             let index = state.findIndex((value)=>item.id===value.id)
             state[index].inventory+=item.count
         }
            return
        case types.ADD_GOODS:
           //返回新的state状态
           return state.concat(payload.goods)
        default:
             return state
     }
}

const shopCart  =(state=[],action) =>{
    const { type,payload } =action;
    switch(type){
        case types.ADD_SHOPCARE:
            //第一次的话  新增就好
            //第二次找到那个商品  数量再加一
            // goods types.DECREMENT_INVENTORY -1
        default:
            return state
    }
}

export default combineReducers({
    goods,
    shopCart
})
