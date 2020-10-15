var Controllers = require('../Controllers');
var articleService = require('../Service/ArticleServer');
var url = require("url");
var fs = require("fs")
var prefix = '/article';
var get = Controllers(prefix);
var post = Controllers(prefix);
var path = require("path");


get.add('/main',async function (req,res){
    console.log('/main 接入');
    //true表示截取到参数部分后
    //url.parse方法是返回url各段参数，参数是其query属性
   let {pagenum,pagesize} = url.parse(req.url,true).query;
//    console.log("路径参数为：",url.parse(req.url,true).query);
//    console.log("获取到的参数为：",pagenum,pagesize);
   var data = await articleService.getLatestArticlePage(pagenum,pagesize);
    res.send(data);

})

get.add('/html', async function(req,res){
    console.log("/html 接入");
    let {pagenum,pagesize} = url.parse(req.url,true).query;
    var data = await articleService.getCategoryArticlePage(pagenum,pagesize,'html');
    
        
    res.send(data);
})
get.add('/css',async function(req,res){
    console.log("/css 接入");
    let {pagenum,pagesize} = url.parse(req.url,true).query;
    var data = await articleService.getCategoryArticlePage(pagenum,pagesize,'css');
    res.send(data);
})
get.add('/js',async function(req,res){
    console.log("/js 接入");
    let {pagenum,pagesize} = url.parse(req.url,true).query;
    var data = await articleService.getCategoryArticlePage(pagenum,pagesize,'js');
    res.send(data);
})
get.add('/vue',async function(req,res){
    console.log("/vue 接入");
    let {pagenum,pagesize} = url.parse(req.url,true).query;
    var data = await articleService.getCategoryArticlePage(pagenum,pagesize,'vue');
    res.send(data);
})
get.add('/node',async function(req,res){
    console.log("/node 接入");
    let {pagenum,pagesize} = url.parse(req.url,true).query;
    var data = await articleService.getCategoryArticlePage(pagenum,pagesize,'node');
    res.send(data);
})
get.add('/interview',async function(req,res){
    console.log("/interview 接入");
    let {pagenum,pagesize} = url.parse(req.url,true).query;
    var data = await articleService.getCategoryArticlePage(pagenum,pagesize,'interview');
    res.send(data);
})
get.add('/content',async function(req, res){
    console.log("/content 接入");
    let {id} = url.parse(req.url,true).query;
    var data = await articleService.getArticle(id);
    for (const index in data) {
        if (data.hasOwnProperty(index)) {
            console.log(data[index]);
            var file = fs.readFileSync(path.join(__dirname,"..", "md", data[index].content));
            console.log(file.toString()); 
            var patt = /<div.*<\/div>/;
            data[index].content = file.toString().match(patt);
            
        }
    }

    res.send(data);
})

module.exports = {
    get: get.getMappings(),
    post: post.getMappings()
}