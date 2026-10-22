class chromeBrowser {
    launchBrowser() {
        console.log('Launched chrome');

    }
}
class edgeBrowser extends chromeBrowser {
    launchBrowser() {
        console.log('Launched edge');

    }

}
class firefoxBrowser extends edgeBrowser{
    launchBrowser() {
        console.log('Launched firefox');

    }

}

const obj = new edgeBrowser()
obj.launchBrowser()
const obj1 = new firefoxBrowser()
obj1.launchBrowser()