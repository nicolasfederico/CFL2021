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
 

    public setPatente (patente:string):void {
        this.patente = patente;
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

}