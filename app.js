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

var menu = JSON.stringify(require('./menu.json'));
api.createMenu(menu, function (err, result){
	console.log(result);
});

// FILE EOF