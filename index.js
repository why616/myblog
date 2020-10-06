var Express = require("express");
var globalConfig = require("./config");
var loader = require("./loader");
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer({ dest: './uploads/' }); // for parsing multipart/form-data
const cookie = require('cookie-parser'); 

var app = Express();

app.use(cookie());
app.use(Express.static("page"));
app.use("/uploads/",Express.static("uploads"));

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

app.listen(8888);