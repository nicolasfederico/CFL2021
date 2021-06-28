"use strict";
let contador=0;


function sumarX() {
    contador++;
    document.getElementById("contadorX").innerHTML = contador;
}

function restarX() {
    contador--;
    document.getElementById("contadorX").innerHTML = contador;
}

function sumarInput() {  
    let nodoInput = document.getElementById("boxNumero");
    let numero = parseInt(nodoInput.value);
    contador = (contador+numero);
    document.getElementById("contadorX").innerHTML = contador;
}