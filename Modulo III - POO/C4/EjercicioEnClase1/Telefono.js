"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(prendido, carga) {
        this.estaPrendido = prendido;
        this.bateriaActual = carga;
    }
    Telefono.prototype.mandarMensaje = function () {
    };
    /**
     * hacerLlamada
     */
    Telefono.prototype.hacerLlamada = function () {
    };
    /**
     * prenderApagar
     */
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Telefono;
}());
exports.default = Telefono;
