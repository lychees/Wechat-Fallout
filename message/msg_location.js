// message: location
// 接收地理位置消息

require('../model/player');


function distance(x1, y1, x2, y2) {
    var lat = [x1, x2];
    var lng = [y1, y2];
    var R = 6378137;
    var dLat = (lat[1] - lat[0]) * Math.PI / 180;
    var dLng = (lng[1] - lng[0]) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d);
} 

module.exports = function *(message) {
    
    P.lastCheckIn.t = new Date().getTime();
    P.lastCheckIn.x = message.Location_X;
    P.lastCheckIn.y = message.Location_Y;

	return "你的位置：" + message.Location_X + " " + message.Location_Y + "。\n 你与 SWFC 的距离：" + String(distance(
		message.Location_X, message.Location_Y, 31.234777, 121.507370));
}

// FILE EOF

/*
玩家：
HP：
SAN：

背包：

绷带：HP＋1
香烟：SAN＋1

怪物：
建筑：上海环球金融中心
别名: SWFC
描述：上海环球金融中心曾经是一栋摩天大楼。
规模：2/14
建筑：证交所 LV 2，伐木场 LV 1
产出：金币＋14，木头＋5
储藏：
	金币：0 / 100
	木头: 0 / 50
当前建筑项目：
*/


