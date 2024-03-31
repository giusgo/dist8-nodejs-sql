// MySQL driver
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

function createDatabase() {
    return new Promise((resolve, reject) => {
        con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
            if (err) reject(err);
            console.log("Database created or already exists.");
            resolve();
        });
    });
}

function useDatabase() {
    return new Promise((resolve, reject) => {
        con.query("USE mydb", function (err, result) {
            if (err) reject(err);
            console.log("Database selected.");
            resolve();
        });
    });
}

function createTable() {
    return new Promise((resolve, reject) => {
        var sql = "CREATE TABLE IF NOT EXISTS mytable (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) reject(err);
            console.log("Table created or already exists.");
            resolve();
        });
    });
}

con.connect().then(() => {
        console.log("Connected!");
        return createDatabase();
    })