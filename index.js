'use strict';

const math = function(x, y, sign){

    if(typeof x !== 'number' || typeof y !== 'number') throw new Error("'x' and 'y' must be numbers!");
    switch(sign){
        case '+':
            return +x + +y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        default:
            throw new Error("It must be a singular sign (+ or - or *)!")
    }
}

const x = +prompt("x =", '');
const y = +prompt("y =", '');
const sign = prompt("sign: ", '');

math(x, y, sign);

