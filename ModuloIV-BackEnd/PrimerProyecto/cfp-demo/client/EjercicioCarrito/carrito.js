"use strict";

let btnAdd=document.querySelector("#btnAdd");
btnAdd.addEventListener ("click", agregarItem)

let btnSumar=document.querySelector("#btnSumar");
btnSumar.addEventListener("click", sumarItems);

let btnBorrar=document.querySelector ("#btnBorrar");
btnBorrar.addEventListener("click", limpiarLista)

let carrito = [];

function agregarItem (){
    let item = document.querySelector("#item").value;
    let precio = parseInt(document.querySelector("#precio").value) ;
    let articulo = {
        item: item,
        precio: precio,
    };
    carrito.push (articulo);   
    borrarCampos();
    mostrarLista();
    
}

function sumarItems (){
    let suma = 0;
    let maximoPrecio = 0;
    for (let i=0; i<carrito.length;i++){
        suma += carrito[i].precio;
        if (maximoPrecio < carrito[i].precio){
            maximoPrecio = carrito[i].precio
        }
    }
    let sumaTotalBox = document.querySelector("#sumaTotalBox");
    sumaTotalBox.innerHTML = "La suma total es: "+suma;

    let maximo = document.querySelector("#maximo");
    maximo.innerHTML = "El maximo es: "+maximoPrecio;
}

function mostrarLista () {
    let articulos = document.querySelector ("#articulos")
    articulos.innerHTML ="";
    for (let i=0; i<carrito.length ; i++){
        articulos.innerHTML += "<li> Producto: " + carrito[i].item +" > Precio: "+carrito[i].precio +"</li>"; 
    }
}

function limpiarLista () {
    let articulos = document.querySelector ("#articulos")
    let maximo = document.querySelector("#maximo");
    let sumaTotalBox = document.querySelector("#sumaTotalBox");
    document.querySelector("#item").value = "";
    document.querySelector("#precio").value = "";
    sumaTotalBox.innerHTML = "";
    maximo.innerHTML = "";
    articulos.innerHTML= "";
    carrito = [];
    
}

function borrarCampos () {
    document.querySelector("#item").value = "";
    document.querySelector("#precio").value = "";
}