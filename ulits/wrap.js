/**
 * CO封装模块
 * @author Eric
 */
const co = require('co');

module.exports = function(fn) {
	return function(req, res) {
		co(fn.bind(null, req, res)).catch(function(error) {
			console.log('错误:', error);
		});
	}
};

// FILE EOF