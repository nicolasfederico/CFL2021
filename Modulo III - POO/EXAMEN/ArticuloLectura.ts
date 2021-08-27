export default abstract class ArticuloLectura {
    private ISBN: number;
    private Autor: string;
    private Editorial: string;
    private Titulo: string;
    protected cantidadPaginas: number;

    public constructor (ISBN: number, Autor:string, Editorial:string, Titulo: string, cantidadPaginas: number) {
        this.ISBN = ISBN;
        this.Autor = Autor;
        this.Editorial = Editorial;
        this.Titulo = Titulo;
        this.cantidadPaginas = cantidadPaginas;
    }

    //coloqué algunos métodos más para que no me tire error el vscode.

    abstract setCantidadPaginas (c:number): void; //clase abstracta.

    public getISBN (): number {  //Retorna el ISBN 
        return this.ISBN; 
    }

    public getAutor (): string {  //Retorna el Autor
        return this.Autor;
    }

    public getTitulo ():string {  //Retorna el Titulo
        return this.Titulo;
    }
}