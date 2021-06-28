"use strict";

function mostrarSaludo(nombre) {
    alert("Hola "+nombre+" ! (saludo tipo 1)")    
}


function mostrarSaludo2(nombre) {
    alert ("Buen dia "+nombre+" ! (saludo tipo 2)")
}


let inputNombre = document.querySelector ("#input-nombre");

let checkbox = document.querySelector ("#checkbox");

let btn = document.querySelector ("#btn");

btn.addEventListener ("click", function (e) {
    let nombre = inputNombre.value;
    if (!checkbox.checked) {
        mostrarSaludo(nombre);
    }
    else {
        mostrarSaludo2(nombre);
    }
})