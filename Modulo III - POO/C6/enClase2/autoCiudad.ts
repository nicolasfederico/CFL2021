import Vehiculo from "./vehiculo";

export default class autoCiudad extends Vehiculo {
    
    private nroPuertas : number;

    public constructor (nroPuertas:number) {
        super ();
        this.nroPuertas = nroPuertas;
    }


    public setAceleracion ():void {
        this.aceleracion = 50;
    }


    public getNroPuertas () :number{
        return this.nroPuertas ;
    }
}
