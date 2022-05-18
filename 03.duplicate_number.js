const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

const newArray = [];
for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    if (newArray.indexOf(number) == -1) {
        newArray.push(number);
    }
}
console.log(newArray);