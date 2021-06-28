let read=require('readline-sync');

let n=read.questionInt("Ingrese dimension del arreglo: ");


let arreglo=new Array (n)
let auxArreglo= new Array (n)


function comparar (arreglo, i,j){
    let comparacion=0;
    if (arreglo [i]==arreglo [j]) {
        comparacion = 0;
    }
    else if (arreglo [i] < arreglo [j]){
        comparacion = -1;
    }
    else {
        comparacion = 1
    }
    return comparacion;
}

function intercambiarPosicion(arreglo, j, i){
    let aux = arreglo [i];
    arreglo [i] = arreglo [j];
    arreglo [j] = aux;
}

function burbuja (arreglo,arreglo2, dimension){
    let i,j;
    let aux= new Array (dimension);
    for (i=0; i<dimension;i++){
        aux[i]=arreglo[i]
    }
    for (i=0; i<dimension;i++){
        for (j=0; j<(dimension-i-1);j++){
            if (comparar (aux,j,(j+1))==1){
                intercambiarPosicion(aux, j,(j+1))
                intercambiarPosicion(arreglo2, j,(j+1))
            }
        }
    }
}

function cargarNumerosConsecutivos (arreglo, n){
    let aux=0;
    for (let i=0; i<n; i++ ){
        arreglo [i]=aux;
        aux++;
    }
}

for (let i=0; i<n ; i++){
    arreglo [i]= read.questionInt("Ingrese un numero en la posicion "+i+" : ")
}


cargarNumerosConsecutivos(auxArreglo,n);

burbuja (arreglo,auxArreglo, n);

console.log (auxArreglo);
console.log (arreglo);
