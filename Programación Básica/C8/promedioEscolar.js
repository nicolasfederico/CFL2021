let read=require('readline-sync');

let cantidadDeAlumnos=read.questionInt("Ingrese la cantidad de alumnos a cargar: ");
let nombres=new Array (cantidadDeAlumnos);
let notas= new Array (3);
let seguir="y";


function promedioAnual (notas){
    let promedio=0;
    promedio=((notas[0]+notas[1]+notas[2])/3);
    return promedio;
}

function cargarArreglo(nombres, notas){
    for (let i=0; i<cantidadDeAlumnos; i++){
        nombres [i] = read.question ("Ingrese el nombre del ALUMNO ["+(i+1)+"]: ");
        let n=0;
        while (n<3){
            notas[n]=read.questionInt ("Ingrese la nota de la MATERIA ["+(n+1)+"]: ");
            n=n+1;
        }
        console.log ("El promedio del alumno, es: "+promedioAnual(notas));
    }
}

while (seguir=="y"){
    cargarArreglo(nombres,notas);
    seguir=read.question("Desea cargar otra lista de alumnos? Y/N: ")
}

