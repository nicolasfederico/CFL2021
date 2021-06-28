let read=require('readline-sync');


let v1=new Array (3)
let v2=new Array (3)
let v3=new Array (3)
let v4=new Array (3)
let resultado1=new Array (3)
let resultado2=new Array (3)
let resultadofinal=new Array (3)



v1=[1,2,3];
v2=[4,5,6];
v3=[2,1,2];
v4=[1,2,1];


function multiplicarArreglo (arreglo1,arreglo2,resultado){
    for(let i=0; i<3;i++){
        resultado[i]=(arreglo1[i]*arreglo2[i]);
    }
}

multiplicarArreglo (v1,v2,resultado1)
multiplicarArreglo (v3,v4,resultado2)
multiplicarArreglo (resultado1,resultado2, resultadofinal);

console.log ("El vector final resultado es: ",resultadofinal);