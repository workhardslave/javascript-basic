// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
    }
}

console.log(calculate('add', 3, 5));
console.log(calculate('substract', 6, 5));
console.log(calculate('divide', 8, 2));
console.log(calculate('multiply', 5, 2));
console.log(calculate('remainder', 10, 3));