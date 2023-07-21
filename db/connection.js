// const mysql = require('mysql2');
import mysql from 'mysql2';
// setup our connection cofiguration
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Buggy123$",
    database: "employees_db"
});

connection.connect(function(error) {
    if(error) {
        throw error;
    }
});

//module.exports = { connection };
export default connection;