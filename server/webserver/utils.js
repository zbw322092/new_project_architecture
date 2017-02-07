var portscanner = require('portscanner');
var _ = require('lodash');

var utils = {
	// 在getPort基础上面进行一层封装。
	getPorts: function(options, cb) {
		var port = options.port;
		var max;

		utils.getPort(port, max, cb);
	},

	// 使用portscanner来获取空闲接口
	getPort: function (port, max, cb) {
		portscanner.findAPortNotInUse(port, max, {
			host: 'localhost',
			timeout: 1500
		}, cb);
	},

	// 未能成功获取port
	failToGetPort: function (kill, errMeg, cb) {
		if (kill) {
			if (_.isFunction(cb)) {
				if (errMeg.message) {
					cb(errMeg);
				} else {
					cb(new Error(errMeg));
				}
			}
			process.exit(1);
		}
	}

};

module.export = {
	// 又是一层封装
	getAvaliablePort: function (options, done) {
		utils.getPorts(options, function (err, port) {
			if (err) {
				return utils.failToGetPort(true, err, options.cb);
			}

			done(null, {
				options: {
					port: port
				}
			});			
		});
	}
}