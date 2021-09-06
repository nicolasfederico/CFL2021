let compras = [];

async function load() {
    
    let container = document.querySelector("#app");
    container.innerHTML = "<h1> Loading...</h1>";
    try {
        let response = await fetch ("mock.json");
        if (response.ok) {
            let t = await response.json();
            //let v = JSON.stringify(t);
            compras = t.compras;
            container.innerHTML = ""; 
            for (let i=0; i<compras.length; i++){
                container.innerHTML += "<li> Producto: " + compras[i].producto +" > Precio: "+compras[i].precio +"</li>"; 
            }
        }
        else
            container.innerHTML = "<h1> Error - Failed URL!</h1>";
    }
    catch (err) {
        container.innerHTML = "<h1>"+ err.message+ "error</h1>";
    };
}

load ();


