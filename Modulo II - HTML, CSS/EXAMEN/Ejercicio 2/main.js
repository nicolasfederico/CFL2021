"use strict";

let btnadd=document.querySelector("#btn-add");
btnadd.addEventListener("click", agregarTarea);

let btnclear= document.querySelector("#btn-clear");
btnclear.addEventListener("click", limpiarLista)

function agregarTarea() {
    let tarea = document.querySelector("#entrada-tarea");
    let items = document.querySelector("#items");
    items.innerHTML +="<li>" + tarea.value + "</li>";
    tarea.value ="";
}

function limpiarLista() {
   items.innerHTML = ""; 
}
