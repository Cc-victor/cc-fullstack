import React,{useEffect}  from 'react';
import {connect} from 'react-redux'
import * as actionTypes from './store/actionCreators'

function Recommend(props) {
    // console.log(props.bannerList,'------------')
    useEffect(()=>{
        props.getBannerDataDispatch()
    }, [])
    return (
        <div>Recommend</div>
    )
}

const mapStateToProps =(state) =>{
    return{
        bannerList:state.recommend.bannerList
    }
}
const  mapDispatchToProps = (dispatch) => {
    return  {
        getBannerDataDispatch(){
            dispatch(actionTypes.getBannerList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recommend)