function squareNumbers(numbers) {
    let a = numbers;
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i]
    }
    return a;
}
function avg(result) {
    let b = result;
    let c = 0;
    for (let i = 0; i < b.length; i++) {
        c = c + b[i]
    }
    return c / (b.length);
}
function CalculateAverage(number, callback) {
    return callback(number)
}

let numbers = [1, 2, 3, 4, 5]
let result = CalculateAverage(numbers, squareNumbers);
result = CalculateAverage(result, avg);
console.log(result)