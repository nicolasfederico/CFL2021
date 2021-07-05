"use strict";
exports.__esModule = true;
var random = require("randomstring");
var read = require("readline-sync");
var cantidadDigitos = read.questionInt("Ingrese la longituid deseada del password seguro: ");
var password = random.generate({
    length: cantidadDigitos,
    charset: 'alphabetic'
});
console.log("La contraseña es: " + password);
