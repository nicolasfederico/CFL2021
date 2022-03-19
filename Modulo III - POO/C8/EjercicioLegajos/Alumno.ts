import gestorArchivos from "./gestorArchivos";
import Examenes from "./Examenes";

export default class Alumno {
    private nombre:string;
    private edad:number;
    private dni:number;
    private notas: number []
    private file: gestorArchivos;
    private examenes: Examenes;

    private constructor (nombre:string, edad:number, dni:number) {
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
        this.examenes = new Examenes ();
        this.notas = this.cargarNotas (this.dni);
        this.file = new gestorArchivos ();
    }
    
    /* public getPromedio ():number{
        let promedio:number=0;
        let suma:number=0;
        for (let i=0; i<this.examenes.getNotas().length; i++) {
            suma += (this.examenes.getNotas()[i]);
        }
        return promedio = (suma/this.examenes.getNotas().length);
    }   */

    private cargarNotas (dni:number):number [] {
        let notas: number;
        let notasArreglo: number [];
        
        if (dni==this.file.LeerArchivo('notas.txt',';')) {
            
        }

        return notasArreglo;
    }
    
}