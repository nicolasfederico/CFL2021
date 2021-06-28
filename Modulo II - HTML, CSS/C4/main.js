"use strict";

function saludar(){
    console.log ("hola");
}
let contador=0;
function clickear (){
    contador++;
    /* alert ("Hiciste "+contador+" Clicks") */
    document.getElementById("contadorClicks").innerHTML = ("Hiciste "+contador+" Clicks")
}

function ocultar(){
    console.log (document.getElementById(principal))
}

/* let nombre = "Nicolas"
let largoString= nombre.length;
console.log (largoString);  */

/* document.querySelector ("h2").innerHTML = "Nuevo"; */
/* document.getElementById("contadorClicks").innerHTML = ("Hiciste") */


function arrojarDado(numeroDeDado) {
    let numero = aleatorio (1,6);
    document.getElementById(numeroDeDado).innerHTML = numero;
}



function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
}

function cargarArreglo(arreglo){
    for (i=0; i<1000; i++){
        arreglo[i]=aleatorio(1,6)
    }
}

function sumarDados (arreglo1,arreglo2, resultadoDados){
    for (i=0; i<1000; i++){
        resultadoDados[i]=arreglo1[i]+arreglo2[i]
    }
}

function contarCantidadDeCongruencias (arreglo, numeroBuscado){
    let contador=0;
    for (i=0; i<1000; i++){
        if (arreglo[i]==numeroBuscado) {
            contador++;
        }
    }
    return contador;
}



let dado1= new Array (1000);
let dado2= new Array (1000);
let resultadoDados = new Array (1000);

function ejercicioContar7 () {      
    cargarArreglo (dado1);
    cargarArreglo (dado2);
    sumarDados (dado1,dado2, resultadoDados);
    contarCantidadDeCongruencias (resultadoDados,7);
    document.getElementById("cantidadDe7").innerHTML = "La cantidad de 7 encontrados son: "+contarCantidadDeCongruencias (resultadoDados,7)+".";
}      





