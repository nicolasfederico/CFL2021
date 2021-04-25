let read=require('readline-sync');
let valor=read.questionInt("Ingrese un valor: ")
let contadorIngresos=0, contadorPositivos=0, porcentaje;

while (valor!==0){
    if (valor>0){
        contadorPositivos=contadorPositivos+1
    }
    contadorIngresos=contadorIngresos+1;
    valor=read.questionInt("Ingrese un valor: ");
}


porcentaje=((100/contadorIngresos)*contadorPositivos)
console.log ("La cantidad de valores mayores que 0, es: ", contadorPositivos);
console.log ("El porcentaje de positivos respecto al total es: ", porcentaje, "%");
