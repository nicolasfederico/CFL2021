import Vehiculo from "./vehiculo";

export default class Auto extends Vehiculo {
    private capacidad:number;

    public constructor (marca:string, patente:string, modelo:number, año:number, precio: number, capacidad: number){
        super(marca, patente, modelo, año, precio)
        this.capacidad = capacidad;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }
}