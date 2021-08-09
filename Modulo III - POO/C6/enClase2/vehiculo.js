"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.velocidad = 0;
        this.color = "";
        this.patente = "";
        this.aceleracion = 0;
    }
    Vehiculo.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehiculo.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.getAceleracion = function () {
        return this.aceleracion;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
exports.default = Vehiculo;
