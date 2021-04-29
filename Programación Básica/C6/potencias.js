let read=require('readline-sync');
let base=read.questionInt("Ingrese la base: ");
let potencia=read.questionInt("Ingrese la potencia: ");

function resolverPotencia (base, potencia) {
    let aux;
    if (potencia==0){
        aux=1
        return aux;
    }
    else {
        aux=base;
            for (let i=2; i<=potencia; i++) {
                aux=(aux*base)
            }
        }
        return aux;
}

if (potencia >= 0) {
    console.log("El resultado es: ", resolverPotencia(base, potencia));
}
else {
    console.log("[ERROR]: Solo se admiten potencias mayores o iguales a 0.")
}

