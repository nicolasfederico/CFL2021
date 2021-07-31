"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JugadaAleatoria_1 = __importDefault(require("./JugadaAleatoria"));
var Tragamoneda = /** @class */ (function () {
    function Tragamoneda(pozoTotal, cantRodillos, apuesta) {
        this.pozo = pozoTotal;
        this.cantRodillos = cantRodillos;
        this.apuesta = apuesta;
        this.jugada = new JugadaAleatoria_1.default();
    }
    Tragamoneda.prototype.jugar = function () {
        var estado = false;
        var jugadaMaquina = this.jugada.generarJugada(this.cantRodillos, 0, 1);
        console.log(jugadaMaquina);
        for (var i = 0; i < this.cantRodillos; i++) {
            if ((jugadaMaquina[0] == jugadaMaquina[(i)])) {
                estado = true;
            }
            else {
                estado = false;
                return estado;
            }
        }
        return estado;
    };
    Tragamoneda.prototype.getPozo = function () {
        return this.pozo;
    };
    Tragamoneda.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Tragamoneda.prototype.getCantRodillos = function () {
        return this.cantRodillos;
    };
    return Tragamoneda;
}());
exports.default = Tragamoneda;
