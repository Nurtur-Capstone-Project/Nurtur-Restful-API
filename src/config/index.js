require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
};

module.exports = config;
