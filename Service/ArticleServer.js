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
async function addNewArticle(title,summary,content,category){
   var res = articleDao.insertArticle(title,summary,content,category);
   return res? {state:'ok',msg:'文章添加成功'}:{state:'error',msg:'添加失败'};
}
module.exports = {
    getLatestArticlePage,
    getCategoryArticlePage,
    getArticle,
    addNewArticle
}
