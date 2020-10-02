var path = require('path')
var express = require('express')

var app = express();

app.use(express.static('./page/'));

app.listen(8888);

