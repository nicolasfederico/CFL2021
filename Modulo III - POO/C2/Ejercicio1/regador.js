var regador = /** @class */ (function () {
    function regador(prendido, caudal, anguloAspersion) {
        this.estaPrendido = prendido;
        this.caudal = caudal;
        this.anguloAspersion = anguloAspersion;
    }
    regador.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    regador.prototype.aumentarCaudal = function () {
        this.caudal = this.caudal + 1;
    };
    regador.prototype.disminuirCaudal = function () {
        this.caudal = this.caudal - 1;
    };
    regador.prototype.aumentarAngulo = function () {
        this.anguloAspersion = this.anguloAspersion + 1;
    };
    regador.prototype.disminuirAngulo = function () {
        this.anguloAspersion = this.anguloAspersion - 1;
    };
    regador.prototype.rangoAspersion = function (angulo) {
        this.anguloAspersion = angulo;
    };
    return regador;
}());
var regador1 = new regador(true, 124, 360);
console.log(regador1);
regador1.rangoAspersion(180);
console.log(regador1);
regador1.disminuirAngulo();
console.log(regador1);
