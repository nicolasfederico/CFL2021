let read=require('readline-sync');
let valor=read.questionInt("Ingrese numero: ");
let mayor=valor; 

while (!valor==0) {
    if (valor>mayor){ // Para allar el minimo acá deberia invertir el sentido del signo ">"
        mayor=valor;
    }
    valor=read.questionInt("Ingrese numero: ")
}

console.log("El máximo numero es:", mayor)