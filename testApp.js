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

testingFramework(sum, [1, 2], 3);
testingFramework(sum, [1, -2], -1);
testingFramework(sum, [1, 20], 21);
testingFramework(diff, [2, 1], 1);
testingFramework(diff, [2, 3], -1);
testingFramework(diff, [2, 11], -9);
