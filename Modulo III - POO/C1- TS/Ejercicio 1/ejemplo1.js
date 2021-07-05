"use strict";
exports.__esModule = true;
var read = require("readline-sync");
function sumar(numero1, numero2) {
    var sum = numero1 + numero2;
    return sum;
}
var numero1 = read.questionInt("Ingrese el primer numero: ");
var numero2 = read.questionInt("Ingrese el segundo numero: ");
console.log(sumar(numero1, numero2));
