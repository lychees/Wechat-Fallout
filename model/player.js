require('./CheckIn');

var Player = {
	UID: "",
	logs: {},
	nickName: "",
	HP: 0,
	SAN: 0,
	lastCheckIn: Object.create(CheckIn),	
	ctor: function(){
	},
	upd: function(){

	}
};

P = Object.create(Player);
