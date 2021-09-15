"use strict";

let btnAdd=document.querySelector("#btnAdd");
btnAdd.addEventListener ("click", agregarCliente)



let clientes = [];


function agregarCliente (){
    let RazonSocial = document.querySelector("#RazonSocial").value;
    let Domicilio = document.querySelector("#Domicilio").value;
    let Saldo = parseInt(document.querySelector("#Saldo").value) ;
    let cliente = {
        RazonSocial: RazonSocial,
        Domicilio: Domicilio,
        Saldo: Saldo
    };
    clientes.push (cliente);   
    borrarCampos();
    mostrarLista();
}

function mostrarLista () {
    let container = document.querySelector ("#clientes")
    container.innerHTML ="";
    for (let i=0; i<clientes.length ; i++){
        container.innerHTML += "<li> Razon social: " + clientes[i].RazonSocial +" > Domicilio: "+clientes[i].Domicilio +" > Saldo: "+clientes[i].Saldo+"</li>"; 
    }
}

async function load() {
    
    let container = document.querySelector("#clientes");
    container.innerHTML = "<h1> Loading...</h1>";
    try {
        let response = await fetch ("/clientes");
        if (response.ok) {
            let t = await response.json();
            clientes = t
            container.innerHTML = ""; 
            for (let i=0; i<clientes.length; i++){
                container.innerHTML += "<li> Razon social: " + clientes[i].RazonSocial +" > Domicilio: "+clientes[i].Domicilio +" > Saldo: "+clientes[i].Saldo+"</li>"; 
            }
        }
        else
            container.innerHTML = "<h1> Error - Failed URL!</h1>";
    }
    catch (err) {
        container.innerHTML = "<h1>"+ err.message+ "error</h1>";
    };
}

function borrarCampos () {
    document.querySelector("#RazonSocial").value = "";
    document.querySelector("#Domicilio").value = "";
    document.querySelector("#Saldo").value = "";
}


load ();