import  React, { useEffect, useState } from 'react';
import {MemberEntity} from '../model/members';
import {getMembersCollectton} from '../api/memberApi';

const  MemberTableComponent =()=>{
   const [members,setMembers]=useState([])
   useEffect(()=>{
      getMembersCollectton()
       .then(data => {
           console.log(data)
       }) 
   },[])
   return (
    <h2>支狗傻逼啊</h2>
   )
}


export default MemberTableComponent