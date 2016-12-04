// message: test
// 接收文本消息

require('../model/player');

var total = 0;
var http = require('http');
const config = require('../config');



var base = {
	"上海环球金融中心": {
		level: 3,		
		x: 31.234856, 
		y: 121.507416,
		output: {
			gold: 2,
			food: 1,
			wood: 1,
			stone: 0
		},
		limit: {
			gold: 100,
			food: 100,
			wood: 20,
			stone: 50
		},
		deposit: {
			gold: 10,
			food: 0,
			wood: 20,
			stone: 20
		}
	},
	"东方明珠": {
		level: 2,
		x: 31.239691, 
		y: 121.499758,	
		output: {
			gold: 0,
			food: 2,
			wood: 0,
			stone: 1
		},
		limit: {
			gold: 20,
			food: 20,
			wood: 20,
			stone: 20
		},
		deposit: {
			gold: 10,
			food: 10,
			wood: 10,
			stone: 10
		}
	}
};


//https://zh.wikipedia.org/wiki/%E4%B8%8A%E6%B5%B7%E7%8E%AF%E7%90%83%E9%87%91%E8%9E%8D%E4%B8%AD%E5%BF%83


var t = 0;

module.exports = function *(message) {
	//let {Content: text} = message;
	var s = message.Content;

	if (s == 'p'){
		return "\
			HP：10\nSAN: 10\n\
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
	P.t = new Date().getTime()；	
	return "'上次签到\n时间："  + String(P.t) + "\n位置：";
}

// FILE EOF