let read=require('readline-sync');

let dimensionArreglo=read.questionInt("Ingrese la cantidad de numeros que desee: ");
let v1 = new Array (dimensionArreglo);
let v2 = new Array (dimensionArreglo);


function cargarArreglo(arreglo, nombreArreglo){
    for (let i=0; i<dimensionArreglo; i++){
        arreglo [i] = read.questionInt ("Ingrese los valores del "+nombreArreglo+ ": ");
    }
}

function calcularProducto (v1,v2){
    let resultado = 0;
    let suma = 0;
    for (let i=0; i<dimensionArreglo; i++){
        resultado = (v1 [i] * v2 [i])
        suma = (suma + resultado);
    }
    return suma;
}

cargarArreglo (v1, "arreglo 1");
cargarArreglo (v2, "arreglo 2");

console.log ("El producto escalar del primer y el segundo vector es: "+ calcularProducto (v1,v2))