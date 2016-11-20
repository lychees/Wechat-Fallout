// message: test
// 接收文本消息

var total = 0;
const config = require('../config');

module.exports = function *(message) {
	//let {Content: text} = message;
	var s = message.Content;
	var t = s.split('+');
	var a = parseInt(t[0]), b = parseInt(t[1]);
	total += 1;
	return config.wechat.appid + '第' + String(total) + '条消息.';
}

// FILE EOF