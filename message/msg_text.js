// message: test
// 接收文本消息

var total = 0;

module.exports = function *(message) {
	//let {Content: text} = message;
	var s = message.Content;
	var t = s.split('+');
	var a = parseInt(t[0]), b = parseInt(t[1]);
	total += 1;
	return s + ' = ' + String(a+b) + '，A A 可能是第' + String(total) + '条消息.';
}

// FILE EOF