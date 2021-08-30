"use strict";

let btnadd=document.querySelector("#btn-add");
btnadd.addEventListener("click", agregarTarea);

let btnclear= document.querySelector("#btn-clear");
btnclear.addEventListener("click", limpiarLista)


let btnInicio = document.querySelector("#btnInicio")
let btnEjercicio1 = document.querySelector("#btnEjercicio1")
let btnEjercicio3 = document.querySelector("#btnEjercicio3")

function agregarTarea() {
    let tarea = document.querySelector("#entrada-tarea");
    let items = document.querySelector("#items");
    items.innerHTML +="<li>" + tarea.value + "</li>";
}

function limpiarLista() {
   items.innerHTML = ""; 
}


btnEjercicio1.addEventListener("click", function (e) {
    redirectEjercicio('/ejercicio1')
});

btnEjercicio3.addEventListener("click", function (e) {
    redirectEjercicio('/ejercicio3')
});

btnInicio.addEventListener("click",function(e) {
    redirectEjercicio('/');
  });

function redirectEjercicio(redirect) {
    window.location.href = redirect;
}