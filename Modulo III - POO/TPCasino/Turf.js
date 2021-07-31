"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var caballosTurf_1 = __importDefault(require("./caballosTurf"));
var project_name_generator_1 = __importDefault(require("project-name-generator"));
var Turf = /** @class */ (function () {
    function Turf() {
        this.nombreCarrera = project_name_generator_1.default().spaced;
        this.carrera = [];
        this.cantidadDeCaballos = 10;
    }
    Turf.prototype.armarCarrera = function () {
        for (var i = 0; i < this.cantidadDeCaballos; i++) {
            this.carrera[i] = new caballosTurf_1.default();
        }
    };
    Turf.prototype.getNombreCarrera = function () {
        return this.nombreCarrera;
    };
    Turf.prototype.getCantidadCaballos = function () {
        return this.cantidadDeCaballos;
    };
    Turf.prototype.getNombreCaballo = function (posicion) {
        return this.carrera[posicion].getNombre();
    };
    Turf.prototype.getPagaCaballo = function (posicion) {
        return this.carrera[posicion].getPaga();
    };
    return Turf;
}());
exports.default = Turf;
