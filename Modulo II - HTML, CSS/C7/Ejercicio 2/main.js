"use strict";

let boton = document.querySelector("#btn");

boton.addEventListener("click", invertirTexto);

function invertirTexto() {
    let texto = document.querySelector("#area-texto").value;
    let textoInvertido = new Array (texto.length);
    let p=(texto.length-1);
    for (let i=0; i<texto.length; i++ ) {
        textoInvertido[p]=texto[i]
        p--;
    }
    mostrarTexto(textoInvertido)
}



function mostrarTexto(textoInvertido) {
    let textoMostrar="";
    for (let i=0; i<textoInvertido.length; i++){
        textoMostrar = textoMostrar+textoInvertido[i];
    }      
    console.log (textoMostrar) 
}