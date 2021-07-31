import caballosTurf from "./caballosTurf";
import nombreRandom from "project-name-generator";

export default class Turf {
    private nombreCarrera: string;
    private carrera: caballosTurf [];
    private cantidadDeCaballos: number;

    public constructor (){
        this.nombreCarrera = nombreRandom().spaced;
        this.carrera= [];
        this.cantidadDeCaballos = 10;
    }

    public armarCarrera ():void{
        for (let i=0; i<this.cantidadDeCaballos; i++  ){
            this.carrera[i] = new caballosTurf();
        }
    }

    public getNombreCarrera ():string {
        return this.nombreCarrera;
    }

    public getCantidadCaballos ():number {
        return this.cantidadDeCaballos;
    }

    public getNombreCaballo (posicion:number):string {
        return this.carrera[posicion].getNombre();
    }

    public getPagaCaballo (posicion:number):number {
        return this.carrera[posicion].getPaga();
    }



}
