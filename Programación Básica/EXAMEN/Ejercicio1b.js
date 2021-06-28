let read=require('readline-sync');

let texto=read.question ("Ingrese el texto: ");  
let abecedario="abcdefghijklmnñopqrstuvwxyz"; // Agregado de la Ñ

let textoNormalizado;
function normalizarTexto(texto) {
    textoNormalizado=texto.toLowerCase().trim();
    for (let i=0; i<textoNormalizado.length; i++){
        switch (textoNormalizado) {
            case "á":
                textoNormalizado[i]="a"
                break;
            case "é":
                textoNormalizado[i]="e"
                break;
            case "í":
                textoNormalizado[i]="i"
                break;
            case "ó":
                textoNormalizado[i]="o"
                break;
            case "ú":
                textoNormalizado[i]="u"
                break;
            default:
                break;
        }
    }
}


function contarOcurrencia(texto,caracter){ 
    let contador=0;
    for (let i=0; i<texto.length; i++){
       
        if (texto[i]==caracter){
            contador=contador+1;
        }
    }
    return contador;
}

function contadorDeLetras(texto){ 
    let contador=0;

    for (let i=0; i<texto.length;i++){
        for (let p=0; p<abecedario.length; p++){ 
            if (texto[i]==abecedario[p]){
                contador++;
            }
        }
    }
    return contador;
}

normalizarTexto(texto);
console.log (textoNormalizado);

let cantidadDeLetras=contadorDeLetras(textoNormalizado); 

for (let i=0; i<abecedario.length;i++ ){
    let ocurrencia=contarOcurrencia(textoNormalizado,abecedario[i]); 
    if (ocurrencia!=0){ 
        console.log ('La letra '+(abecedario[i])+" aparece: "+ ocurrencia +" vez/veces y con un porcentaje de: "+(ocurrencia*100)/cantidadDeLetras+"%.")
    }
}

