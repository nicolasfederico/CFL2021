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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Turf_1 = __importDefault(require("./Turf"));
var RLS = __importStar(require("readline-sync"));
var JugadaAleatoria_1 = __importDefault(require("./JugadaAleatoria"));
var gestorArchivos_1 = __importDefault(require("./gestorArchivos"));
var Usuario_1 = __importDefault(require("./Usuario"));
var gestorTurf = /** @class */ (function () {
    function gestorTurf() {
        this.apuesta = 0;
        this.MontoApuesta = 0;
        this.carrera = new Turf_1.default();
        this.caballoGanador = new JugadaAleatoria_1.default();
        this.archivo = new gestorArchivos_1.default();
        this.user = new Usuario_1.default();
    }
    gestorTurf.prototype.iniciarCarrera = function () {
        this.carrera.armarCarrera();
        console.log(">>>>>>>>>   Premio:   " + this.carrera.getNombreCarrera().toUpperCase() + "  <<<<<<<<<");
        for (var i = 0; i < this.carrera.getCantidadCaballos(); i++) {
            var lista = "";
            lista = lista + ("N°" + (i + 1) + "   [" + this.carrera.getNombreCaballo(i) + "]    > Paga: " + this.carrera.getPagaCaballo(i));
            console.log(lista);
        }
    };
    gestorTurf.prototype.iniciarApuestas = function () {
        this.apuesta = RLS.questionInt("Ingresa el caballo al cual queres apostar: ");
        this.MontoApuesta = RLS.questionInt("Ingresa el monto a apostar: ");
        this.user.aumentarMontoAcumulado(this.MontoApuesta);
    };
    gestorTurf.prototype.elegirGanador = function () {
        return this.caballoGanador.numeroRandom(1, (this.carrera.getCantidadCaballos()));
    };
    gestorTurf.prototype.iniciarTurf = function () {
        this.iniciarCarrera();
        this.iniciarApuestas();
        var ganador = this.elegirGanador();
        console.log("El caballo ganador es el N°" + ganador + " !");
        if (ganador == this.apuesta) {
            console.log("Felicitaciones, GANASTE!\nTu premio es de: $" + (((this.MontoApuesta * this.carrera.getPagaCaballo(ganador - 1)) - this.MontoApuesta)));
            this.user.aumentarMontoAcumulado((this.MontoApuesta * this.carrera.getPagaCaballo(ganador - 1)) - this.MontoApuesta);
            console.log("Tenes en total: $" + this.user.getMontoAcumulado());
            this.archivo.EscribirArchivo("./logTurf.txt", "Nombre de Carrera: " + this.carrera.getNombreCarrera() + " | Resultado: Gan\u00F3 ");
        }
        else {
            console.log("Perdiste :(");
            this.user.disminuirMontoAcumulado(this.MontoApuesta);
            this.archivo.EscribirArchivo("./logTurf.txt", "Nombre de Carrera: " + this.carrera.getNombreCarrera() + " | Resultado: Perdi\u00F3 ");
        }
    };
    return gestorTurf;
}());
exports.default = gestorTurf;
