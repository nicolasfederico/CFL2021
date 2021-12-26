import { stringify } from "querystring";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity ('e01cliente')
export default class e01cliente {
    @PrimaryGeneratedColumn()
    private nroCliente: number;
    @Column ()
    private nombre: string;
    @Column ()
    private apellido: string;
    @Column ()
    private direccion: string;
    @Column ()
    private activo: number;

    /* @OneToMany(type => Factura, factura => factura.cliente)
    public facturas : Factura[]; */

    public constructor (nombre:string, apellido:string, direccion:string, activo:number) {
        this.nombre=nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.activo = activo;
    } 

    public getCodigoCliente():number{
        return this.nroCliente;
    }
    

}