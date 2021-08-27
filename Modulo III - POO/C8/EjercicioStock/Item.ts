export default class Item {
    private nombre:string;
    private costo:number;

    public constructor (nombre:string, costo:number){
        this.nombre = nombre;
        this.costo = costo;
    }

    public getNombre ():string {
        return this.nombre;
    }

    public getCosto ():number {
        return this.costo
    }

}