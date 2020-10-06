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
            app.get(key, get[key]);
        }
        for (const key in post) {
            app.post(key, post[key]);
        }
    })
}
module.exports = registerController;
