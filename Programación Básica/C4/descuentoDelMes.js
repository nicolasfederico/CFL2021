let read=require('readline-sync');
let mes=read.questionInt("Ingrese el numero del mes: ");
let precio=read.questionInt("Ingrese el precio del producto: ");
let cantidad=read.questionInt("Ingrese la cantidad del producto: ");
let precioFinal;

if (mes==10){
    precioFinal=precio*cantidad-(precio*cantidad*0.15)
    console.log("El precio total con descuento es de: $", precioFinal);
}
else 
{
    console.log("El descuento no es aplicable ya que no es Octubre, por lo tanto el precio total es $", (precio*cantidad));
}
