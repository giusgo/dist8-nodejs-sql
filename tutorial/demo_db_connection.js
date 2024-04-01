var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // Close the connection
    con.end(function (err) {
        if (err) throw err;
        console.log("Connection closed.");
    });
});