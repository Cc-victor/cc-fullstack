import {MemberEntity} from  '../model/members';
import Axios,{AxiosResponse} from 'axios';
// 后台前缀基本一样
const githubURL = "https://api.github.com";
//业务API不要去请求写一样的前缀
const githubMembersUrl = `${githubURL}/orgs/lemoncode/members`;

export const  getMembersCollectton = ():Promise<MemberEntity[]> =>{
    //我在我的项目里使用 try catch 处理了网络请求错误
    return  new Promise((resolve,reject)=>{
      try{
          Axios
        .get<MemberEntity[]>(githubMembersUrl)
        .then(response=>{
            resolve(mapMemberListApiToModel(response))
        })
        // .catch((error)=>{reject(error)})   
        }catch(error){
            reject(error)
        }
    })
}
// ts 无法推导类型的就会报错
const mapMemberListApiToModel =({
    data
}:AxiosResponse<MemberEntity[]>):MemberEntity[]=>data.map(githubMember => ({
    id:githubMember.id,
    login:githubMember.login,
    avatar_url:githubMember.avatar_url
}))