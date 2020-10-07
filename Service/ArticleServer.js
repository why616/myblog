var articleDao = require("../Dao/ArticleDao");

async function getLatestArticlePage(pageNum,pageSize){
    var data = 666;
    data = await articleDao.findAllByctimeDesc(pageNum,pageSize);
    // console.log("在service",data);
    return data;
}
async function getCategoryArticlePage(pageNum,pageSize,category){
    var data = 666;
    data = await articleDao.findByCategoryDesc(pageNum,pageSize,category);
    // console.log("在service",data);
    return data;
}
async function getArticle(id){
    var data = 666;
    data = await articleDao.findById(id);
    // console.log("在service",data);
    return data;
}
module.exports = {
    getLatestArticlePage,
    getCategoryArticlePage,
    getArticle
}
