"use strict";
/* enum is a special type that lets you define a set of named constants. */
//1.Numeric Enum
var testcase;
(function (testcase) {
    testcase[testcase["passed"] = 3] = "passed";
    testcase[testcase["failed"] = 4] = "failed";
    testcase[testcase["skipped"] = 5] = "skipped";
})(testcase || (testcase = {}));
console.log(testcase.skipped);
// 2. String Enum
var enviroment;
(function (enviroment) {
    enviroment["QA"] = "This is QA";
    enviroment["Prod"] = "This is prod";
    enviroment["staging"] = "This is staging";
})(enviroment || (enviroment = {}));
console.log(enviroment);
//3.Hetrogenous enum
var validations;
(function (validations) {
    validations["QA"] = "url";
    validations["passed"] = "success";
    validations["failed"] = "fail";
    validations[validations["number_of_testcases"] = 9] = "number_of_testcases";
    validations[validations["number_of_skipped"] = 10] = "number_of_skipped";
})(validations || (validations = {}));
console.log(validations.QA);
console.log(validations.number_of_skipped);
//# sourceMappingURL=enum.js.map