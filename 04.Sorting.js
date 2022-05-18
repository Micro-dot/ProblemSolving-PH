const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]
const newArray = [];
for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    if (newArray.indexOf(number) == -1) {
        newArray.push(number);
    }
}
const duplicateNumber = newArray.sort(array)
console.log(duplicateNumber);

function array(a, b) {
    return a - b;
}