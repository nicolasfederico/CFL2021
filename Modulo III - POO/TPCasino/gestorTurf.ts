import Turf from "./Turf";
import * as RLS from "readline-sync";
import JugadaAleatoria from "./JugadaAleatoria";
import GestorArchivos from "./gestorArchivos";
import Usuario from "./Usuario";

export default class gestorTurf {
    private apuesta: number;
    private MontoApuesta: number;
    private carrera: Turf;
    private caballoGanador: JugadaAleatoria;
    private archivo: GestorArchivos;
    private user: Usuario;

    public constructor (){
    
        this.apuesta= 0;
        this.MontoApuesta = 0;
        this.carrera = new Turf ();
        this.caballoGanador = new JugadaAleatoria();
        this.archivo = new GestorArchivos();
        this.user = new Usuario();
    }

    private iniciarCarrera ():void{

        this.carrera.armarCarrera();
        console.log (">>>>>>>>>   Premio:   "+this.carrera.getNombreCarrera().toUpperCase()+"  <<<<<<<<<")
        for (let i = 0; i<this.carrera.getCantidadCaballos(); i++){
            let lista:string = "";
             
            lista = lista + ("N°"+(i+1)+"   ["+this.carrera.getNombreCaballo(i)+"]    > Paga: "+ this.carrera.getPagaCaballo(i)) 
            
            console.log(lista);    
        }
        

    }

    private iniciarApuestas (){
        this.apuesta = RLS.questionInt ("Ingresa el caballo al cual queres apostar: ")
        this.MontoApuesta = RLS.questionInt ("Ingresa el monto a apostar: ")
        this.user.aumentarMontoAcumulado (this.MontoApuesta);
    }

    private elegirGanador ():number{

        return this.caballoGanador.numeroRandom(1,(this.carrera.getCantidadCaballos()))

    }

    public iniciarTurf (){
        this.iniciarCarrera();
        this.iniciarApuestas();
        let ganador = this.elegirGanador ();
        console.log ("El caballo ganador es el N°"+ganador+" !")
        if (ganador == this.apuesta){
            console.log ("Felicitaciones, GANASTE!\nTu premio es de: $"+(((this.MontoApuesta*this.carrera.getPagaCaballo(ganador-1))-this.MontoApuesta)))
            this.user.aumentarMontoAcumulado((this.MontoApuesta*this.carrera.getPagaCaballo(ganador-1))-this.MontoApuesta);
            console.log ("Tenes en total: $"+this.user.getMontoAcumulado())
            this.archivo.EscribirArchivo("./logTurf.txt",`Nombre de Carrera: ${this.carrera.getNombreCarrera()} | Resultado: Ganó `)
        }
        else {
            console.log ("Perdiste :(")
            this.user.disminuirMontoAcumulado(this.MontoApuesta);
            this.archivo.EscribirArchivo("./logTurf.txt",`Nombre de Carrera: ${this.carrera.getNombreCarrera()} | Resultado: Perdió `)
        }
    }

}