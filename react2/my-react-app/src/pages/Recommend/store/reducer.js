let defaultState = {
    bannerList:[]
}
//reduce
//动态页面，从一个状态到另一个状态的过程
// {type:'',data:''}  
export default (state = defaultState,action) =>{
    switch(action.type) {
        case "CHANGE_BANNER":
            //新的状态
            return {
                ...state,
                bannerList:action.data
            }
        default:
            return state
    }
}