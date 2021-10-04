"use strict";

/* let params = []; */
let datos = [];
let datosComments = [];
loadPosts();
loadComments();

/* function processParams() {
    let paramString = windows.location.search.substr(1);
    let paramArray = paramString.split("&");
    for (let i = 0; i< paramArray.length; i++) {
        let auxArray = paramArray[i].split("=");
        params[auxArray[0]] = auxArray[1];
    }
}
 */
let listaDelGet = document.querySelector("#listaDelGet")
let contenedorComentarios = document.querySelector('#contenedorComentarios')

let aviso = document.querySelector("#aviso")
let avisoComment = document.querySelector('#avisoComment')

let btnGetAllComments=document.querySelector("#btnGetAllComments")
let btnGetAllPosts=document.querySelector("#btnGetAllPosts")
let btnDetallesPost= document.querySelector("#btnDetallesPost")

//Seccion Post:


let userId = document.querySelector("#userId")
let postId = document.querySelector("#postId")
let tituloPost = document.querySelector("#tituloPost")
let cuerpoPost = document.querySelector("#cuerpoPost")


let btnAddPost=document.querySelector("#btnAddPost");
let btnSearchPost=document.querySelector("#btnSearchPost");
let btnDeletePost=document.querySelector("#btnDeletePost");
let btnModifyPost=document.querySelector("#btnModifyPost");


btnAddPost.addEventListener('click', async () => {
    try {
        let post = {
            'userId': userId.value,
            'id': postId.value,
            'title' : tituloPost.value,
            'body' : cuerpoPost.value
        }
        let response = await fetch ('/posts',{
            "method": 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        });
        if (response.ok) {
            aviso.innerHTML = "Post cargado con éxito"
        } else {
            aviso.innerHTML = " Error en la carga al servidor"
        }
    } catch (error) {
        aviso.innerHTML = "Error en conexión con el servidor"
    }
})

btnDeletePost.addEventListener('click', async () => {
    try {
        let response = await fetch (`posts/${postId.value}`,{
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        });
        if (response.ok) {
            aviso.innerHTML = "Post borrado con éxito"
        } else {
            aviso.innerHTML = " Error en lectura de servidor"
        }

    } catch (error) {
        aviso.innerHTML = "Error en conexión con el servidor"
    }
})

btnSearchPost.addEventListener('click', async () => {
    try {
        let response = await fetch (`posts/${postId.value}`);
        if (response.ok) {
            aviso.innerHTML="";
            let post  = await response.json();
            userId.value = post.userId;
            tituloPost.value = post.title;
            cuerpoPost.innerHTML = post.body;      
             
        } else {
            aviso.innerHTML = "Error en la busqueda en el servidor"
        }
    } catch (error) {
        aviso.innerHTML = "<h1>" + error.message + "error </h1>"
    }
})

