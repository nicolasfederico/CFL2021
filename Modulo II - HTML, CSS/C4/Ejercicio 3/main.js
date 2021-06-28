"use strict";

let arregloCompras= new Array (100);
let sumaTotal=0;
let indice=0;
let precio = 0;

function llenarArregloConPrecio(i) {
    let nodoInput = document.getElementById("inputPrecio");
    let precio = +nodoInput.value;
    arregloCompras[indice]= precio;
    indice++;
    document.getElementById ("confirmacionInput").innerHTML = "El producto "+ indice +" ha sido cargado con exito."
}

function calcularSuma () {
    for (let i=0;i<indice;i++) {
        sumaTotal=arregloCompras[i]+sumaTotal;
    }
    document.getElementById ("sumaTotal").innerHTML = "La suma total es: " + sumaTotal + " .";
}

/* function imprimirArreglo(arreglo) {
    for (let i=0; i<=100;i++) {
        console.log (arreglo[i]);
    }    
} */

