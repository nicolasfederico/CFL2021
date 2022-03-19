"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vehiculo_1 = __importDefault(require("./vehiculo"));
var autoCiudad = /** @class */ (function (_super) {
    __extends(autoCiudad, _super);
    function autoCiudad(nroPuertas) {
        var _this = _super.call(this) || this;
        _this.nroPuertas = nroPuertas;
        return _this;
    }
    autoCiudad.prototype.setAceleracion = function () {
        this.aceleracion = 50;
    };
    autoCiudad.prototype.getNroPuertas = function () {
        return this.nroPuertas;
    };
    return autoCiudad;
}(vehiculo_1.default));
exports.default = autoCiudad;
