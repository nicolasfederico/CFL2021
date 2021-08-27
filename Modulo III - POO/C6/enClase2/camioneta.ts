import Vehiculo from "./vehiculo";

export default class camioneta extends Vehiculo {
    
    private cargaMax: number
    
    public constructor ( cargaMax:number ) {
        super ();
        this.cargaMax = cargaMax;
    }


    public setAceleracion () {
        this.aceleracion = 80;
    }

    public getCargaMax (){
        return this.cargaMax
    }

}