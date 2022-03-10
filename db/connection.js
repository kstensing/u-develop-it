const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    // MIGHT NEED TO CHANGE THIS?
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'election'
},
console.log('Connected to the election database.')
);

module.exports = db;