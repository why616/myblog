var fs = require("fs");
var path = require("path");
var Controllers = require("./Controllers");
var files = fs.readdirSync(__dirname+"/Controller");

function registerController(app){
    files.forEach((v,i) =>{
        var set = require("./Controller/"+v);
        var get = set.get;
        var post = set.post;
        for (const key in get) {
            console.log("已配置get：",key);
            app.get(key, get[key]);
        }
        for (const key in post) {
            console.log("已配置post：",key);
            app.post(key, post[key]);
        }
    })
}
module.exports = registerController;
