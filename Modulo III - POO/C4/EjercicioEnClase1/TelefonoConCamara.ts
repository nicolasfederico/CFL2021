import Telefono from "./Telefono";

class TelefonoConCamara extends Telefono {

    public constructor(prendido:boolean,carga:number) {
        super(prendido,carga);
    }

    private sacarFoto() {
        console.log ('Sacando foto...')
    }


}