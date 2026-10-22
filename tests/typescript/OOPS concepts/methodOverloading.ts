/* Having multiple methods with the same name but different parameters
We can declare multiple method signatures, but only one actual implementation is allowed. */

class BrowserNew {
    loadApplication(url: string): void //method signature
    loadApplication(url: string, browsername: string): void//signature

    loadApplication(url: string, browsername?: string) {
        if (browsername) {
            console.log('launch the ', url, 'in the browser', browsername);

        } else {
            console.log('launch the ' + url);

        }
    }
}
let brnew = new BrowserNew()
brnew.loadApplication('www.google.com')
brnew.loadApplication('google.com', 'chrome')