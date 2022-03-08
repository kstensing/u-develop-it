const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
//console.log(process.env);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MIGHT NEED TO CHANGE THIS?
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'election'
    },
    console.log('Connected to the election database.')
)

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });