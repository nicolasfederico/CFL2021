import * as RLS from "readline-sync";
import Stock from "./Stock";

let stock: Stock = new Stock ();

stock.cargarItemsTxt('items.txt', '\n');

imprimirMenu();

let opcion: string = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case '1': {
            stock.mostrarStock();
            break;
        }
        case '2': {
            stock.venderItem();
            break;            
        }
        case '3': {
            stock.mostrarVendidos();
            break;
        }
    }
    imprimirMenu();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}

function imprimirMenu (){
    console.log ("A continuacion elegi una opcion: \n 1 - Ver Stock \n 2 - Vender Articulo \n 3 - Mostrar Articulos Vendidos \n" )
}