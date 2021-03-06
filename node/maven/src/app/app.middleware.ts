import {Request,Response,NextFunction, request} from 'express'
export const  defaultErrorHandler =(
    error:any,
   request:Request,
   response:Response,
   next:NextFunction
)=>{
   if(error.message){
       console.log(error.message,'-------')
   }
   let statusCode:number,message:string;
   /**
    * 处理异常
    */
   switch(error.message){
       case 'PASSWORD_IS_REQUIRED':
           statusCode=400;
           message = '请求提供密码';
           break;
       case 'USER_ALREADY_EXIST':
         statusCode=409;
         message='用户名已被占用';
         break;
       case 'USER_DONES_NOT_EXIT':
           statusCode=400;
           message='用户不存在';
       case 'USER_DOESNOT_OWN_PESOURCE':
           statusCode=403;
           message='您不能处理内容';
       case "NOT_FOUND":
           statusCode=404;
           message='没找到'
       case 'NAME_IS_REQUIRED':
         statusCode=400;
         message='请提供用户名';
         break;
       case 'UNAUTHORIZED':
        statusCode=401;
        message="请先登录"
      default:
        statusCode=500;
        message='运维小哥哥正在。。。。';
        break;
   }
   response.status(statusCode).send({message}) 
}