var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
const array = ar.flat(Infinity);
var sum = 0;
for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element > sum) {
        sum = element;
    }
}
console.log("The maximum number is",sum)



