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
var RLS = __importStar(require("readline-sync"));
var gestorRuleta_1 = __importDefault(require("./gestorRuleta"));
var gestorTragamonedas_1 = __importDefault(require("./gestorTragamonedas"));
console.log(">>>>>>>>>>>Bienvenido al Casino <<<<<<<<<<<< \n");
var gestorTragamonedas = new gestorTragamonedas_1.default();
var gestorRuleta = new gestorRuleta_1.default();
console.log("A continuación elegí que juego querés jugar: \n 1 - Tragamonedas \n 2 - Ruleta \n 3 - Turf ");
var opcion = RLS.question('Ingresa una opcion, X para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case '1': {
            gestorTragamonedas.iniciarTragamonedas();
            break;
        }
        case '2': {
            gestorRuleta.iniciarRuleta();
            break;
        }
    }
    opcion = RLS.question('Ingresa una opcion, X para finalizar: ').toUpperCase();
}
