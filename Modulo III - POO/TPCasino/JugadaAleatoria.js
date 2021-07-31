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
    return JugadaAleatoria;
}());
exports.default = JugadaAleatoria;
