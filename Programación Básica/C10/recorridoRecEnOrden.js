function imprimirArregloRec(arreglo,indice,largo) {
    if (indice<=largo){
        console.log ("posicion ", indice, " tiene:", imprimirArregloRec(arreglo,indice+1, largo));
    };
    return arreglo[indice-1];
}

let arreglo = new Array(1,2,3,4,5)

imprimirArregloRec (arreglo,0,4);