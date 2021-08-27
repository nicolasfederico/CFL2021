import Vehiculo from "./vehiculo";

export default class autoDeportivo extends Vehiculo {
    
    
    public constructor () {
        super ();
    }


    public setAceleracion () {
        this.aceleracion = 110;
    }

}