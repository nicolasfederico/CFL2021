"use strict";

let btn=document.querySelector("#boton") 
btn.addEventListener("click", cambiarEstiloAutomatico);
let div=document.querySelector(".div-aleatorio");

let stop=document.querySelector("#stop")
stop.addEventListener("click", pararIntervalo);


function cambiarEstiloAutomatico() {
    let intervalo = setInterval(function(){
        div.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)},${aleatorio(0,255)})`;
        div.style.marginLeft = `${aleatorio(0,500)}px`;
        div.style.marginTop = `${aleatorio(0,500)}px`;
        let tamaño = `${aleatorio(10,400)}px`;
        div.style.width = tamaño;
        div.style.height = tamaño;
        },100);
        stop.addEventListener ("click", function (e) {
            clearInterval(intervalo);
        })
}       



function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
}

