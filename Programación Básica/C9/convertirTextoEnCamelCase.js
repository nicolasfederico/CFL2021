let read=require('readline-sync');

let texto=new Array (20);
let resultado=new Array (20)


function cargarArreglo(arreglo){

        arreglo=read.question("Ingrese la frase: ");
    
}

function convertirEnCamelCase(texto) {
  
    for (let i=0; i<texto.length;i++){
        if (texto[i]=""){
            texto [i+1]=resultado [i]
            resultado[i]=resultado[i].toUpperCase();
        }
    }
    return resultado;
}



    cargarArreglo(texto);
    console.log (texto)
    console.log (convertirEnCamelCase(texto));
