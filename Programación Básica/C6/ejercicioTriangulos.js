let read=require('readline-sync');
let base=read.questionInt("Ingrese la base: ");
let altura=read.questionInt("Ingrese la altura: ");

function calcularArea (base, altura){
    let area=(base*altura)/2;
    return area;
}

console.log ("El area del triangulo es: "+ calcularArea(base, altura));