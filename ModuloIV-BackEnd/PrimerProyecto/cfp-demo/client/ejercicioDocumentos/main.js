"use strict";

let btnAdd=document.querySelector("#btnAdd");
btnAdd.addEventListener ("click", agregarDoc);

let btnModerno=document.querySelector("#btnModerno");
btnModerno.addEventListener("click", getMasModerno);

let btnAntiguo=document.querySelector ("#btnAntiguo");
btnAntiguo.addEventListener("click", getMasAntiguo);

let btnSegunTema=document.querySelector ("#btnSegunTema");
btnSegunTema.addEventListener("click", function (e) {getSegunTema(tema.value);
});

let btnBorrar=document.querySelector("#btnBorrar");
btnBorrar.addEventListener ("click", limpiarLista);

let articulos = document.querySelector ("#articulos");
let MasModerno = document.querySelector("#MasModerno");
let MasAntiguo = document.querySelector("#MasAntiguo");
let ListaPorTema = document.querySelector ("#ListaPorTema");

let ListaDocumentos = [];
let ListaDocumentosAux = [];

function agregarDoc (){
    let titulo = document.querySelector("#titulo").value;
    let autor = document.querySelector("#autor").value;
    let tema =  document.querySelector("#tema").value;
    let fecha = parseInt(document.querySelector("#fecha").value);
    
    let documento = {
        titulo: titulo,
        autor: autor,
        tema: tema,
        fecha: fecha,
    };

    ListaDocumentos.push (documento); 
    ListaDocumentosAux.push (documento);  
    ListaDocumentosAux.sort(((a, b) => b.fecha - a.fecha));
    borrarCampos();
    mostrarLista();   
    
};

function mostrarLista () {
    articulos.innerHTML ="";
    for (let i=0; i<ListaDocumentos.length ; i++){
        articulos.innerHTML += "<li> Titulo: " + ListaDocumentos[i].titulo +" > Autor: "+ListaDocumentos[i].autor +
        " > Tema: "+ListaDocumentos[i].tema +" > Fecha: "+ListaDocumentos[i].fecha  +"</li>"; 
    }
};

function limpiarLista () {
    
    document.querySelector("#titulo").value = "";
    document.querySelector("#autor").value = "";
    document.querySelector("#tema").value = "";
    document.querySelector("#fecha").value = "";
    MasModerno.innerHTML = "";
    MasAntiguo.innerHTML = "";
    articulos.innerHTML= "";
    ListaDocumentos = [];
    ListaDocumentosAux = [];
    ListaPorTema.innerHTML = "";
    
};

function borrarCampos () {
    document.querySelector("#titulo").value = "";
    document.querySelector("#autor").value = "";
    document.querySelector("#tema").value = "";
    document.querySelector("#fecha").value = "";
};

function getMasAntiguo () {
  //  ListaDocumentosAux.sort(((a, b) => b.fecha - a.fecha));
    console.log (ListaDocumentos)
    console.log (ListaDocumentosAux)
    MasAntiguo.innerHTML = "El titulo más Antiguo es: "+ ListaDocumentosAux[(ListaDocumentosAux.length-1)].titulo ;
};

function getMasModerno () {
  //  ListaDocumentosAux.sort(((a, b) => b.fecha - a.fecha));
    console.log (ListaDocumentos)
    console.log (ListaDocumentosAux)
    MasModerno.innerHTML = "El titulo más Moderno es: " + ListaDocumentosAux[0].titulo;
};

function getSegunTema (tema) {
    for (let i=0; i<ListaDocumentos.length ; i++){
        if (ListaDocumentos[i].tema == tema ) {
            ListaPorTema.innerHTML += "<li> Titulo: " + ListaDocumentos[i].titulo +" > Autor: "+ListaDocumentos[i].autor +
            " > Tema: "+ListaDocumentos[i].tema +" > Fecha: "+ListaDocumentos[i].fecha  +"</li>"; 
        }
    }
};