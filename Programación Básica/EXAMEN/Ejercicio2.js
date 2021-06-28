let rl=require('readline-sync');
let elem,arr,nro,ocu;
elem = rl.questionInt("Ingrese tamaño: ");
arr = new Array(elem);
cargar (arr,elem);
nro = rl.questionInt("Ingrese número: ");
ocu = metodo (arr,elem,nro);
console.log ("El número "+nro+" ... "+ocu);
mostrar(arr,elem);

function cargar (v,l) { /*carga el arreglo con numeros aleatorios del 0 al 99*/
    for (let i=0; i<l;i++)
        v[i]=Math.floor(Math.random()*100);
}

function mostrar (v,l){ /*Muestra el arreglo, concatenando los datos*/
    let c="";
    for (let i=0;i<l;i++)
        c+=v[i]+" ";
    console.log(c)
}

function metodo (v,l,n){ /* Este metodo se encarga de contar la cantidad de veces que se repite el numero en el arreglo*/
    let oc=0; //Inicie la variable en 0, para no obtener el error NaN
    for (let i=0; i<l; i++)
        if (v[i]==n)
            oc++
    return oc //Agregué el RETURN para que me devuelva un valor 
}

/*La funcion de este codigo es contar y mostrar la cantidad de veces que se repite un numero ingresado por el usuario, en un arreglo generado con una dimension
también ingresada por el usuario, el cual es cargado con valores aleatorios del 0 al 99. Además, muestra el arreglo generado

Faltan varias llaves en el código*/