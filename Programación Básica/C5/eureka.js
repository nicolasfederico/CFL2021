let read=require('readline-sync');
let password="eureka";
let contador=1;

let clavesolicitada = read.question("Escriba la clave: ");

while ((clavesolicitada!=password) && (contador<=2)){
    clavesolicitada = read.question ("Clave incorrecta, ingrese nuevamente la clave: ");
    contador=contador+1;
    if ((clavesolicitada!=password) && (contador==3)) {
        console.log ("Agotaste tus 3 intentos de acertar, la cuenta ha sido bloqueada.");
    }
}

