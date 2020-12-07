var Controllers = require('../Controllers');
var articleService = require('../Service/ArticleServer');
var url = require("url");
var fs = require("fs");
var path = require("path");
// const multer = require('multer'); // v1.0.5
// const imgUpload = multer({ dest: 'page/img/uploads' }); // for parsing multipart/form-data
var prefix = '/uploads';
var get = Controllers(prefix);
var post = Controllers(prefix);



// post.add('/img',imgUpload.single("imgs"),function(req,res){
//     console.log("得到了文件：",req.file.filename);
//     res.json( host + '/img/uploads/' + req.file.filename );

// })

// app.post('/upload',upload.single("uploads"),function(req,res){
//     console.log(req.file.filename);//上传后的文件名 4cda9a24cb20dd55241a619f10848982

//     console.log(req.file.mimetype);//文件mime类型 text/plain
//     console.log(req.file.originalname);//文件原本的名字 自我介绍.txt
//     console.log(req.file.path);//上传到的路径 uploads\4cda9a24cb20dd55241a619f10848982

//     console.log(req.file.size);//文件大小 950
//     console.log(req.file.stream);//undefined...
//     res.send(req.file.path);
// })
module.exports = {
    get: get.getMappings(),
    post: post.getMappings()
}