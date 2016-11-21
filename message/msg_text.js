// message: test
// 接收文本消息

var total = 0;
var http = require('http');
const config = require('../config');




module.exports = function *(message) {
	//let {Content: text} = message;
	var s = message.Content;

	if (s == 'p'){
		return "\
			HP：10\n\
			SAN: 10\n\
		";
	}

	var t = s.split('+');
	var a = parseInt(t[0]), b = parseInt(t[1]);
	total += 1;

	//https://mp.weixin.qq.com/wiki/14/bb5031008f1494a59c6f71fa0f319c66.html
	// https://cnodejs.org/topic/51de0a33f4963ade0e094fce

	// https://github.com/node-webot/wechat
	// 消息接口指南。

	var API = require('wechat-api');  
	var api = new API(config.api.AppId, config.api.AppSecret);  

/*	return api.getAccessToken(function (err, token) {  
    	console.log(err);  
    	console.log(token);  
		return http.get("http://api.weixin.qq.com/cgi-bin/user/info?access_token=" + token + "&openid=" + message.FromUserName + "&lang=zh_CN", function(res) {
  			console.log(res);
  			return '123';
  			return '欢迎你，' + res.nickname;
		}).on('error', function(e) {
  			console.log("Got error: " + e.message);
  			return 'Error, 第' + String(total) + '条消息.';
		});
	});  */

	/*api.getUser({openid: message.FromUserName, lang: 'en'}, function (err, result){
		console.log(result);
		return result.nickname;
	});*/
	
	console.log ('why?');
	return "why?";
}

// FILE EOF