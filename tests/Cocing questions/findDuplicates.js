function duplicates(arr) {
    var seen = new Set();
    var dupli = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        if (seen.has(value)) {
            dupli.add(value);
        }
        seen.add(value);
    }
    console.log('Duplicates are:', dupli);
    console.log('Unique value are:', seen);
}
var data = [10, 20, 30, 40, 50, 10, 30];
duplicates(data);
