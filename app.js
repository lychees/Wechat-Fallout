// 第三方回调服务器
const config = require('./config');
const app = require('express')();
const bodyParser = require('body-parser');

// 使用bodyParse中间件接收post参数
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));

// 路由模块
app.use('/message', require('./message'));

// 启动http服务
app.listen(config.http_port, function () {
	console.log('wechat reply server listening at', config.http_port);
});

/*
// 创建菜单
// https://github.com/node-webot/wechat-api
// http://blog.csdn.net/sinat_29843547/article/details/49253827
var API = require('wechat-api');  
var api = new API(config.api.AppId, config.api.AppSecret);  
api.getAccessToken(function (err, token) {  
    console.log(err);  
    console.log(token);  
});   
  
var menu = JSON.stringify(require('./menu.json'));  
api.createMenu(menu, function (err, result) {  
    console.log(result);  
});  
*/

// FILE EOF