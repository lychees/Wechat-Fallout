require('./CheckIn');

var CheckIn = {
	t: 0, // timestamp
	x: 0, // position.x
	y: 0  // position.y
};

var Player = {
	UID: "",
	logs: {},
	nickName: "",
	HP: 0,
	SAN: 0,
	lastCheckIn: null, //Object.create(CheckIn),	
	ctor: function(){
	},
	upd: function(){

	}
};

P = Object.create(Player);
P.lastCheckIn = Object.create(CheckIn);