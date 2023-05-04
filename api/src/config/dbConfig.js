import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
    host: "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
};

export default dbConfig;