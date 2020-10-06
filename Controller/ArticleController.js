var Controllers = require('../Controllers');
var articleService = require('../Service/ArticleServer');
var url = require("url");

var prefix = '/article';
var get = Controllers(prefix);
var post = Controllers(prefix);

get.add('/main',async function (req,res){
    //true表示截取到参数部分后
    //url.parse方法是返回url各段参数，参数是其query属性
   let {pagenum,pagesize} = url.parse(req.url,true).query;
//    console.log("路径参数为：",url.parse(req.url,true).query);
//    console.log("获取到的参数为：",pagenum,pagesize);
   var data = await articleService.getLatestArticlePage(pagenum,pagesize);
    res.send(data);
})

get.add('/html',function(req,res){
    

})
get.add('/css',function(req,res){
    
})
get.add('/js',function(req,res){
    
})
get.add('/vue',function(req,res){
    
})
get.add('/node',function(req,res){
    
})
get.add('/interview',function(req,res){
    
})

module.exports = {
    get: get.getMappings(),
    post: post.getMappings()
}