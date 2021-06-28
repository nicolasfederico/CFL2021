let boton= document.querySelector("#button");
    boton.addEventListener("click", mostrar);

    function mostrar() {

        for(let i=0;i<=100;i++){

            cadenaNum.innerHTML += "<li>" + i + "</li>";
        }
    }