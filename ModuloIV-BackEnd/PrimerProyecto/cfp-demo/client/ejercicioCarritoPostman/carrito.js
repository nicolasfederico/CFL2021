"use strict";

let btnAdd=document.querySelector("#btnAdd");
btnAdd.addEventListener ("click", agregarItem)

let btnSumar=document.querySelector("#btnSumar");
btnSumar.addEventListener("click", sumarItems);

let btnBorrar=document.querySelector ("#btnBorrar");
btnBorrar.addEventListener("click", limpiarLista)

let btnBuscar=document.querySelector ("#btnBuscar");
btnBuscar.addEventListener("click", buscar)

let carrito = [];

function agregarItem (){
    let item = document.querySelector("#item").value;
    let precio = parseInt(document.querySelector("#precio").value) ;
    let articulo = {
        producto_nombre: item,
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
        articulos.innerHTML += "<li> Producto: " + carrito[i].producto_nombre+" > Precio: "+carrito[i].precio +"</li>"; 
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


async function load() {
    
    let container = document.querySelector("#articulos");
    container.innerHTML = "<h1> Loading...</h1>";
    try {
        let response = await fetch ("/productos-postman");
        if (response.ok) {
            let t = await response.json();
            //let v = JSON.stringify(t);
            carrito = t
            container.innerHTML = ""; 
            for (let i=0; i<carrito.length; i++){
                container.innerHTML += "<li> Producto: " + carrito[i].nombreProducto +" > Precio: "+carrito[i].precio +" > Descripción: "+carrito[i].idProducto+"</li>"; 
            }
        }
        else
            container.innerHTML = "<h1> Error - Failed URL!</h1>";
    }
    catch (err) {
        container.innerHTML = "<h1>"+ err.message+ "error</h1>";
    };
}


async function buscar() {

    let containerResultado = document.querySelector("#articuloBuscado")
    let id = parseInt(document.querySelector("#id").value)
    try {
    let response = await fetch ( `/productos-postman/${id}`);
        if (response.ok) {
            let t = await response.json();
            let producto = t
            console.log (producto)
            containerResultado.innerHTML = "Producto: " + producto.nombreProducto +" - Precio: "+producto.precio +" - Descripción: "+producto.idProducto; 
        } else
        containerResultado.innerHTML = "<h1> Error - Failed URL!</h1>";
    }
    catch (err) {
        containerResultado.innerHTML = "<h1>"+ err.message+ "error</h1>"; 
    }
}


load ();