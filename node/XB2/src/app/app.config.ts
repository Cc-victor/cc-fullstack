import dotenv from 'dotenv';
dotenv.config();

console.log(process.env);

//SET PROT  =1234 && node app.js cross-env
export const { APP_PORT } = process.env;//?

export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
}= process.env

