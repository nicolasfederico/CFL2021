import * as read from "readline-sync"; 

function sumar (numero1:number, numero2:number):number {
    let sum :number = numero1+numero2;
   return sum;
}

let numero1:number = read.questionInt ("Ingrese el primer numero: ")
let numero2:number = read.questionInt ("Ingrese el segundo numero: ") 
console.log (sumar(numero1, numero2));