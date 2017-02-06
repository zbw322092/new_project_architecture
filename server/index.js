'use strict';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
	require('babel-register');
}

var r = require('./babelTest.js');
console.log(r.toString());


var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core')
  .transform(es6Code, {
    presets: ['es2015']
  })
  .code;
console.log('es5Code: ', es5Code);