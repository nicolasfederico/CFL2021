/* import { Column } from "typeorm";

@Entity ('e01factura')
export default class e01factura {
    @PrimaryGeneratedColumn()
    private nro_factura: string;
    @Column ()
    private fecha: Date;
    @Column ()
    private total_sin_iva: number;
    @Column ()
    private iva: number;
    @Column ()
    private total_con_iva: number;
    
   

    public constructor (nombre:string, apellido:string, direccion:string, activo:number) {
        this.nombre=nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.activo = activo;
    } 

    public getCodigoProducto():string{
        return this.nroCliente;
    }
    

} */