"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmarthPhone = /** @class */ (function () {
    function SmarthPhone() {
        this.estaPrendido = true;
    }
    SmarthPhone.prototype.prender = function () {
        this.estaPrendido = true;
        console.log("Prendiendo...");
    };
    SmarthPhone.prototype.apagar = function () {
        this.estaPrendido = false;
        console.log("Apagando...");
    };
    SmarthPhone.prototype.llamar = function (numero) {
        console.log("Llamando al numero " + numero + "...");
    };
    SmarthPhone.prototype.sacarFoto = function () {
        console.log("Sacando foto....");
    };
    return SmarthPhone;
}());
var telefono = new SmarthPhone();
console.log(telefono);
telefono.apagar();
console.log(telefono);
telefono.llamar("123456");
