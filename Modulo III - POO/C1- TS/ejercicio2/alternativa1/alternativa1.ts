import * as art from "ascii-art";
import * as read from "readline-sync";

let frase:string = read.question("Ingresa la frase a dibujar: ");

art.font(frase, "Doom", (err, renderer) => {
    console.log (err || renderer);
})
