"use strict";
exports.__esModule = true;
var randomWords = require("random-words");
var arregloPalabras = new Array(10);
function cargarArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        arreglo[i] = randomWords();
    }
}
cargarArreglo(arregloPalabras);
console.log(arregloPalabras);
