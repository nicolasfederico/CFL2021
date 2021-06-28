let read=require('readline-sync');
let dia=read.questionInt("Ingrese numero de dia: ")
let mes=read.questionInt("Ingrese numero de mes: ");
let anio=read.questionInt("Ingrese anio: ");
let cantidadDeDiasSegunMeses=[31,28,31,30,31,30,31,31,30,31,30,31] // Cargo los dias de los meses


function esBisiesto (anio){
    if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)){ // Metodo para sacar si el anio es bisiesto o no.
        return true;
    }
    else
        return false;
}

function calcularDiasRestantes (mes,dia) {
    let contadorDias=0;
    if (esBisiesto (anio)) {
        cantidadDeDiasSegunMeses[1]=cantidadDeDiasSegunMeses[1]+1 // Le agrego un dia al mes de Febrero
        console.log("El anio introducido es BISIESTO.");
    }
    for (let i=11; i>mes-1;i--) {
        contadorDias=contadorDias+cantidadDeDiasSegunMeses[i] // cuento los dias que quedan hasta fin de año, a partir del mes siguiente
    } 
    contadorDias=contadorDias+(cantidadDeDiasSegunMeses[(mes-1)]-(dia)) // le sumo a los dias anteriores, los dias restantes para terminar el mes en curso
    return contadorDias+1 // Le sumo 1, para contar el dia en el cual estoy parado
}



console.log ("La cantidad de dias restantes hasta fin de año es: "+calcularDiasRestantes(mes,dia)) // Imprimo la informacion