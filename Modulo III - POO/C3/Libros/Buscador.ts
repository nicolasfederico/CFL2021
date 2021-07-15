import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Libro from "./Libro";

export default class Buscador {

    constructor (){
    }

    public buscarLibro (texto: string, archivo:string, separador:string): number {
        for (let i = 0; i < this.libros.length; i++) {
            if(texto == this.libros[i].getTitulo()){
                return i;
            }  
        }
                return -1;
    }

    
    let opcion = RLS.question("Ingrese categoria a buscar: /n Titulo: 1, /n ")
    while (opcion != 'X') {
        switch (opcion) {
            case 'C': {
                gestor.addLibro();
                break;
            }
            case 'R': {
                titulo = RLS.question('Ingrese el titulo del libro a buscar: ');
                console.log(`Encontre la titulo en la posicion ${gestor.findLibro(titulo)}.`);
                break;            
            }
            case 'U': {
                titulo = RLS.question('Ingrese el titulo del libro a modificar: ');
                gestor.updateLibro(titulo);
                break;
            }
            case 'D': {
                titulo = RLS.question('Ingrese el titulo del libro a eliminar: ');
                gestor.deleteLibro(titulo);
                break;                        
            }
        }
}