var Express = require("express");
// var globalConfig = require("./config");
var loader = require("./loader");
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer({ dest: './uploads/' }); // for parsing multipart/form-data
const cookie = require('cookie-parser'); 
const fs = require('fs');
const path = require('path');

var app = Express();

app.use(cookie());
app.use(Express.static("page"));
// app.use("/uploads/",Express.static("uploads"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

loader(app);

app.post('/upload',upload.single("uploads"),function(req,res){
    console.log(req.file.filename);//上传后的文件名 4cda9a24cb20dd55241a619f10848982

    console.log(req.file.mimetype);//文件mime类型 text/plain
    console.log(req.file.originalname);//文件原本的名字 自我介绍.txt
    console.log(req.file.path);//上传到的路径 uploads\4cda9a24cb20dd55241a619f10848982

    console.log(req.file.size);//文件大小 950
    console.log(req.file.stream);//undefined...
    res.send(req.file.path);
})
// console.log(path.join(__dirname, "page", "index.html"));

app.get('/*',function (req,res) {
   console.log(req.url,"接入，获取vue");
    var page = fs.readFileSync(path.join(__dirname, "page", "index.html"));
    res.status(200).set({
        "Content-Type": "text/html; charset=utf-8"
    });
    res.send(page);

})
app.listen(8888);
console.log("服务已开启...");