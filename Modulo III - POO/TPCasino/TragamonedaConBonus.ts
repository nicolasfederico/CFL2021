import Tragamoneda from "./Tragamoneda";
import * as RLS from "readline-sync";
import Jugada from "./JugadaAleatoria"

export default class TragamonedaConBonus extends Tragamoneda {
    private bonus:number[];

    public constructor (pozoTotal:number, cantRodillos:number, apuesta:number){
        super (pozoTotal, cantRodillos, apuesta)
        this.bonus = [];
    }

    public aplicarBonus():void {
        let opcion = RLS.question ("Desea usar el BONUS? Ingrese Y, para hacer uso de este: ").toUpperCase();
        if (opcion =="Y") {
            let jugada: Jugada = new Jugada ();
            this.bonus = jugada.generarJugada (1,1,2)
            console.log (">>>>>>>Jugando el Bonus!!<<<<<<<")
            if (this.bonus[0] == 1) {
                console.log ("FELICITACIONES, el premio ha sido duplicado!")
            }
            else {
                console.log ("HAS PERDIDO, el premio se redujo a la mitad");
            }
        }
    }
}