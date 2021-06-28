let read=require('readline-sync');

let dimArreglo=read.questionInt("Ingrese la dimension de los arreglos: ");

let v1=new Array (dimArreglo);
let v2=new Array (dimArreglo);
let resultado=new Array (dimArreglo);

function cargarArreglo(arreglo){
    for (let i=0; i<dimArreglo;i++){
        arreglo[i]=aleatorio(0,100);
    }
}

function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * (mayorValor - menorValor) ) + menorValor;
}

function sumarArreglo (arreglo1, arreglo2){
    for(let i=0; i<dimArreglo;i++){
        resultado[i]=(arreglo1[i]+arreglo2[i]);
    }
    return resultado;
}



cargarArreglo (v1);
cargarArreglo (v2);


console.log ("Arreglo 1: ",v1);
console.log ("Arreglo 2: ",v2);
console.log ("La suma de ambos arreglos es: ",sumarArreglo (v1,v2));





