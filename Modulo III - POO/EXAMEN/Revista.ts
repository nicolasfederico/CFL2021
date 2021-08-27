import ArticuloLectura from "./ArticuloLectura";

export default class Revista extends ArticuloLectura {
    
    private articulos: string [];

    public constructor (ISBN: number, Autor:string, Editorial:string, Titulo: string, cantidadPaginas: number) {
        super (ISBN, Autor, Editorial, Titulo, cantidadPaginas );
        this.articulos = []
    }


    public setCantidadPaginas (c: number):void {   // Seteo la cantidad de páginas. Uso del try/catch para devolver un error en caso de que se quiera 
                                                    // cargar más de 50 páginas, ya que según el enunciado no estaría permitido.
        try {
            if (c<=50) {
                this.cantidadPaginas = c;
            } else {
                throw new Error ('Excediste el máximo de páginas, el maximo es 50.')
            }
        }
        catch (error) {
                console.log (error.message)
        }
    }
    
}