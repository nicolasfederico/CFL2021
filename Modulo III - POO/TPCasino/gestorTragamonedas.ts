import Tragamoneda from "./Tragamoneda";
import TragamonedaConBonus from "./TragamonedaConBonus";
import Archivo from "./gestorArchivos";
import * as RLS from "readline-sync";
import Usuario from "./Usuario"


export default class GestorTragamonedas {

    private tragamonedaClasico : Tragamoneda;
    private tragamonedaPlus: TragamonedaConBonus;
    private filetxt: Archivo ;
    private user: Usuario;

    public constructor () {
        this.user = new Usuario ();
        this.filetxt = new Archivo ();
        let datosTragamonedas:string[] = this.filetxt.LeerArchivo("./tragamonedasCfg.txt", "\n");
        let propiedadesTragamoneda:string[] = [];
        propiedadesTragamoneda = datosTragamonedas[0].split(";");
        this.tragamonedaClasico = new Tragamoneda (parseInt(propiedadesTragamoneda[0]),parseInt(propiedadesTragamoneda[1]),parseInt(propiedadesTragamoneda[2]))
        propiedadesTragamoneda = datosTragamonedas[1].split(";");
        this.tragamonedaPlus = new TragamonedaConBonus (parseInt(propiedadesTragamoneda[0]),parseInt(propiedadesTragamoneda[1]),parseInt(propiedadesTragamoneda[2]))
    }


    public iniciarTragamonedas ():void {
        let tipoTragamoneda:number = RLS.questionInt (">>>>>>>>>>>>>>>>Bienvenido al juego de Tragamoneda<<<<<<<<<<<<<<<<<<\nIngrese 1 para jugar al Tragamonedas CLASICO (Valor de apuesta: $"+this.tragamonedaClasico.getApuesta()+")"+"\nIngrese 2 si desea jugar al Tragamonedas CON BONUS (Valor de apuesta: $"+this.tragamonedaPlus.getApuesta()+")")
        
        this.user.aumentarMontoAcumulado(RLS.questionInt ("Ingresá tu dinero a jugar: "))

        switch (tipoTragamoneda) {
            case 1: {
                if (this.user.getMontoAcumulado()<this.tragamonedaClasico.getApuesta()){
                    console.log ("Usted necesita introducir un monto mayor o igual a la apuesta requerida: "+this.tragamonedaClasico.getApuesta())
                } else {
                    let opcion = RLS.question ("----- Va a jugar al Tragamonedas Clasico ----- Ingrese Y, para continuar: ").toUpperCase();
                    let premio = false;
                    while ((opcion  == "Y")&&(this.user.getMontoAcumulado()>=this.tragamonedaClasico.getApuesta())) {
                        premio = this.tragamonedaClasico.jugar();
                        if (premio) {
                            console.log("HAS SIDO GANADOR DE UN POZO TOTAL DE: $", this.tragamonedaClasico.getPozo(),", FELICITACIONES!")
                            this.filetxt.EscribirArchivo("./logTragamonedas.txt","CLASICO: Ganó")
                            this.user.aumentarMontoAcumulado(this.tragamonedaClasico.getPozo())
                            console.log ("Su monto total ahora es de: $ "+this.user.getMontoAcumulado())
                            opcion = RLS.question ("deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase();
                            
                        }
                        else {                        
                                this.filetxt.EscribirArchivo("./logTragamonedas.txt","CLASICO: Perdió")
                                this.user.disminuirMontoAcumulado(this.tragamonedaClasico.getApuesta());
                                console.log ("Su monto total ahora es de: $ "+ this.user.getMontoAcumulado())
                                opcion = RLS.question ("No hay ganador :( , deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase(); 
                        }
                    }
                }
                break;
            }
            case 2: {
                if (this.user.getMontoAcumulado()<this.tragamonedaPlus.getApuesta()){
                    console.log ("Usted necesita introducir un monto mayor o igual a la apuesta requerida: "+this.tragamonedaPlus.getApuesta())
                } else {
                    let opcion = RLS.question ("----- Va a jugar al Tragamonedas Con Bonus ----- Ingrese Y, para continuar: ").toUpperCase();
                    let premio = false;
                    while ((opcion  == "Y") &&(this.user.getMontoAcumulado()>=this.tragamonedaPlus.getApuesta())) {
                        premio = this.tragamonedaPlus.jugar();
                        if (premio) {
                            console.log("HAS SIDO GANADOR DE UN POZO TOTAL DE: $", this.tragamonedaPlus.getPozo(),", FELICITACIONES!")
                            this.filetxt.EscribirArchivo("./logTragamonedas.txt","PLUS: Ganó")
                            this.user.aumentarMontoAcumulado(this.tragamonedaPlus.getPozo())
                            console.log ("Su monto total ahora es de: $ "+this.user.getMontoAcumulado())
                            opcion = RLS.question ("deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase();
                        }
                        else {
                            this.filetxt.EscribirArchivo("./logTragamonedas.txt","PLUS: Perdió")
                            this.user.disminuirMontoAcumulado(this.tragamonedaPlus.getApuesta());
                            console.log ("Su monto total ahora es de: $ "+ this.user.getMontoAcumulado())
                            opcion = RLS.question ("No hay ganador :( , deseas seguir apostando? Ingresa Y, para seguir jugando: ").toUpperCase();
                            
                        }
                    }
                }
                break;            
            }
        }
    }
}