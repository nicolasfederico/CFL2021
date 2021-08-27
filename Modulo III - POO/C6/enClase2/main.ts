import autoCiudad from "./autoCiudad";
import autoDeportivo from "./autoDeportivo";
import camioneta from "./camioneta";


let vehiculo1: autoCiudad;
vehiculo1 = new autoCiudad (5);

let vehiculo2: autoDeportivo;
vehiculo2 = new autoDeportivo();

let vehiculo3: camioneta;
vehiculo3 = new camioneta(1800);

console.log (vehiculo1);
vehiculo1.setAceleracion ();
console.log (vehiculo1);

console.log (vehiculo2);
vehiculo2.setAceleracion();
console.log (vehiculo2);

console.log (vehiculo3);
vehiculo3.setAceleracion();
console.log (vehiculo3);

vehiculo1.cargarPatente();