import mysql from 'mysql2';//mysql 配置
import {} from '../app.config';
import {
    MYSQL_DATABASE,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER
} from '../app.config'



export const connection = mysql.createConnection({
    host:MYSQL_HOST,
    port:parseInt(MYSQL_PORT),
    user:MYSQL_USER,
    password:MYSQL_PASSWORD,
    database:MYSQL_DATABASE
})