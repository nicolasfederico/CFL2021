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
var Item_1 = __importDefault(require("./Item"));
var RLS = __importStar(require("readline-sync"));
var gestorArchivos_1 = __importDefault(require("./gestorArchivos"));
var Stock = /** @class */ (function () {
    function Stock() {
        this.stock = [];
        this.vendidos = [];
        this.file = new gestorArchivos_1.default();
    }
    Stock.prototype.cargarItem = function () {
        var nombre = RLS.question("Ingresa el nombre del artículo: ");
        var costo = RLS.questionInt("Ingresa el costo del artículo: ");
        this.stock.push(new Item_1.default(nombre, costo));
    };
    Stock.prototype.cargarItemsTxt = function (rutaArchivo, separador) {
        var _this = this;
        var items = this.file.LeerArchivo(rutaArchivo, separador);
        var propiedadesItem = [];
        items.forEach(function (itemString) {
            propiedadesItem = itemString.split(";");
            _this.stock.push(new Item_1.default(propiedadesItem[0], parseInt(propiedadesItem[1])));
        });
    };
    Stock.prototype.venderItem = function () {
        var nombre = RLS.question("Ingresa el nombre del artículo a vender: ");
        var posicionItem = this.buscarItem(nombre);
        this.vendidos.push(new Item_1.default(this.stock[posicionItem].getNombre(), this.stock[posicionItem].getCosto()));
        this.file.EscribirArchivo("itemsVendidos.txt", "Se vendió el item " + this.stock[posicionItem].getNombre() + ", con un costo de $" + this.stock[posicionItem].getCosto() + ".");
        console.log(">>>>>El artículo: " + this.stock[posicionItem].getNombre() + " fue vendido con éxito.<<<<<<");
        this.stock.splice(posicionItem, 1);
    };
    Stock.prototype.buscarItem = function (nombre) {
        for (var i = 0; i < this.stock.length; i++) {
            if (this.stock[i].getNombre() == nombre) {
                return i;
            }
        }
        return -1;
    };
    Stock.prototype.mostrarStock = function () {
        console.log(this.stock);
    };
    Stock.prototype.mostrarVendidos = function () {
        console.log(this.vendidos);
    };
    return Stock;
}());
exports.default = Stock;
