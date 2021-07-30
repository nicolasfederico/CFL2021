import Ruleta from "./Ruleta";
import * as RLS from "readline-sync";
import GestorArchivos from "./gestorArchivos";
import Usuario from "./Usuario";

export default class GestorRuleta {
    private ruleta:Ruleta;
    private archivo:GestorArchivos;
    private user: Usuario;

    public constructor () {
        this.ruleta = new Ruleta ();
        this.archivo = new GestorArchivos ();
        this.user = new Usuario ();
    }


    
    
    public iniciarRuleta ():void {
        
        this.user.aumentarMontoAcumulado (RLS.questionInt ("Ingresa el monto para comprar fichas: "))
        console.log ("A continuación elegí que opción querés jugar: \n 1 - Pleno \n 2 - Par/Inpar \n 3 - Color: ")
        
        let opcion: string = RLS.question('Ingresa una opcion, X para salir: ').toUpperCase();
        while (opcion != 'X') {
            
            switch (opcion) {
                case "1": {
                    this.ruleta.tirarRuleta();
                    let apuestaElegida:number = RLS.questionInt ("Ingrese el pleno: ")
                    let montoApuesta:number = RLS.questionInt ("Ingresa el monto a apostar el pleno: ")
                    console.log ("Salio el numero: "+this.ruleta.getNumero());
                    if (this.ruleta.getNumero()==apuestaElegida){
                        console.log ("Felicitaciones, GANASTE!\nTu premio es de: $"+(montoApuesta*35))
                        this.user.aumentarMontoAcumulado((montoApuesta*35));
                        console.log ("Tenes en total: $"+this.user.getMontoAcumulado())
                        this.archivo.EscribirArchivo("./logRuleta.txt","RULETA: Ganó en pleno")

                    } else {
                        this.jugadaPerdedora("Color", montoApuesta);
                    }
                break;
                }
                case "2": {
                    this.ruleta.tirarRuleta();
                    let apuestaElegida:string = RLS.question ("Escribi PAR si queres jugar al PAR, o IMPAR si queres lo contrario: ").toUpperCase();
                    let montoApuesta:number = RLS.questionInt("Ingresa el monto de tu apuesta: ")
                    let esPar: boolean;
                    console.log ("Salio el numero: "+this.ruleta.getNumero());
                    if (apuestaElegida=="PAR") {
                        esPar = true;
                    } else {
                        esPar = false;
                    }

                    if (this.ruleta.getPar()==esPar) {
                        console.log ("Felicitaciones, GANASTE!\nTu premio es de: $"+montoApuesta)
                        this.user.aumentarMontoAcumulado(montoApuesta);
                        console.log ("Tenes en total: $"+this.user.getMontoAcumulado())
                        this.archivo.EscribirArchivo("./logRuleta.txt","RULETA: Ganó en Par/Impar")
                    } else {
                        this.jugadaPerdedora("Par/Impar", montoApuesta);
                    }
                }
                case "3": {
                    this.ruleta.tirarRuleta();
                    let apuestaElegida:string = RLS.question ("Escribi ROJO si queres jugar al ROJO, o NEGRO si queres lo contrario: ").toUpperCase();
                    let montoApuesta:number = RLS.questionInt("Ingresa el monto de tu apuesta: ")
                    console.log ("Salio el numero: "+this.ruleta.getNumero());
                    if (this.ruleta.getColor()==apuestaElegida) {
                        console.log ("Felicitaciones, GANASTE!\nTu premio es de: $"+montoApuesta)
                        this.user.aumentarMontoAcumulado(montoApuesta);
                        console.log ("Tenes en total: $"+this.user.getMontoAcumulado())
                        this.archivo.EscribirArchivo("./logRuleta.txt","RULETA: Ganó en Color")
                    } else {
                        this.jugadaPerdedora("Color", montoApuesta);
                        
                        /* console.log ("Perdiste :(")
                        this.user.disminuirMontoAcumulado(montoApuesta);
                        console.log ("Te quedan: $"+this.user.getMontoAcumulado())
                        this.archivo.EscribirArchivo("./logRuleta.txt","RULETA: Perdio en Color")
                        opcion = RLS.question ("Si queres salir ingresa X: "); */
                    }
                }
                default:
                   opcion = "X";
                break;
            }
        }
    }

    jugadaPerdedora(textoArchivo:string, montoApuesta:number):string {
        let opcion:string;
        console.log ("Perdiste :(")
        this.user.disminuirMontoAcumulado(montoApuesta);
        console.log ("Te quedan: $"+this.user.getMontoAcumulado())
        this.archivo.EscribirArchivo("./logRuleta.txt",`RULETA: Perdio en ${textoArchivo}`)
        return opcion = RLS.question ("Si queres salir ingresa X: ");
    }
} 