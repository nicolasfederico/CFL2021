let read=require('readline-sync');
let valor1=read.questionInt("Ingrese el numero: ");
let valor2=read.questionInt("Ingrese hasta que numero: ");

for (let i=1;i<=valor2;i++){
    console.log(valor1, "x" ,i , " = " , (valor1*i));
}