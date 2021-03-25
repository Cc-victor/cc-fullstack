import {PostModal} from './post.model' 
/**
 * 新增文章
 */

export const  createPost = (post:PostModal) =>{
    const statement = `
    INSERT  INTO post
    SET?
    `
}