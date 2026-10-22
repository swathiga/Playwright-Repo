/* Typealias - Type aliases in TypeScript provide a way to create custom names for types, enhancing code readability 
and maintainability. 
They allow developers to define types with a custom name, which can be used for primitives, objects, arrays, unions, 
and function signatures. */

//union - Example 1
type data1  = string | number | boolean
let username: data1 = true
console.log(username);

// union - Example 2
type browser = 'chrome' | 'firefox' | 'edge'
function invokefunction(bowsername:browser)
{
   console.log(bowsername);
}
invokefunction('chrome')

//intersection
 type input1 ={
   firstname : string,
   lastname : string  
 }
 
 type input2 ={
    mobnumber : number,
    pan_number : number
 }

type total = input1 & input2

const tot:total = {
    firstname : 'swathiga',
    lastname : 'devi',
    mobnumber : 6789,
    pan_number : 8976
}
console.log(tot);
