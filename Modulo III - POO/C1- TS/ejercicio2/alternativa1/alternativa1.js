"use strict";
exports.__esModule = true;
var art = require("ascii-art");
var read = require("readline-sync");
var frase = read.question("Ingresa la frase a dibujar: ");
art.font(frase, "Doom", function (err, renderer) {
    console.log(err || renderer);
});
