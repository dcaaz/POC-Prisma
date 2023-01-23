import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const connectionDB = new Pool({
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

export {
    connectionDB
}
