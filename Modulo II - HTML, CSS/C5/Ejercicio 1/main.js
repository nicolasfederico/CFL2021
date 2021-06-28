let btn = document.querySelector(".btn-hidden")
btn.addEventListener ("click", hidder);
let bool=true;

function hidder() {
    let elemento = document.querySelector("#informacion")
    elemento.classList.toggle("hidden");
    if (bool===true) {
        btn.innerHTML= "Mostrar texto" 
    } else {
        btn.innerHTML= "Ocultar texto"
    }
    bool=!bool;
}




