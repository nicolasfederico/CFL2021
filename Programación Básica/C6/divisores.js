let read=require('readline-sync');
let entero=read.questionInt("Ingrese el entero: ");



function esMultiplo (dividendo, divisor){
    if ((dividendo % divisor)==0) {
        return true;
    }
    else
        return false;
}

function valorAbsoluto (entero) {
    let absoluto=0;
    if (entero<0) {
        for (entero; entero <=-1; entero++) {
            absoluto++;
        }
    return absoluto;
    }
    else {
        return entero; 
    }
}

function cantidadDeDivisores (entero) {
    
    let cantidad=0;
    for (let i=0;i<=entero; i++){
        if (esMultiplo (entero, i)==true){
            cantidad++;
        }
    }
    return cantidad;
}

console.log ("La cantidad de divisores del numero "+entero+", es: "+cantidadDeDivisores (valorAbsoluto(entero)));