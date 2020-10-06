var articleDao = require("../Dao/ArticleDao");

async function getLatestArticlePage(pageNum,pageSize){
    var data = 666;
    data = await articleDao.findAllByctimeDesc({pageNum,pageSize});
    // console.log("在service",data);
    return data;
}
module.exports = {
    getLatestArticlePage
}
