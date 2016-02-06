/* The MIT License (MIT)
 *
 * Copyright (c) 2016 Ecmascript Hacker
 */

var testingFramework = function(functionToTest, functionInputInAnArray, desiredFunctionOutput){
	var out = functionToTest.apply(null, functionInputInAnArray);
	if(out !== desiredFunctionOutput){
		console.log('Failed!');
	} else {
		console.log('Passed');
	}
};

testingFramework(App.sum, [1, 2], 3);
testingFramework(App.sum, [1, -2], -1);
testingFramework(App.sum, [1, 20], 21);
testingFramework(App.diff, [2, 1], 1);
testingFramework(App.diff, [2, 3], -1);
testingFramework(App.diff, [2, 11], -9);


var sum = App.sum;
var diff = App.diff;

testingFramework(sum, [1, 2], 3);
testingFramework(sum, [1, -2], -1);
testingFramework(sum, [1, 20], 21);
testingFramework(diff, [2, 1], 1);
testingFramework(diff, [2, 3], -1);
testingFramework(diff, [2, 11], -9);
