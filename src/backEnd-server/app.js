var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json({ extended: false }));  //必须写json来解析json数据

var cors = require('cors')
//设置跨域访问
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization'],
}))

app.use('/user', require('./router/user'))




app.listen(3000, function () {
    console.log("App started on port 3000");
});