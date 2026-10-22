class textBox{
    fill(text:string):void
    fill(text:string,locator:string):void

    fill(text:string,locator?:string){
        if(locator)
        {
            console.log('Locator is '+locator ,'and text is '+text);
            
        }
        else{
            console.log('Text is '+text);  
        }
    }
}
const obj = new textBox()
obj.fill('swathi')
obj.fill('swathi','name')