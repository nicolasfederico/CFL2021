let cantidadDeButacas=10 ;
let butacasCine=new Array (cantidadDeButacas);
let contadorDesocupadas=0;

function getRandom(){
    let random=Math.random();
    if (random > 0.5) {
        random=true;
    }
    else {
        random=false;
    }
    return random;
}

function cargarArreglo (butacasCine) {
    for (let i=0;i<cantidadDeButacas;i++){
        butacasCine[i]=getRandom(); 
    }
}

cargarArreglo (butacasCine);

for (let i=0;i<cantidadDeButacas;i++){
    if (butacasCine[i]==false) {
        contadorDesocupadas++;
    }
}


console.log (butacasCine);
console.log ("La cantidad de butacas desocupadas son: ", contadorDesocupadas);