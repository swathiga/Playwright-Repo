class browser{
    browsertype():string{
       return "Browser type function"
    }
    browser_version():string{
      return "version function"
    }
}

class chrome extends browser{
    launch_browser(){
        console.log('Chrome is launched');     
    }
}

const obj = new chrome();
obj.launch_browser()
console.log(obj.browser_version());
console.log(obj.browsertype());

class edge extends browser{
    launch_browser(){
        console.log('Edge is launched');   
    }
}

const obj1 = new edge
obj1.launch_browser()
console.log(obj1.browsertype());
console.log(obj1.browser_version());




