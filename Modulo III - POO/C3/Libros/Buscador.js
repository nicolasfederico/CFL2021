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
Object.defineProperty(exports, "__esModule", { value: true });
var RLS = __importStar(require("readline-sync"));
var Buscador = /** @class */ (function () {
    function Buscador() {
    }
    Buscador.prototype.buscarLibro = function (texto, archivo, separador) {
        for (var i = 0; i < this.libros.length; i++) {
            if (texto == this.libros[i].getTitulo()) {
                return i;
            }
        }
        return -1;
    };
    return Buscador;
}());
exports.default = Buscador;
var opcion = RLS.question("Ingrese categoria a buscar: /n Titulo: 1, /n ");
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            gestor.addLibro();
            break;
        }
        case 'R': {
            titulo = RLS.question('Ingrese el titulo del libro a buscar: ');
            console.log("Encontre la titulo en la posicion " + gestor.findLibro(titulo) + ".");
            break;
        }
        case 'U': {
            titulo = RLS.question('Ingrese el titulo del libro a modificar: ');
            gestor.updateLibro(titulo);
            break;
        }
        case 'D': {
            titulo = RLS.question('Ingrese el titulo del libro a eliminar: ');
            gestor.deleteLibro(titulo);
            break;
        }
    }
}
