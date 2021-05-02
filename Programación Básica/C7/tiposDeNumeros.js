let read=require('readline-sync');

let dimension=read.questionInt("Ingrese la cantidad de numeros a procesar: ");
let numeros = new Array (dimension);
let contadorPositivos=0, contadorNegativos=0, contadorCeros=0;

function ingresarNumeros (){
    for (let i=0; i<dimension; i++){
        numeros[i]=read.questionInt("Ingrese un valor: ");
    }
}



// Esta funcion clasifica los numeros dependiendo si sos negativos, 0, o positivos {
function clasificacionNumeros (numeros,i)  {
        
    switch (true) {
        case (numeros[i]<0) :
            contadorNegativos=contadorNegativos+1
            break;        
        case (numeros[i]>0):
            contadorPositivos=contadorPositivos+1
            break;
        case (numeros[i]==0) :
            contadorCeros=contadorCeros+1
            break;
    }
}    


ingresarNumeros();

for (let i=0; i<dimension;i++){
    clasificacionNumeros(numeros,i)
}

console.log("Cantidad numeros negativos: ", contadorNegativos, " ---- Cantidad numeros positivos: ", contadorPositivos, " ---- Cantidad de ceros: ", contadorCeros)