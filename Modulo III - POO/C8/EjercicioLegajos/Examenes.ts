import gestorArchivos from './gestorArchivos'

export default class Examenes {
    private dni:number;
    private notas:number[];

    public constructor (dni:number) {
        this.dni = dni;
        this.notas = [];
    }

    public getNotas():number[]{
        return this.notas;
    }

    public getDni(): number {
        return this.dni;
    }

  /*   public getPromedio():number {
        let promedio: number;
        let suma: number=0;
        for (let i=0; i<this.notas.length; i++){
            suma += this.notas[i];
        }
        return promedio = (suma/this.notas.length);
    }     */

}