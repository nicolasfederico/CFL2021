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
var Tragamoneda_1 = __importDefault(require("./Tragamoneda"));
var TragamonedaConBonus_1 = __importDefault(require("./TragamonedaConBonus"));
var gestorArchivos_1 = __importDefault(require("./gestorArchivos"));
var RLS = __importStar(require("readline-sync"));
var Usuario_1 = __importDefault(require("./Usuario"));
var GestorTragamonedas = /** @class */ (function () {
    function GestorTragamonedas() {
        this.user = new Usuario_1.default();
        this.filetxt = new gestorArchivos_1.default();
        var datosTragamonedas = this.filetxt.LeerArchivo("./tragamonedasCfg.txt", "\n");
        var propiedadesTragamoneda = [];
        propiedadesTragamoneda = datosTragamonedas[0].split(";");
        this.tragamonedaClasico = new Tragamoneda_1.default(parseInt(propiedadesTragamoneda[0]), parseInt(propiedadesTragamoneda[1]), parseInt(propiedadesTragamoneda[2]));
        propiedadesTragamoneda = datosTragamonedas[1].split(";");
        this.tragamonedaPlus = new TragamonedaConBonus_1.default(parseInt(propiedadesTragamoneda[0]), parseInt(propiedadesTragamoneda[1]), parseInt(propiedadesTragamoneda[2]));
    }
    GestorTragamonedas.prototype.iniciarTragamonedas = function () {
        var tipoTragamoneda = RLS.questionInt(">>>>>>>>>>>>>>>>Bienvenido al juego de Tragamoneda<<<<<<<<<<<<<<<<<<\nIngrese 1 para jugar al Tragamonedas CLASICO (Valor de apuesta: $" + this.tragamonedaClasico.getApuesta() + ")" + "\nIngrese 2 si desea jugar al Tragamonedas CON BONUS (Valor de apuesta: $" + this.tragamonedaPlus.getApuesta() + ")");
        this.user.aumentarMontoAcumulado(RLS.questionInt("Ingresá tu dinero a jugar: "));
        switch (tipoTragamoneda) {
            case 1: {
                var opcion = RLS.question("----- Va a jugar al Tragamonedas Clasico ----- Ingrese Y, para continuar: ").toUpperCase();
                var premio = false;
                while (opcion == "Y") {
                    premio = this.tragamonedaClasico.jugar();
                    if (premio) {
                        console.log("HAS SIDO GANADOR DE UN POZO TOTAL DE: $", this.tragamonedaClasico.getPozo(), ", FELICITACIONES!");
                        this.filetxt.EscribirArchivo("./logTragamonedas.txt", "CLASICO: Ganó");
                        this.user.aumentarMontoAcumulado(this.tragamonedaClasico.getPozo());
                        console.log("Su monto total ahora es de: $ " + this.user.getMontoAcumulado());
                        opcion = RLS.question("deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase();
                    }
                    else {
                        this.filetxt.EscribirArchivo("./logTragamonedas.txt", "CLASICO: Perdió");
                        console.log(this.tragamonedaClasico.getApuesta());
                        this.user.disminuirMontoAcumulado(this.tragamonedaClasico.getApuesta());
                        console.log("Su monto total ahora es de: $ " + this.user.getMontoAcumulado());
                        opcion = RLS.question("No hay ganador :( , deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase();
                    }
                }
                break;
            }
            case 2: {
                var opcion = RLS.question("----- Va a jugar al Tragamonedas Con Bonus ----- Ingrese Y, para continuar: ").toUpperCase();
                var premio = false;
                while (opcion == "Y") {
                    premio = this.tragamonedaPlus.jugar();
                    if (premio) {
                        console.log("HAS SIDO GANADOR DE UN POZO TOTAL DE: $", this.tragamonedaPlus.getPozo(), ", FELICITACIONES!");
                        this.filetxt.EscribirArchivo("./logTragamonedas.txt", "PLUS: Ganó");
                        this.user.aumentarMontoAcumulado(this.tragamonedaPlus.getPozo());
                        console.log("Su monto total ahora es de: $ " + this.user.getMontoAcumulado());
                        opcion = RLS.question("deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase();
                    }
                    else {
                        this.filetxt.EscribirArchivo("./logTragamonedas.txt", "PLUS: Perdió");
                        this.user.disminuirMontoAcumulado(this.tragamonedaPlus.getApuesta());
                        console.log("Su monto total ahora es de: $ " + this.user.getMontoAcumulado());
                        opcion = RLS.question("No hay ganador :( , deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase();
                    }
                }
                break;
            }
        }
    };
    return GestorTragamonedas;
}());
exports.default = GestorTragamonedas;
