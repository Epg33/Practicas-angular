"use strict";
console.log('hola');
let grupo = 10;
const resolve = (a, b, operation) => {
    switch (operation) {
        case 'add':
            return a + b;
        case 'divide':
            if (b === 0) {
                return 'no se puede dividir entre cero pana';
            }
            return a / b;
        case 'multiplie':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'operacion invalida';
    }
};
console.log(resolve(15, 20, 'add'));
