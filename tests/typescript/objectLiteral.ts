/* simplest way to create an object in typescript.its a collection of key value pair
enclosed in {} */
//Implicit way - no datatype is specified. based on the value the key takes the datatype
 let userdata = {
    firstname : 'swathiga',
    lastname : 'devi',
    mobnumber: 7397507089
 }
 console.log(userdata);
 
 //Explicit way - datatype will be specified
 let userdata2 : {
    firstname : string,
    lastname : string,
    mobnumber : number
 }={
    firstname : 'swathiga',
    lastname : 'devi',
    mobnumber : 7890
 }
 console.log(userdata2);
 