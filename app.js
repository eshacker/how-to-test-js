/* The MIT License (MIT)
 *
 * Copyright (c) 2016 Ecmascript Hacker
 */
/* This is our app.js . */


var App = App || (function(){
	var sum = function(a, b){
		return a+b;
	};

	var diff = function(a, b){
		return a-b;
	};

	return {
		sum: sum, diff: diff
	};
})();
