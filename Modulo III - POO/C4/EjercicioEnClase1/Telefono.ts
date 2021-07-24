export default class Telefono {
    protected estaPrendido:boolean;
    protected bateriaActual: number;

    public constructor (prendido:boolean, carga: number) { 

        this.estaPrendido= prendido;
        this.bateriaActual= carga;
        
    }


    public mandarMensaje() {
        
    }

    /**
     * hacerLlamada
     */
    public hacerLlamada() {
        
    }

    /**
     * prenderApagar
     */
    public prenderApagar() {
        if (this.estaPrendido) {
            this.estaPrendido = false
        }
        else {
            this.estaPrendido = true
        }
    }
}