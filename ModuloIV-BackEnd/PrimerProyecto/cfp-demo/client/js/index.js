"use strict";


let btnEjercicio1 = document.querySelector("#btnEjercicio1")
let btnEjercicio2 = document.querySelector("#btnEjercicio2")
let btnEjercicio3 = document.querySelector("#btnEjercicio3")


btnEjercicio1.addEventListener("click", function (e) {
    redirectEjercicio('/ejercicio1')
});

btnEjercicio2.addEventListener("click", function (e) {
    redirectEjercicio('/ejercicio2')
});

btnEjercicio3.addEventListener("click", function (e) {
    redirectEjercicio('/ejercicio3')
});




function redirectEjercicio(redirect) {
    window.location.href = redirect;
}