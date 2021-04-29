let read=require('readline-sync');
let dividendo=read.questionInt("Ingrese el dividendo: ");
let divisor=read.questionInt("Ingrese el divisor: ");


function esMultiplo (dividendo, divisor){
    if ((dividendo % divisor)==0) {
        return true;
    }
    else
        return false;
}

console.log ("Son multiplos: ", esMultiplo (dividendo, divisor) );

