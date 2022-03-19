import ArticuloLectura from "./ArticuloLectura";

export default class Libro extends ArticuloLectura {
    
    public constructor (ISBN: number, Autor:string, Editorial:string, Titulo: string, cantidadPaginas: number) {
        super (ISBN, Autor, Editorial, Titulo, cantidadPaginas );
    }


    public setCantidadPaginas (c: number):void {  // setea la cantidad de paginas del libro.
        this.cantidadPaginas = c;
    }
}