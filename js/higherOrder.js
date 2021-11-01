function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculate(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculate(1, 3, add));