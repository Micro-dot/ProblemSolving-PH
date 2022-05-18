function factorial(number) {
    let num = 1;
    for (let i = 1; i <= number; i++) {
        num = num * i;
    }
    return num;
}
const factorialNumber = factorial(9);
console.log("the factorial number of [9]", factorialNumber);