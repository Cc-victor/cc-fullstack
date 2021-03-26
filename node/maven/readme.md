- 全栈  node+ts
   BATJTMD
- 数据库
   端口之间的通信  3306 -> 3000
   node fs http 比较复杂 慢

- MVC
   数据库 -> Model -> controller -> Router(API)
   post 
   someone -> http -> req(url) -> router -> controller -> Model -> mysql2(翻译官)

- posts add 
   controller -> restful 路径
   mysql post  POST   /posts
   - router 在哪里  迎宾
   - controller  丈母娘 
   - model   service   彩礼

- 单点入口


CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


- mysql 先建表 再操作  关键性数据库  SQL
    mongodb  先上车，后补票 NOSQL