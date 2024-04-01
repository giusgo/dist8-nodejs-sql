var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");

        // ALTER TABLE
        var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table altered");

            // Close the connection
            con.end(function (err) {
                if (err) throw err;
                console.log("Connection closed.");
            });
        });
    });
});

