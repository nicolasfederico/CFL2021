"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCustom1_1 = __importDefault(require("./ErrorCustom1"));
var ErrorCustom2_1 = __importDefault(require("./ErrorCustom2"));
function sumar(a, b) {
    if (typeof a != 'number') {
        throw new ErrorCustom1_1.default('Input 1 debe ser numerico');
    }
    else if (typeof b != 'number') {
        throw new ErrorCustom2_1.default('Input 2 debe ser numerico');
    }
    return a + b;
}
var result = 0;
try {
    result = sumar("1", 0);
    console.log(result);
    console.log("hola2131");
}
catch (err) {
    if (err instanceof ErrorCustom1_1.default) {
        console.log('Error generado en ErrorCustom1');
    }
    else if (err instanceof ErrorCustom2_1.default) {
        console.log('Error generado en ErrorCustom2');
    }
    result = 0;
}
console.log('hola');
