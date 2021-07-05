import * as random from "randomstring";
import * as read from "readline-sync";

let cantidadDigitos:number = read.questionInt ("Ingrese la longituid deseada del password seguro: ");

let password:string = random.generate ({
    length: cantidadDigitos,
    charset: 'alphabetic'
});

console.log ("La contraseña es: "+ password);