"use strict";

let btn=document.querySelector("#boton") 
btn.addEventListener("click", cambiarEstilo);
let div=document.querySelector(".div-aleatorio");

function cambiarEstilo() {
        div.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)},${aleatorio(0,255)})`;
        div.style.marginLeft = `${aleatorio(0,180)}px`;
        div.style.marginTop = `${aleatorio(0,180)}px`;
        div.style.marginRigth= `${aleatorio(0,180)}px`;
        div.style.marginBotton= `${aleatorio(0,180)}px`;
}



function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
}