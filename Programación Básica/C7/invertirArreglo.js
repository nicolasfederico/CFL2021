let read=require("readline-sync");
let dimension=read.questionInt("Ingrese la dimension del arreglo: ");

let v=new Array (dimension)

function ingresarDatos (){
    for (let i=0;i<dimension;i++){
        v[i]=read.questionInt("Ingrese el numero en la posicion ["+i+"] del arreglo: ")
    }
}

let vInvertido=new Array (dimension);

function invertirArreglo (v, dimension){
    iInvertido=dimension-1;
    for (let i=0; i<dimension; i++){
        vInvertido[iInvertido]=v[i];
        iInvertido=iInvertido-1
    }
    return vInvertido
}

ingresarDatos();
invertirArreglo(v,dimension);
console.log ("Original: "+ v + " Invertido: "+vInvertido);