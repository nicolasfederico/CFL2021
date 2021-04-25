let read=require('readline-sync');
let valor=read.questionInt("Ingrese valor: ");
let maximo=valor, minimo=valor, cantidadValores=0, suma=0;

while (valor!==0){
    if (maximo<valor){
        maximo=valor;
    }
    if (minimo>valor){
        minimo=valor;
    }
    cantidadValores=cantidadValores+1
    suma=suma+valor;
    valor=read.questionInt("Ingrese valor: ");
}

console.log("Maximo valor: ",maximo,"--- Minimo valor: ", minimo, "--- Promedio: ", (suma/cantidadValores));