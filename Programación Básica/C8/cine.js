let read=require('readline-sync');

let cantidadDeButacas=10 ;
let butacasCine=new Array (cantidadDeButacas);
let contadorDesocupadas=0;

function getRandom(){
    let random=Math.random();
    if (random > 0.5) {
        random=1;
    }
    else {
        random=0;
    }
    return random;
}

function cargarArreglo (butacasCine) {
    for (let i=0;i<cantidadDeButacas;i++){
        butacasCine[i]=getRandom(); //read.questionInt("Ingrese valor logico en la butaca "+(i+1)+" :");
    }
}

cargarArreglo (butacasCine);

for (let i=0;i<cantidadDeButacas;i++){
    if (butacasCine[i]==0) {
        contadorDesocupadas++;
    }
}


console.log (butacasCine);
console.log ("La cantidad de butacas desocupadas son: ", contadorDesocupadas);