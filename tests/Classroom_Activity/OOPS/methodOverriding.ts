class browser {
    browserversion() {
        console.log('Browser version is 2.7');
    }
}
class chrome extends browser {
    browserversion() {
        console.log('Chrome Browser Version is 2.9');
    }
}
const obj = new chrome()
obj.browserversion()
