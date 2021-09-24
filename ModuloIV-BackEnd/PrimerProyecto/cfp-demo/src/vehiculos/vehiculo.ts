export default class Vehiculo {
    protected marca:string
    protected patente:string
    protected modelo: number;
    protected año: number;
    protected precio: number;

    public constructor (marca:string, patente:string, modelo:number, año:number, precio: number) {
        marca = marca;
        patente = patente;
        modelo = modelo;
        año = año,
        precio = precio;
    }

    public getMarca():string  {
        return this.marca;
    }

    public getPatente():string {
        return this.patente;
    }

    public getModelo():number {
        return this.modelo;
    }

    public getAño():number {
        return this.año;
    }

    public getPrecio(): number {
        return this.precio;
    }

}