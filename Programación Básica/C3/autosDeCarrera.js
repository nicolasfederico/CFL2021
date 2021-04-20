let read = require('readline-sync');
let vuelta1 = read.questionInt("ingrese la vuelta 1: ");
let vuelta2 = read.questionInt("Ingrese la vuelta 2: ");
let vuelta3 = read.questionInt("Ingrese la vuelta 3: ");
let vuelta4 = read.questionInt("Ingrese la vuelta 4: ");
let tiempoTotal = vuelta1+vuelta2+vuelta3+vuelta4;
console.log ("El tiempo total es:" , tiempoTotal);
console.log ("El tiempo promedio es: ", tiempoTotal/4);