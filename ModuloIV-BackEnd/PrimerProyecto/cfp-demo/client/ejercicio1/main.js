"use strict";


let btnInicio = document.querySelector("#btnInicio")
let btnEjercicio2 = document.querySelector("#btnEjercicio2")
let btnEjercicio3 = document.querySelector("#btnEjercicio3")


btnEjercicio2.addEventListener("click", function (e) {
    redirectEjercicio('/ejercicio2')
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