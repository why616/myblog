var Express = require("express");
// var globalConfig = require("./config");
var loader = require("./loader");
const bodyParser = require('body-parser');
const cookie = require('cookie-parser'); 
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const imgUpload = multer({  
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'page/img/uploads/');
        },
        filename: function (req, file, cb) {
            var changedName = (new Date().getTime())+'-'+file.originalname;
            cb(null, changedName);
        }
    })
}); 
var app = Express();

app.use(cookie());
app.use(Express.static("page"));
// app.use("/uploads/",Express.static("uploads"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});

loader(app);

var host = 'http://127.0.0.1:8888';
app.post('/uploads/img',imgUpload.single("imgs"),function(req,res){
    console.log("得到了文件：",req.file.filename);
    res.send( host + '/img/uploads/' + req.file.filename );
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