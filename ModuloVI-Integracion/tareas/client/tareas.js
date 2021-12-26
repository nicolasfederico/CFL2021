let btnAdd = document.querySelector('#btnAdd');
let btnSearch = document.querySelector('#btnSearch');
let btnDelete = document.querySelector('#btnDelete');
let btnModify= document.querySelector('#btnModify');

let idTarea = document.querySelector('#idTarea');
let nombreTarea = document.querySelector('#nombreTarea');
let estadoTarea = document.querySelector('#estadoTarea');
let aviso = document.querySelector('#aviso');

let contenido = document.querySelector('#app');
let tareas = [];

load();


async function load() {
    try {
        let response = await fetch ('/tarea');
        if (response.ok) {
            let datos = await response.json()
            tareas = datos;
            mostrar (tareas);

        } else {
            contenido.innerHTML = " Error en lectura de servidor"
        }

    } catch (error) {
        contenido.innerHTML = "Error en conexión con el servidor"
    }
}

function mostrar(arreglo) {
    contenido.innerHTML = "";
    let datos = '<ul>';
    console.log (datos);
    for (let i=0; i<arreglo.length; i++) {
        datos += `<li>${arreglo[i].idTarea} ${arreglo[i].nombreTarea} ${arreglo[i].estadoTarea?"SI":"NO"}</li>`
    }
    datos +='</ul>';
    console.log (datos);
    contenido.innerHTML = datos;
}



btnAdd.addEventListener('click', async () => {
    try {
        let tarea = {
            'nombre': nombreTarea.value,
            'estadoTarea': estadoTarea.checked
        }
        let response = await fetch ('/tarea',{
            "method": 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarea)
        });
        if (response.ok) {
            load();
            aviso.innerHTML = "Tarea cargada con éxito"
        } else {
            contenido.innerHTML = " Error en la carga al servidor"
        }
    } catch (error) {
        contenido.innerHTML = "Error en conexión con el servidor"
    }
})

btnDelete.addEventListener('click', async () => {
    try {
        let response = await fetch (`tarea/${idTarea.value}`,{
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        });
        if (response.ok) {
            load();
        } else {
            contenido.innerHTML = " Error en lectura de servidor"
        }

    } catch (error) {
        contenido.innerHTML = "Error en conexión con el servidor"
    }
})

btnSearch.addEventListener('click', async () => {
   try {
       let response = await fetch (`tarea/${idTarea.value}`);
       if (response.ok) {
            let tarea  = await response.json();
            contenido.innerHTML = `<li>${tarea.idTarea} ${tarea.nombreTarea} ${tarea.estadoTarea?"SI":"NO"}</li>`
       } else {
           contenido.innerHTML = "Error en la busqueda en el servidor"
       }
   } catch (error) {
       contenido.innerHTML = "<h1>" + error.message + "error </h1>"
   }
})