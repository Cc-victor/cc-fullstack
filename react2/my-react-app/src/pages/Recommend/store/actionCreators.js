// 跟API 通信的地方
import  { getBannerRequest } from '../../../api/request'


// com useEffect  -> action ->api then -> dispatch(action-type)-> reducer -新的值
export const changeBannerList = (data) => ({
    type:'CHANGE_BANNER',
    data:data
})

export const getBannerList  = () =>{
    return (dispatch) => {
        getBannerRequest()
        // store reducer 得到消息
        .then(data => {
            //dispatch 是有格式的
            console.log(data,"||||||||")
            dispatch(changeBannerList(data.banners))
        })
    }
}