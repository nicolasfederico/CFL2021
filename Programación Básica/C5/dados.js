let read=require('readline-sync');

let cantidadDeDados=read.questionInt("Ingrese cantidad de dados: ");
let probabilidad=6**cantidadDeDados;
console.log ("Tu probabilidad de sacar todos 6 es de: 1/",probabilidad);