let read=require('readline-sync');
let sueldoActual= read.questionInt("Ingrese el sueldo actual del empleado: ");
let aumentoCorrespondiente;

switch (true){
    case (sueldoActual<=15000):
        aumentoCorrespondiente=sueldoActual*0.2
        console.log ("Le corresponde un aumento de: ", aumentoCorrespondiente);
        break;
    case ((sueldoActual>15000) && (sueldoActual<=20000)):
        aumentoCorrespondiente=sueldoActual*0.1
        console.log ("Le corresponde un aumento de: ", aumentoCorrespondiente);
        break;
    case ((sueldoActual>20000)&&(sueldoActual<=25000)):
        aumentoCorrespondiente=sueldoActual*0.05
        console.log ("Le corresponde un aumento de: ", aumentoCorrespondiente);
        break;
    default:
        console.log("Su salario es mayor que $25.000 y por lo tanto no recibe ningun aumento");
}

