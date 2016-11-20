/**
 * 微信消息模块
 * @mark: 消息方法对大小写敏感
 * @author Eric
 */
let fnList = {};
// 事件消息
fnList.event_subscribe = require('./event_subscribe');
fnList.event_unsubscribe = require('./event_unsubscribe');
fnList.event_SCAN = require('./event_scan');
fnList.event_LOCATION = require('./event_location');
fnList.event_CLICK = require('./event_click');
fnList.event_VIEW = require('./event_view');
// 普通消息
fnList.msg_text = require('./msg_text');
fnList.msg_image = require('./msg_image');
fnList.msg_voice = require('./msg_voice');
fnList.msg_video = require('./msg_video');
fnList.msg_shortvideo = require('./msg_shortvideo');
fnList.msg_location = require('./msg_location');
fnList.msg_link = require('./msg_link');

const {_} = require('../ulits');
const {wechat: replyConfig} = require('../config');
const router = require('express').Router();
const wechat = require('wechat');

var menu = JSON.stringify(require('../menu.json'));
wechat.createMenu(menu, function (err, result){
	console.log(result);
});


// 魔术路由
function *reply(req, res) {
	let msg = req.weixin;
	let fn = msg.MsgType == 'event' ? fnList['event_' + msg.Event] : fnList['msg_' + msg.MsgType];

	if (typeof fn != 'function'){
		console.log('未识别的微信消息: [MsgType: %s] [Event: %s]', msg.MsgType, msg.Event);
		return res.reply('');
	}

	let result = yield fn(msg);
	res.reply(result || '');
}

router.use('/', wechat(replyConfig, _(reply)));

module.exports = router;
// FILE EOF