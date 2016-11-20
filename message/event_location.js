// event: location
// 上报地理位置事件

module.exports = function *(message) {
	let {Latitude, Longitude} = message;
	console.log('收到地理位置:', Latitude, Longitude);
	return '';
}

// FILE EOF