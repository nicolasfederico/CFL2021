"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JugadaAleatoria = /** @class */ (function () {
    function JugadaAleatoria() {
    }
    JugadaAleatoria.prototype.generarJugada = function (cantRodillos, menorValor, mayorValor) {
        var jugada = new Array(cantRodillos);
        for (var i = 0; i < cantRodillos; i++) {
            jugada[i] = Math.floor(Math.random() * ((mayorValor + 1) - menorValor)) + menorValor;
        }
        return jugada;
    };
    JugadaAleatoria.prototype.numeroRandom = function (menorValor, mayorValor) {
        var numero;
        return numero = Math.floor(Math.random() * ((mayorValor + 1) - menorValor)) + menorValor;
    };
    JugadaAleatoria.prototype.numeroRandomConDecimales = function (menorValor, mayorValor) {
        var numero;
        return numero = parseFloat(((Math.random() * ((mayorValor + 1) - menorValor) + menorValor)).toFixed(2));
    };
    JugadaAleatoria.prototype.arregloRandomConDecimales = function (cant, menorValor, mayorValor) {
        var arreglo = new Array(cant);
        for (var i = 0; i < cant; i++) {
            arreglo[i] = Math.random() * ((mayorValor + 1) - menorValor) + menorValor;
        }
        return arreglo;
    };
    return JugadaAleatoria;
}());
exports.default = JugadaAleatoria;
