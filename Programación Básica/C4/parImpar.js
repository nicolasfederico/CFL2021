let read=require('readline-sync');
let numeroDado= read.questionInt("Ingrese el numero: ");
let resto=numeroDado % 2

if (resto==0) {
    console.log ("El numero,", numeroDado, "es par");
     }
    
else
    console.log ("El numero," , numeroDado, "es impar");
    
if (numeroDado==0)
    {console.log ("El numero es", numeroDado, "y te lo informo")}
