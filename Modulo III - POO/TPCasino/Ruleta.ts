import numeroAleatorio from "./JugadaAleatoria";

export default class Ruleta {

    private color: string;
    private numeroGanador: number;
    private esPar: boolean;
    private numero: numeroAleatorio;

    public constructor () {
        this.color = "verde"
        this.numeroGanador = 0;
        this.esPar = false;
        this.numero = new numeroAleatorio();
    }


    public tirarRuleta():void {
        this.numeroGanador = this.numero.numeroRandom(0,37);
        if (this.numeroGanador!=0) {
            if ((this.numeroGanador % 2)==0) {
                this.color="negro"
                this.esPar=true;
            }
            else {
                this.color="rojo"
            }
        }

    }

    public getNumero ():number {
        return this.numeroGanador;
    }

    public getColor ():string {
        return this.color;
    }

    public getPar ():boolean {
        return this.esPar;
    }

}