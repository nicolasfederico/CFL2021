let read=require('readline-sync');
let cantidadDeChicos=read.questionInt("Ingrese la cantidad de chicos en el equipo: ")
let edades=new Array (cantidadDeChicos)

function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * (mayorValor - menorValor) ) + menorValor;
}

function cargarArreglo (edades){
    for (i=0;i<cantidadDeChicos;i++){
        edades[i]=aleatorio(3,8);
    }
}

function obtenerPromedio (edades){
    let promedio=0;
    let suma=0;
    for (i=0;i<cantidadDeChicos;i++){
        suma=suma+edades[i]
    }
    promedio=(suma/(edades.length));
    return promedio;
}

cargarArreglo(edades);
console.log (edades);
console.log ("El promedio de edades es: ", obtenerPromedio(edades))