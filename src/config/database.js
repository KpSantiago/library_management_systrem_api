require('dotenv').config();
const { POSTGRES_URL, POSTGRES_USER, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_DATABASE } = process.env

module.exports = {
    dialect: 'postgresql',
    database: POSTGRES_DATABASE,
    host: POSTGRES_HOST,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    url: POSTGRES_URL,
    define: {
        timestamp: false,
        underscored: true
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
}