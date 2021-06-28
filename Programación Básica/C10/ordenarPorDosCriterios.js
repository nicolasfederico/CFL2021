let read=require('readline-sync');

let cantPersonas=read.questionInt("Ingrese la cantidad de personas a cargar: ");

let nombres = new Array (cantPersonas);
let edad = new Array (cantPersonas);
let altura = new Array (cantPersonas);

function comparar (arreglo,i,j) {
    let comparacion=0;
    if (arreglo [i]===arreglo [j]){
        comparacion = 0;
    }
    else if (arreglo [i]< arreglo [j]){
        comparacion = -1
    }
    else {
        comparacion = 1;
    }
    return comparacion;
}

function intercambiarPosicion (arreglo,i,j){
    let aux = arreglo [i]
    arreglo [i] = arreglo [j]
    arreglo [j] = aux;
}

function cargarAlAzar (arreglo,cantidad, numero) {
    let i;
    for (i=0; i<cantidad; i++){
        arreglo [i] = Math.floor ((Math.random()*numero)+1);
    }
}



function ordenarArreglo (nombres,edad,altura,cantidad){
    let i,j;
    for (i=0; i<cantidad; i++) {
        for (j=0; (j<cantidad-i-1); j++){
            if (comparar (edad, j,j+1)==1){
                intercambiarPosicion(altura,j,j+1);
                intercambiarPosicion(nombres,j,j+1);
                intercambiarPosicion(edad,j,j+1);
            }
            else if ((comparar (edad,j,j+1)==0)&&(comparar (altura,j,j+1)==1)){
                intercambiarPosicion(altura,j,j+1);
                intercambiarPosicion(nombres,j,j+1);
                intercambiarPosicion(edad,j,j+1);
            }
        } 
    }
}

function imprimirArreglo (nombres, edad,altura){
    for (i=0; i< cantPersonas; i++){
        console.log (nombres[i]+" tiene: "+edad [i]+" y mide: "+altura[i]);
    }
}


function cargarArreglos (nombres,edad,altura){
    for (let i=0; i<cantPersonas ; i++){
        nombres[i]=read.question("Ingrese el nombre de la persona numero "+(i+1)+" :")
        edad [i]=read.questionInt("Ingrese la edad: ");
        altura [i] = read.questionInt ("Ingrese la altura en cm: ")  
    }
}

cargarArreglos (nombres,edad,altura);
ordenarArreglo(nombres,edad,altura,cantPersonas);
imprimirArreglo(nombres,edad,altura);


//cargarAlAzar (edad, cantPersonas, 50);
//cargarAlAzar (altura, cantPersonas, 100);
