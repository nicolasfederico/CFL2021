import nombreRandom from "project-name-generator";
import JugadaAleatoria from "./JugadaAleatoria";

export default class caballosTurf {
    private nombre:string;
    private loQuePaga:number;
    private pagaAleatoria: JugadaAleatoria;

    public constructor (){

        this.nombre = nombreRandom().spaced;
        this.pagaAleatoria = new JugadaAleatoria();
        this.loQuePaga = this.pagaAleatoria.numeroRandomConDecimales(1,15);

    }

    public getNombre ():string {
        return this.nombre;
    }

    public getPaga ():number {
        return this.loQuePaga
    }
}