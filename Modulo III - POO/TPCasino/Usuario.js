"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.MontoAcumulado = 0;
    }
    Usuario.prototype.getMontoAcumulado = function () {
        return this.MontoAcumulado;
    };
    Usuario.prototype.aumentarMontoAcumulado = function (valor) {
        this.MontoAcumulado = this.MontoAcumulado + valor;
    };
    Usuario.prototype.disminuirMontoAcumulado = function (valor) {
        this.MontoAcumulado = this.MontoAcumulado - valor;
    };
    return Usuario;
}());
exports.default = Usuario;
