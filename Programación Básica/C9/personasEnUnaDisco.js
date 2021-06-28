let capacidad=270;
let personas=new Array (capacidad);
let menores=0;
let mayores=0;

function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * (mayorValor - menorValor)) + menorValor;
}

function cargarArreglo(arreglo){
    for (let i=0; i<arreglo.length;i++){
        arreglo[i]=aleatorio(18,40);
    }
    return arreglo;
}


cargarArreglo (personas);

for (let i=0; i<capacidad;i++){
    if (personas[i]<21){
        menores++;
    }
    else  {
        mayores++;
    }
}

console.log (personas);
console.log ("La cantidad de menores es: ",menores," La cantidad de mayores es de: ", mayores," La cantidad total de personas es: ",capacidad);