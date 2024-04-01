var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

        // Close the connection
        con.end(function (err) {
            if (err) throw err;
            console.log("Connection closed.");
        });
    });
});