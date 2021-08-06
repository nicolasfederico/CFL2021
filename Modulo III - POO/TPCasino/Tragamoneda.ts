import Jugada from "./JugadaAleatoria"

export default class Tragamoneda {
    protected pozo: number;
    protected cantRodillos: number;
    protected apuesta: number;
    protected jugada: Jugada;

    public constructor (pozoTotal:number, cantRodillos:number,apuesta:number){
        this.pozo = pozoTotal;
        this.cantRodillos= cantRodillos;
        this.apuesta = apuesta;
        this.jugada = new Jugada ();
    }

    public jugar ():boolean{
        let estado:boolean = false;
        let jugadaMaquina:number[] = this.jugada.generarJugada(this.cantRodillos,0,1);
        console.log (jugadaMaquina);
        for (let i=0; i<this.cantRodillos; i++){
            if ((jugadaMaquina[0]==jugadaMaquina[(i)])){
                estado = true;
            }
            else {
                estado = false;
                return estado;
            }
        }
        return estado;
    }

    public getPozo ():number {
        return this.pozo;
    }

    public getApuesta():number {
        return this.apuesta;
    }

    public getCantRodillos():number {
        return this.cantRodillos;
    }
}


    