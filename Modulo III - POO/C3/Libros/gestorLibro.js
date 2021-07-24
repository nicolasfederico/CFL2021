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
var Libro_1 = __importDefault(require("./Libro"));
var LectorArchivos_1 = __importDefault(require("./LectorArchivos"));
var GestorLibro = /** @class */ (function () {
    function GestorLibro() {
        this.libros = [];
        this.archivo = new LectorArchivos_1.default();
    }
    GestorLibro.prototype.addLibro = function () {
        this.libros.push(this.pedirDatos());
    };
    GestorLibro.prototype.findLibro = function (titulo) {
        for (var i = 0; i < this.libros.length; i++) {
            if (titulo == this.libros[i].getTitulo()) {
                return i;
            }
        }
        return -1;
    };
    GestorLibro.prototype.deleteLibro = function (titulo) {
        var posicion = this.findLibro(titulo);
        if (posicion != -1) {
            this.libros.splice(posicion, 1);
        }
    };
    GestorLibro.prototype.updateLibro = function (libroViejo) {
        var posicion = this.findLibro(libroViejo);
        if (posicion != -1) {
            this.libros[posicion] = this.pedirDatos();
        }
        else {
            console.log("el libro no existe");
        }
    };
    GestorLibro.prototype.mostrarLibros = function () {
        console.log(this.libros);
    };
    GestorLibro.prototype.cargarLibros = function (rutaArchivo, separador) {
        var _this = this;
        var libros = this.archivo.LeerArchivo(rutaArchivo, separador);
        var propiedadesLibro = [];
        libros.forEach(function (libroString) {
            propiedadesLibro = libroString.split(";");
            _this.libros.push(new Libro_1.default(propiedadesLibro[0], propiedadesLibro[1], propiedadesLibro[2], propiedadesLibro[3], propiedadesLibro[4], propiedadesLibro[5], parseInt(propiedadesLibro[6])));
        });
    };
    GestorLibro.prototype.pedirDatos = function () {
        var titulo = RLS.question('Ingrese el titulo: ');
        var editorial = RLS.question('Ingrese la editorial: ');
        var anioEdicion = RLS.question('Ingrese el año: ');
        var genero = RLS.question('Ingrese el genero: ');
        var idioma = RLS.question('Ingrese el idioma: ');
        var autor = RLS.question('Ingrese el autor: ');
        var precio = RLS.questionInt('Ingrese el precio: ');
        var libro = new Libro_1.default(titulo, editorial, anioEdicion, genero, idioma, autor, precio);
        return libro;
    };
    return GestorLibro;
}());
exports.default = GestorLibro;
