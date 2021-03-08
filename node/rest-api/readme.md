# api  Restful
前端和后端交流的接口
mongodb 存的数据是 json 文档
mongodb 存的数据是json 文档
mysql 关系型 table
- 网站中 ，一切皆资源, 资源用URL访问
 http://localhost:3000/posts 
- HTTP 动词一起来构建 访问资源的语义  
 GET http://localhost:3000/posts  所有的评论
 http://localhost:3000/posts?id=1 （传统的URL）  
 GET http://localhost:3000/posts/:id 一条评论
- 语义化的URL，语义化的HTML标签 header footer main
  url 有没学的，设计的
- 谓语动词  GET POST DELETE 改？ 对资源的处理
新增一条post,怎么设计URL 
url http://localhost:3000/posts 资源
新增一条资源  Restful 写的不是代码 ，只是大自然的搬运工
POST 动作语义，新增一条资源
DELETE 
修改用哪个语义？ PUT? PATCH ?
PUT PATCH 的区别是？
PUT 修改的意思 拿一个对象整个替换掉，替换
PATCH 拿新的对象和旧的对象作比较，打补丁


http://localhost:3000/posts/3
如何找  通过写代码中 查数据库，技术问题
Restful 是一个概念  数据库里的所有posts
http://localhost:3000/posts/
GET |PUT|PATCH|DELETELPOST    http://localhost:3000/posts/3 第三条
GET |PUT|PATCH|DELETELPOST 是对资源的访问及处理的完美URL设计


