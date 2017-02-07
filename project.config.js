'use strict';

var path = require('path');
var projectVirtualPath = 'personal/newprojecttesting';

module.exports = {
	projectVirtualPath: projectVirtualPath,
	hostProxy: 'http://my.testing.com',
	webpack: {
		entry: {
			[`${projectVirtualPath}/testing`]: ['./client/testing']
		}
	}
};