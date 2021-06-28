let readlineSync = require('readline-sync'); 

let cantidad = readlineSync.questionInt("cantidad de elementos del arreglo: ");
let cantrank = readlineSync.questionInt("cantidad de elementos del ranking: ");
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
//Cargo ordenado, uno por uno 
console.log ("Cargando la facturación de cada cliente " );
let cliente;
let fact;
let numCliente;
let i, j;

for (numCliente = 0; numCliente < cantidad; numCliente++ ) { 
    cliente = "Cliente " + (numCliente + 1);
    fact = readlineSync.questionInt("Facturacion para el Cliente " + (numCliente + 1) + ": "); 
    i = 0;
    // acá busco la posición donde encajar el cliente+facturación 
    while (i < numCliente && facturacion[i] > fact) { 
        i++; 
    };
    // en este loop corro los elementos a una posición mas a la derecha (de dercha a izquierda en el array)
    for (j = numCliente; j > i; j--) {
        clientes[j] = clientes[j-1];
        facturacion[j] = facturacion[j-1];
    };
    // asigno el elemento en la posición encontrada
    clientes[i] = cliente ;
    facturacion[i] = fact ;
    // comprobación 
    for (posicion = 0; posicion <= cantrank - 1; posicion++) {
        console.log ("(",posicion,") ",clientes[posicion], ": Facturación = [",facturacion[posicion],"] ");
    }
}
    
for (posicion = 0; posicion <= cantrank - 1; posicion++) {
    console.log ("(",posicion,") ",clientes[posicion], ": Facturación = [",facturacion[posicion],"] ");
}
    
