import * as RLS from "readline-sync";

export default abstract class Vehiculo {
    protected velocidad: number;
    protected color: string;
    protected patente: string;
    protected aceleracion: number;

    public constructor () {
        this.velocidad = 0;
        this.color = "";
        this.patente = "";
        this.aceleracion = 0;
    }

    abstract setAceleracion ():void ;
    
    public setColor(color:string):void {
        this.color=color;
    }

    public setVelocidad (velocidad:number):void {
        this.velocidad = velocidad;
    }
 

    private setPatente ():void {
        let opcionPatente: number;
        let ingresoPatente: string;

        opcionPatente = RLS.questionInt("Ingrese el formato de patente \n 1 - Formato NUEVO \n 2 - Formato VIEJO  \n : ")
        if (opcionPatente == 1) {
            ingresoPatente = RLS.question("Ingrese patente: ")
            if (ingresoPatente.length!==7) {
                throw new Error ("La patente debe contener 7 caracteres ")
            }
            this.patente = ingresoPatente;
        }
        else if (opcionPatente == 2) {
            ingresoPatente = RLS.question("Ingrese patente: ")
            if (ingresoPatente.length!==6) {
                throw new Error ("La patente debe contener 6 caracteres ")
            }
            this.patente = ingresoPatente;
        }
        
        
    }

    public getAceleracion ():number {
        return this.aceleracion;
    }
    
    public getColor (): string {
        return this.color;
    }

    public getVelocidad (): number {
        return this.velocidad;
    }

    public getPatente (): string {
        return this.patente
    }

    public cargarPatente ():void {
        try {
           this.setPatente(); 
        } catch (error) {
            console.log (error.message);
        }
    }
}