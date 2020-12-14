
var db = require('./dbutil');

async function findAllByctimeDesc(pageNum, pageSize) {
    --pageNum;
    var sql = `select id,title,views,tags,ctime,utime,summary,url from blog order by ctime desc limit ${pageNum * pageSize},${pageSize}`;
    console.log("sql:",sql);
    return await queryBySQL(sql);
}
async function findAllCount(){
    var sql = `select count(id) total from blog`;
    console.log("sql:",sql);
    return await queryBySQL(sql);
}


async function findByCategoryDesc(pageNum, pageSize, category){
    --pageNum;
    var sql = `select id,title,views,tags,ctime,utime,summary,url from blog where tags = '${category}' order by utime desc limit ${pageNum * pageSize},${pageSize}`;
    console.log("sql:",sql);
    return await queryBySQL(sql);
}

async function findById(id){
    var sql = `select id,title,views,tags,ctime,utime,summary,content from blog where id = ? `;
    var addViewsSql = 'update blog set views = views + 1 where id = ? ';
    console.log("sql:",sql);
    console.log("addsql",addViewsSql);
    queryBySQL(addViewsSql,[id]);
    return await queryBySQL(sql,[id]);
}
async function insertArticle(title,summary,content,category){
    var sql = `insert into blog (title,summary,content,tags,views,ctime,utime) values ('${title}','${summary}',?,'${category}',0,now(),now()) `;
    console.log("sql:",sql);

    var ret = await queryBySQL(sql,[content]);
    console.log(ret);
    sql = `update blog set url = '/sort/${category}/${ret.insertId}' where id = ${ret.insertId}`;
    ret = await queryBySQL(sql);
    console.log('insert:',ret);
    
    return true;
    //  await queryBySQL(sql);
}
async function updateArticle(...params){
    var sql = `update blog set title=?,summary=?,content=?,tags=?,utime=now() where id = ?`;
    return await queryBySQL(sql,params);
}

function queryBySQL(sql,params){
    params = params || [];
    console.log("params: ",params);
    var connection = db.createConnection();
    return new Promise((resolve, reject) => {
        connection.query(sql,params, function (err, res) {
            if (err) {
                console.log(err);
                reject(err);
                throw new Error("数据库错误：", err);
            } else {
                // console.log("OK");
                // console.log(res);
                resolve(res);
            }
        });
    })
}
module.exports = {
    findAllByctimeDesc,
    findByCategoryDesc,
    findById,
    insertArticle,
    findAllCount,
    updateArticle
}