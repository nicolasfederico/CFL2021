"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RLS = __importStar(require("readline-sync"));
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
    Vehiculo.prototype.setPatente = function () {
        var opcionPatente;
        var ingresoPatente;
        opcionPatente = RLS.questionInt("Ingrese el formato de patente \n 1 - Formato NUEVO \n 2 - Formato VIEJO  \n : ");
        if (opcionPatente == 1) {
            ingresoPatente = RLS.question("Ingrese patente: ");
            if (ingresoPatente.length !== 7) {
                throw new Error("La patente debe contener 7 caracteres ");
            }
            this.patente = ingresoPatente;
        }
        else if (opcionPatente == 2) {
            ingresoPatente = RLS.question("Ingrese patente: ");
            if (ingresoPatente.length !== 6) {
                throw new Error("La patente debe contener 6 caracteres ");
            }
            this.patente = ingresoPatente;
        }
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
    Vehiculo.prototype.cargarPatente = function () {
        try {
            this.setPatente();
        }
        catch (error) {
            console.log(error.message);
        }
    };
    return Vehiculo;
}());
exports.default = Vehiculo;
