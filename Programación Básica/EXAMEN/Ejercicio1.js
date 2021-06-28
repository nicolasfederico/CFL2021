let read=require('readline-sync');

let texto=read.question ("Ingrese el texto: ");  //Se le pide al usuario que ingrese el texto a analizar.
let abecedario="abcdefghijklmnopqrstuvwxyz"; // Guarde el abecedario en un string para poder utilizarlo para comparar luego


function contarOcurrencia(texto,caracter){ /*en esta funcion comparo cada letra del abecedario con cada posicion en el string del texto; y si son iguales, incrementa el contador en 1
    Para realizar esto primero paso todo el texto a minusculas y luego borro espacios innecesarios al comienzo y al final del texto*/
    let contador=0;
    let textoLocal= texto.toLowerCase().trim();
    for (let i=0; i<texto.length; i++){
        if (textoLocal[i]==caracter){
            contador=contador+1;
        }
    }
    return contador;
}

function contadorDeLetras(texto){ /*Esta funcion lo que hace es contar la cantidad de letras que hay en un texto (ignorando espacios, puntos y demas cosas que no
    pertenezcan al abecedario)*/
    let contador=0;
    let textoLocal = texto.toLowerCase().trim(); //Paso a minusculas y borro espacios al comienzo y al final si existiesen para comparar
    for (let i=0; i<textoLocal.length;i++){
        for (let p=0; p<abecedario.length; p++){ // Comparo con el abecedario para no contar otra cosa que no sean carácteres de letras
            if (textoLocal[i]==abecedario[p]){
                contador++;
            }
        }
    }
    return contador;
}

let cantidadDeLetras=contadorDeLetras(texto); //Calculo la cantidad de letras

for (let i=0; i<abecedario.length;i++ ){
    let ocurrencia=contarOcurrencia(texto,abecedario[i]); //guardo el return de esta funcion en la variable ocurrencia, ya que la uso varias veces mas abajo.
    if (ocurrencia!=0){ // esta comparacion es para no spamear la consola con letras que no aparecen en el texto
        console.log ('La letra '+(abecedario[i])+" aparece: "+ ocurrencia +" vez/veces y con un porcentaje de: "+(ocurrencia*100)/cantidadDeLetras+"%.")
    }
}


/*Estoy seguro que esta solucion no es la más eficiente ya que tiene un numero de iteracion exponencial, pero es lo que pude resolver con mis conocimientos
hasta ahora*/
