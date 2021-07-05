import * as randomWords from "random-words";

let arregloPalabras = new Array (10);

function cargarArreglo (arreglo){
    for (let i:number=0; i<arreglo.length ; i++){
        arreglo[i] = randomWords()
    }
}


cargarArreglo(arregloPalabras);
console.log (arregloPalabras);