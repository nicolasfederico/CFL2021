let read=require("readline-sync");
let valor1=read.questionInt("Ingrese el primer valor: ");
let valor2=read.questionInt("Ingrese el segundo valor: ");
let suma=0;

for (valor1;(valor1<=valor2);valor1++){
    suma=suma+valor1;
}

console.log("La suma de los numeros es: " + suma);
