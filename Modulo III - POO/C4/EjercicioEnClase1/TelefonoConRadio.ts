import Telefono from "./Telefono";

class TelefonoConRadio extends Telefono {

    private frecuenciaActual: number; 

    public constructor (prendido:boolean,carga:number, frecuencia: number) {
        super (prendido, carga);
        this.frecuenciaActual = frecuencia;
    }

    /**
     * verFrecuenciaActual
     */
    public verFrecuenciaActual() {
        console.log (this.frecuenciaActual);
    }

}