// message: test
// 接收文本消息

var total = 0;
var http = require('http');
const config = require('../config');

module.exports = function *(message) {
	//let {Content: text} = message;
	var s = message.Content;
	var t = s.split('+');
	var a = parseInt(t[0]), b = parseInt(t[1]);
	total += 1;

	//https://mp.weixin.qq.com/wiki/14/bb5031008f1494a59c6f71fa0f319c66.html
	// https://cnodejs.org/topic/51de0a33f4963ade0e094fce
	//	https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN  

	// https://github.com/node-webot/wechat
	// 消息接口指南。

	var API = require('wechat-api');  
	var api = new API(config.api.AppId, config.api.AppSecret);  
	return api.getAccessToken(function (err, token) {  
    	console.log(err);  
    	console.log(token);  
		http.get("http://api.weixin.qq.com/cgi-bin/user/info?access_token=" + token + "&openid" + message.FromUserName + "=OPENID&lang=zh_CN", function(res) {
  			console.log("Got response: " + res.statusCode);
  			return "欢迎你，" + res.nickname + '。 第' + String(total) + '条消息.';
		}).on('error', function(e) {
  			console.log("Got error: " + e.message);
  			return 'Error, 第' + String(total) + '条消息.';
		});
	});  
 
	return {
    	title: '你来我家接我吧',
    	description: '这是女神与高富帅之间的对话',
    	picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
    	url: 'http://nodeapi.cloudfoundry.com/'
	};
	//return config.wechat.appid + '第' + String(total) + '条消息.';
}

// FILE EOF