
// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes 
'use strict';

// How to use a foreign module ?
// Take 'sample-cortex-project' for example:
//
// 1. to install a dependency, exec the command below inside the current repo:
// 		cortex install sample-cortex-project --save
// 2. use `require(module_idendifier)` method:
// 		var hello = require('sample-cortex-project');

// `exports` is the API of the current module
exports.sayHello = function() {
    alert('hello world');
};

// or you could code like this:
// 		module.exports = {
// 			my_method: function() {
// 	    		hello();
// 			}
// 		};