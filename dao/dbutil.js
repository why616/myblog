var mysql = require("mysql");


function createConnection(){
    // console.log("开始链接");
    var connection = mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "Wanghaiyun1!",
        database: "myblog"
    });
    connection.connect();
    // console.log("完成链接");
    return connection;
}

module.exports = {createConnection};