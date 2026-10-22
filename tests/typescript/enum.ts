/* enum is a special type that lets you define a set of named constants. */
//1.Numeric Enum
enum testcase {
  passed = 3,
  failed,
  skipped
}
console.log(testcase.skipped);

// 2. String Enum
enum enviroment {
    QA= 'This is QA',
    Prod = 'This is prod',
    staging = 'This is staging'
}
console.log(enviroment);

//3.Hetrogenous enum
enum validations{
    QA = 'url',
    passed = 'success',
    failed = 'fail',
    number_of_testcases = 9,
    number_of_skipped
}
console.log(validations.QA);
console.log(validations.number_of_skipped);

