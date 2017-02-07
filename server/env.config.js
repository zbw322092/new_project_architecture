'use strict';

var path = require('path');
var _ = require('lodash');
var projectConfig = require('../project.config.js');

var allConfig = {
	port: process.env.PORT || 8888,
	ip: process.env.IP || '0.0.0.0',
	serverRootPath: path.join(__dirname, '../server'),
	webpackRootPath: path.join(__dirname, '../webpack')
};

module.exports = _.merge(allConfig, {projectConfig: projectConfig});