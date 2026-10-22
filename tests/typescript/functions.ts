/* functions in typescript is a reusable block of code used to perform specific task.
it allows to specify the datatype of parameter and return value
provides type safety and helps catch error at run time */

function add(a:number,b:number) {
    let c = a+b
    console.log(c);   
}
add(10,20)

function sub(a:number,b:number):number {
    let c= a-b
    return c  
}
console.log(sub(30,20))
