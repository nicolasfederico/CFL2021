import * as RLS from "readline-sync";
import GestorRuleta from "./gestorRuleta";
import GestorTragamonedas from "./gestorTragamonedas";


console.log (">>>>>>>>>>>Bienvenido al Casino <<<<<<<<<<<< \n")

let gestorTragamonedas: GestorTragamonedas = new GestorTragamonedas ();
let gestorRuleta: GestorRuleta = new GestorRuleta ();

console.log ("A continuación elegí que juego querés jugar: \n 1 - Tragamonedas \n 2 - Ruleta \n 3 - Turf ")

let opcion: string = RLS.question('Ingresa una opcion, X para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case '1': {
            gestorTragamonedas.iniciarTragamonedas();
            break;
        }
        case '2': {
            gestorRuleta.iniciarRuleta();
            break;
        }
    }
    opcion = RLS.question('Ingresa una opcion, X para finalizar: ').toUpperCase();
}