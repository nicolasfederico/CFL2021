"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var project_name_generator_1 = __importDefault(require("project-name-generator"));
var JugadaAleatoria_1 = __importDefault(require("./JugadaAleatoria"));
var caballosTurf = /** @class */ (function () {
    function caballosTurf() {
        this.nombre = project_name_generator_1.default().spaced;
        this.pagaAleatoria = new JugadaAleatoria_1.default();
        this.loQuePaga = this.pagaAleatoria.numeroRandomConDecimales(1, 15);
    }
    caballosTurf.prototype.getNombre = function () {
        return this.nombre;
    };
    caballosTurf.prototype.getPaga = function () {
        return this.loQuePaga;
    };
    return caballosTurf;
}());
exports.default = caballosTurf;
