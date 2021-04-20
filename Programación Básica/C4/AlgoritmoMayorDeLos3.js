let read=require('readline-sync');
let numero1= read.questionInt("Ingrese el primer numero: ");
let numero2= read.questionInt("Ingrese el segundo numero: ");
let numero3= read.questionInt("Ingrese el tercer numero: ");
let numeroMayor;

if (numero1 > numero2) {
    numeroMayor=numero1
}
else {
    numeroMayor=numero2
}
if (numero3 > numeroMayor) {
        numeroMayor= numero3;
}

console.log ("El numero mayor de los 3, es: ", numeroMayor);
