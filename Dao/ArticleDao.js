
var db = require('./dbutil');

async function findAllByctimeDesc(pageNum, pageSize) {
    --pageNum;
    var sql = `select id,title,views,tags,ctime,utime,summary,url from blog order by ctime desc limit ${pageNum * pageSize},${pageSize}`;
    console.log("sql:",sql);
    return await queryBySQL(sql);

}

async function findByCategoryDesc(pageNum, pageSize, category){
    --pageNum;
    var sql = `select id,title,views,tags,ctime,utime,summary,url from blog where tags = '${category}' order by ctime desc limit ${pageNum * pageSize},${pageSize}`;
    console.log("sql:",sql);
    return await queryBySQL(sql);
}

async function findById(id){
    var sql = `select id,title,views,tags,ctime,utime,content from blog where id = ${id} `;
    console.log("sql:",sql);
    return await queryBySQL(sql);
}

function queryBySQL(sql){
    var connection = db.createConnection();
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
    findAllByctimeDesc,
    findByCategoryDesc,
    findById
}