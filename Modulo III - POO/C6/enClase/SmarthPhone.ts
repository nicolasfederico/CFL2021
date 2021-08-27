import Telefono from "./Telefono";

class SmarthPhone implements Telefono {

 private estaPrendido:boolean

 public constructor (){
     this.estaPrendido=true;
 }

 public prender():void {
    this.estaPrendido=true;
    console.log ("Prendiendo...")
 }

 public apagar():void {
     this.estaPrendido=false
    console.log ("Apagando...")
 }

 public llamar (numero:string):void {
     console.log ("Llamando al numero " + numero +"...")
 }

 public sacarFoto():void{
     console.log ("Sacando foto....")
 }

}

let telefono = new SmarthPhone();
console.log(telefono)
telefono.apagar();
console.log(telefono);
telefono.llamar("123456");
