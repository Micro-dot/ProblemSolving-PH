const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]
for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++
        }
    }
    console.log(arr[i] + "=" + count);
}