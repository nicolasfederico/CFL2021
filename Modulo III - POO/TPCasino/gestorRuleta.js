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
var Ruleta_1 = __importDefault(require("./Ruleta"));
var RLS = __importStar(require("readline-sync"));
var gestorArchivos_1 = __importDefault(require("./gestorArchivos"));
var Usuario_1 = __importDefault(require("./Usuario"));
var GestorRuleta = /** @class */ (function () {
    function GestorRuleta() {
        this.ruleta = new Ruleta_1.default();
        this.archivo = new gestorArchivos_1.default();
        this.user = new Usuario_1.default();
    }
    GestorRuleta.prototype.iniciarRuleta = function () {
        this.user.aumentarMontoAcumulado(RLS.questionInt("Ingresa el monto para comprar fichas: "));
        console.log("A continuación elegí que opción querés jugar: \n 1 - Pleno \n 2 - Par/Inpar \n 3 - Color: ");
        var opcion = RLS.question('Ingresa una opcion, X para salir: ').toUpperCase();
        while (opcion != 'X') {
            switch (opcion) {
                case "1": {
                    this.ruleta.tirarRuleta();
                    var apuestaElegida = RLS.questionInt("Ingrese el pleno: ");
                    var montoApuesta = RLS.questionInt("Ingresa el monto a apostar el pleno: ");
                    console.log("Salio el numero: " + this.ruleta.getNumero());
                    if (this.ruleta.getNumero() == apuestaElegida) {
                        console.log("Felicitaciones, GANASTE!\nTu premio es de: $" + (montoApuesta * 35));
                        this.user.aumentarMontoAcumulado((montoApuesta * 35));
                        console.log("Tenes en total: $" + this.user.getMontoAcumulado());
                        this.archivo.EscribirArchivo("./logRuleta.txt", "RULETA: Ganó en pleno");
                    }
                    else {
                        this.jugadaPerdedora("Color", montoApuesta);
                    }
                    break;
                }
                case "2": {
                    this.ruleta.tirarRuleta();
                    var apuestaElegida = RLS.question("Escribi PAR si queres jugar al PAR, o IMPAR si queres lo contrario: ").toUpperCase();
                    var montoApuesta = RLS.questionInt("Ingresa el monto de tu apuesta: ");
                    var esPar = void 0;
                    console.log("Salio el numero: " + this.ruleta.getNumero());
                    if (apuestaElegida == "PAR") {
                        esPar = true;
                    }
                    else {
                        esPar = false;
                    }
                    if (this.ruleta.getPar() == esPar) {
                        console.log("Felicitaciones, GANASTE!\nTu premio es de: $" + montoApuesta);
                        this.user.aumentarMontoAcumulado(montoApuesta);
                        console.log("Tenes en total: $" + this.user.getMontoAcumulado());
                        this.archivo.EscribirArchivo("./logRuleta.txt", "RULETA: Ganó en Par/Impar");
                    }
                    else {
                        this.jugadaPerdedora("Par/Impar", montoApuesta);
                    }
                }
                case "3": {
                    this.ruleta.tirarRuleta();
                    var apuestaElegida = RLS.question("Escribi ROJO si queres jugar al ROJO, o NEGRO si queres lo contrario: ").toUpperCase();
                    var montoApuesta = RLS.questionInt("Ingresa el monto de tu apuesta: ");
                    console.log("Salio el numero: " + this.ruleta.getNumero());
                    if (this.ruleta.getColor() == apuestaElegida) {
                        console.log("Felicitaciones, GANASTE!\nTu premio es de: $" + montoApuesta);
                        this.user.aumentarMontoAcumulado(montoApuesta);
                        console.log("Tenes en total: $" + this.user.getMontoAcumulado());
                        this.archivo.EscribirArchivo("./logRuleta.txt", "RULETA: Ganó en Color");
                    }
                    else {
                        this.jugadaPerdedora("Color", montoApuesta);
                        /* console.log ("Perdiste :(")
                        this.user.disminuirMontoAcumulado(montoApuesta);
                        console.log ("Te quedan: $"+this.user.getMontoAcumulado())
                        this.archivo.EscribirArchivo("./logRuleta.txt","RULETA: Perdio en Color")
                        opcion = RLS.question ("Si queres salir ingresa X: "); */
                    }
                }
                default:
                    opcion = "X";
                    break;
            }
        }
    };
    GestorRuleta.prototype.jugadaPerdedora = function (textoArchivo, montoApuesta) {
        var opcion;
        console.log("Perdiste :(");
        this.user.disminuirMontoAcumulado(montoApuesta);
        console.log("Te quedan: $" + this.user.getMontoAcumulado());
        this.archivo.EscribirArchivo("./logRuleta.txt", "RULETA: Perdio en " + textoArchivo);
        return opcion = RLS.question("Si queres salir ingresa X: ");
    };
    return GestorRuleta;
}());
exports.default = GestorRuleta;