btnModifyPost.addEventListener('click', async () => {
    try {
        let post = {
            'userId': userId.value,
            'id': postId.value,
            'title' : tituloPost.value,
            'body' : cuerpoPost.value
        }
        let response = await fetch (`posts/${postId.value}`,{
                'method': 'PUT',
                'headers': {'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        });
        if (response.ok) {
            aviso.innerHTML = "Post modificado con éxito"
        } else{
            aviso.innerHTML = "Error en la modificacion en el servidor"
        }
    } catch (error) {
        aviso.innerHTML = error.message;
    }
})

//Sección comments


let idPost = document.querySelector("#idPost")
let commentId= document.querySelector("#commentId")
let nombreComment = document.querySelector("#nombreComment")
let emailComment = document.querySelector("#emailComment")
let cuerpoComment = document.querySelector("#cuerpoComment")


let btnAddComment=document.querySelector("#btnAddComment");
let btnSearchComment=document.querySelector("#btnSearchComment");
let btnDeleteComment=document.querySelector("#btnDeleteComment");
let btnModifyComment=document.querySelector("#btnModifyComment");


btnAddComment.addEventListener('click', async () => {
    try {
        let comment = {
            'postId': idPost.value,
            'id': commentId.value,
            'name' : nombreComment.value,
            'email': emailComment.value,
            'body' : cuerpoComment.value
        }
        let response = await fetch ('/comments',{
            "method": 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
        });
        if (response.ok) {
            avisoComment.innerHTML = "Comentario cargado con éxito"
        } else {
            avisoComment.innerHTML = " Error en la carga al servidor"
        }
    } catch (error) {
        avisoComment.innerHTML = "Error en conexión con el servidor"
    }
})

btnDeleteComment.addEventListener('click', async () => {
    try {
        let response = await fetch (`comments/${commentId.value}`,{
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        });
        if (response.ok) {
            avisoComment.innerHTML = "Comentario borrado con éxito"
        } else {
            avisoComment.innerHTML = " Error en lectura de servidor"
        }

    } catch (error) {
        avisoComment.innerHTML = "Error en conexión con el servidor"
    }
})

btnSearchComment.addEventListener('click', async () => {
    try {
        let response = await fetch (`comments/${commentId.value}`);
        if (response.ok) {
            avisoComment.innerHTML="";
            let comment  = await response.json();
            idPost.value = comment.postId
            commentId.value = comment.id
            nombreComment.value = comment.name 
            emailComment.value = comment.email
            cuerpoComment.innerHTML = comment.body
            avisoComment.innerHTML = "Comentario encontrado"
        } else {
            avisoComment.innerHTML = "Error en la busqueda en el servidor"
        }
    } catch (error) {
        avisoComment.innerHTML = "<h1>" + error.message + "error </h1>"
    }
})

btnModifyComment.addEventListener('click', async () => {
    try {
        let comment = {
            'postId': idPost.value,
            'id': commentId.value,
            'name' : nombreComment.value,
            'email': emailComment.value,
            'body' : cuerpoComment.value
        }
        let response = await fetch (`comments/${commentId.value}`,{
                'method': 'PUT',
                'headers': {'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
        });
        if (response.ok) {
            avisoComment.innerHTML = "Comentario modificado con éxito"
        } else{
            avisoComment.innerHTML = "Error en la modificacion en el servidor"
        }
    } catch (error) {
        avisoComment.innerHTML = error.message;
    }
})

//Seccion get TODOS

btnGetAllPosts.addEventListener ('click', async () =>{
    listaDelGet.innerHTML = "";
    let datosAMostrar = '';
    console.log(datos);
    for (let i=0; i<datos.length;i++) {
        datosAMostrar += `<li>${datos[i].userId} ${datos[i].id} ${datos[i].title} ${datos[i].body}</li>`
    }
    listaDelGet.innerHTML = datosAMostrar;
})

btnGetAllComments.addEventListener ('click', async () =>{
    listaDelGet.innerHTML = "";
    let datosAMostrar = '';
    for (let i=0; i<datosComments.length;i++) {
        datosAMostrar += `<li>${datosComments[i].postId} ${datosComments[i].id} ${datosComments[i].name} ${datosComments[i].email} ${datosComments[i].body}</li>`
    }
    listaDelGet.innerHTML = datosAMostrar;
})

//Seccion detalles

btnDetallesPost.addEventListener ('click', async () => {
    contenedorComentarios.innerHTML ="";
    let datosAMostrar = '';
    try {
        let response = await fetch (`posts/${postId.value}/comments`);
        if (response.ok) {
             let comentariosDePost  = await response.json();
             
             for (let i=0; i<comentariosDePost.length;i++){
                datosAMostrar += `<li>${comentariosDePost[i].postId} ${comentariosDePost[i].id} ${comentariosDePost[i].name} ${comentariosDePost[i].email} ${comentariosDePost[i].body}</li>`
             }
            contenedorComentarios.innerHTML = datosAMostrar;
             
        } else {
            aviso.innerHTML = "Error en la busqueda en el servidor"
        }
    } catch (error) {
        aviso.innerHTML = "<h1>" + error.message + "error </h1>"
    }
})

async function loadPosts() {
    try {
        let response = await fetch ('/posts');
        if (response.ok) {
            datos = await response.json()
        } else {
            contenido.innerHTML = " Error en lectura de servidor"
        }

    } catch (error) {
        contenido.innerHTML = "Error en conexión con el servidor"
    }
}

async function loadComments() {
    try {
        let response = await fetch ('/comments');
        if (response.ok) {
            datosComments = await response.json()
        } else {
            contenido.innerHTML = " Error en lectura de servidor"
        }

    } catch (error) {
        contenido.innerHTML = "Error en conexión con el servidor"
    }
}