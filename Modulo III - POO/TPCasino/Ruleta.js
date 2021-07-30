"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JugadaAleatoria_1 = __importDefault(require("./JugadaAleatoria"));
var numero = new JugadaAleatoria_1.default();
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.color = "verde";
        this.numeroGanador = 0;
        this.esPar = false;
    }
    Ruleta.prototype.tirarRuleta = function () {
        this.numeroGanador = numero.numeroRandom(0, 37);
        if (this.numeroGanador != 0) {
            if ((this.numeroGanador % 2) == 0) {
                this.color = "negro";
                this.esPar = true;
            }
            else {
                this.color = "rojo";
            }
        }
    };
    Ruleta.prototype.getNumero = function () {
        return this.numeroGanador;
    };
    Ruleta.prototype.getColor = function () {
        return this.color;
    };
    Ruleta.prototype.getPar = function () {
        return this.esPar;
    };
    return Ruleta;
}());
exports.default = Ruleta;
