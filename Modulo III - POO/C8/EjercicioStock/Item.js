"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
    Item.prototype.getNombre = function () {
        return this.nombre;
    };
    Item.prototype.getCosto = function () {
        return this.costo;
    };
    return Item;
}());
exports.default = Item;
