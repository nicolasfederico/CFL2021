let read=require('readline-sync');
let precioProducto= read.questionInt ("Ingrese precio del producto: ");
let descuento= read.questionInt("Ingrese el porcentaje de descuento: ");
let factorDescuento = (100-descuento)/100;
let precioFinal= precioProducto * factorDescuento;
console.log ("El Precio Final del producto es: ", precioFinal);