let read=require('readline-sync');
let nombre="a";

while (nombre!==" "){
    
    nombre=read.question("Ingrese el nombre del alumno: ");
    let nota1=read.questionInt("Ingrese la nota de la parte practica: ");
    let nota2=read.questionInt("Ingrese la nota de la parte de problemas: ");
    let nota3=read.questionInt("Ingrese la nota de la parte teorica: ");


    if (((nota1>=0) && (nota1<=10)) && ((nota1>=0) && (nota1<=10)) && ((nota1>=0) && (nota1<=10))){

        let influencianota1=(nota1*0.1)
        let influencianota2=(nota2*0.5)
        let influencianota3=(nota3*0.4) 

        console.log ("Nota final es: ", (influencianota1+influencianota2+influencianota3));

    }
    else{
        
        console.log ("Ingresaste mal una nota.")
       
    }
}