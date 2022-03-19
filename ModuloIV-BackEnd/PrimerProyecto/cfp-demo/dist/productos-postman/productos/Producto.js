"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(id, nombre, precio) {
        this.idProducto = id;
        this.nombreProducto = nombre;
        this.precio = precio;
    }
    getId() {
        return this.idProducto;
    }
    getNombre() {
        return this.nombreProducto;
    }
    getPrecio() {
        return this.precio;
    }
}
exports.default = Producto;
//# sourceMappingURL=Producto.js.map