import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity ('tareas')
export default class Tarea {
    @PrimaryColumn()
    private idTarea: number;
    @Column ()
    private nombreTarea: string;
    @Column ()
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