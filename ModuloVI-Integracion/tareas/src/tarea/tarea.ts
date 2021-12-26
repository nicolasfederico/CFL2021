export default class Tarea {
    private idTarea: number;
    private nombreTarea: string;
    private estadoTarea: boolean;

    public constructor (id: number, nombre:string, estado:boolean=false) {
        this.idTarea = id;
        this.nombreTarea=nombre;
        this.estadoTarea = estado;
    }

    public getIdTarea():number{
        return this.idTarea;
    }
    
    public getNombreTarea():string {
        return this.nombreTarea;
    }

    public getEstadoTarea():boolean {
        return this.estadoTarea;
    }

    public setNombreTarea(nombre: string){
        this.nombreTarea = nombre;
    }
    
    public setEstadoTarea(estado: boolean) {
        this.estadoTarea=estado;
    }
}