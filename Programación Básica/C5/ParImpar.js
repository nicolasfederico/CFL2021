let read=require ('readline-sync');
let valoringresado=0;

while (valoringresado==0) {
    valoringresado=read.questionInt ("Ingrese el numero entero: ");
    if (valoringresado!=0) {
        if (valoringresado%2==0) {
            console.log ("El numero " + valoringresado+" es par.")
        }
        else {
            console.log ("El numero " + valoringresado+" es impar.")
        }
    }
}