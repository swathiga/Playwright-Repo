// Type 1.
let value:any = 'success'
let responsevalue = value as String
console.log(responsevalue);

// Type 2.
let responseval = <String> value
console.log(responseval.toUpperCase());

