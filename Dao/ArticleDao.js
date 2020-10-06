var db = require('./dbutil');

function findAllByctimeDesc({ pageNum, pageSize }) {
    var connection = db.createConnection();
    --pageNum;
    var sql = `select id,title,views,tags,ctime,utime,summary from blog order by ctime desc limit ${pageNum * pageSize},${pageSize}`;
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, res) {
            if (err) {
                // console.log(err);
                reject(err);
                throw new Error("数据库错误：", err);
            } else {
                // console.log("OK");
                resolve(res);
            }
        });
    })

}

module.exports = {
    findAllByctimeDesc
}