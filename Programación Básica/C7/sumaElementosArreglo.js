let read=require('readline-sync');

let dimensionDelArreglo=read.questionInt("Ingrese la dimension del arreglo: ")

let numeros = new Array (dimensionDelArreglo);

for (let i=0; (i<dimensionDelArreglo);i++){
    numeros[i]=read.questionInt ("Ingrese los numeros a sumar: ");
}

function sumarArreglo (dimensionDelArreglo) {
    let suma=0
    for (let i=0; (i<dimensionDelArreglo); i++){
       suma = suma+ numeros [i];
    }
    return suma;
}

console.log ("La suma de los numeros es: "+(sumarArreglo(dimensionDelArreglo)));