// arreglo de 5 elementos que se lo pidamos al usuario y lo imprimimos

let read=require('readline-sync');

function imprimirArreglo() {
    for (let i=0; (i<=4); i++) {
        console.log ("El numero en la posicion "+i+" es, "+numeros[i])
    }
}
    
let numeros = new Array (5);

for (let i=0; (i<=4); i++  ) {
    numeros[i]=read.questionInt ("Ingrese un numero, en la posicion "+i+":")
}

imprimirArreglo();