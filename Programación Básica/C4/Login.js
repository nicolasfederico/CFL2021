let read=require ('readline-sync');
let usuarioDb = "Juan"; 
let claveDb = "claveJuan"; 
let usuario; 
let clave;

usuario = read.question ("Ingrese nombre de usuario: ");
clave = read.questionNewPassword("Ingrese su password: ");

if ((usuario==usuarioDb) && (clave==claveDb)){
    console.log("Bienvenido de nuevo," ,usuario,".");
}
else {
    console.log("Usuario o password incorrecto, reintente.");
}