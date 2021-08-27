import ArticuloLectura from "./ArticuloLectura"
import Revista from "./Revista";
import Libro from "./Libro";
import * as RLS from "readline-sync";

export default class Biblioteca {
    private elementos: ArticuloLectura[];
    private nombreBiblioteca: string;
    private direccion: string;

    public constructor (nombreBiblioteca:string, direccion:string){
        this.elementos = [];
        this.nombreBiblioteca = nombreBiblioteca;
        this.direccion = direccion;
    }

    public insertar (a: ArticuloLectura):boolean {    // Este método recorre todo el arreglo , y cuando es igual el ISBN del articulo con el ISBN del articulo ingresado, muestra por consola que ya existe y retorna false. En caso contrario, pushea ése artículo al arreglo y retorna true;
        for (let i=0; i<this.elementos.length; i++){
            if (this.elementos[i].getISBN() == a.getISBN()){
                console.log ("Este articulo ya existe en la biblioteca")
                return false;
            } else {
                this.elementos.push (a)
            }
        }
        return true;
    }

    public buscar (ISBN: number):ArticuloLectura { // Este método busca recorre todo el arreglo, y compara el ISBN ingresado con el ISBN de cada articulo del array
                                                    // Si lo encuentra, articulo se vuelve el articulo encontrado y me retorna esa variable, en caso contrario, me retorna un articulo con campos vacios o "invalidos" intencionalmente. 
        let Articulo: ArticuloLectura = new Libro (0,"","","",0);
        for (let i=0; i<this.elementos.length; i++){
            if (ISBN == this.elementos[i].getISBN()){
                    Articulo = this.elementos [i]
                    return Articulo;
                }
        }
        console.log ("El articulo no existe");
        return Articulo;
    }

    public modificarPaginas (ISBN: number):boolean { // Este método usa una variable auxiliar "Articulo" , la cual se vuelve el retorno de la función buscar().
                                                    // Si el elemento contiene titulo, quiere decir que fue hallado y por lo tanto se le setea la cantidad de paginas y se retorna true.
                                                    // caso contrario de que no se encuentre, retorna false.
        let Articulo = this.buscar (ISBN);
        if (Articulo.getTitulo()!="") {
            let nuevaCantidadPaginas: number = RLS.questionInt ("Ingrese la nueva cantidad de paginas: ")
            Articulo.setCantidadPaginas (nuevaCantidadPaginas);
            return true;
        } 
        return false; 
    }

    public eliminar (ISBN: number):boolean {            //Este método recorre el arreglo y cuando encuentra el ISBN, hace un splice en esa posicion, eliminando el artículo 
                                                        // correspondiente y retornando true, caso de que no se encuentre, retornará false.
      for (let i=0; i<this.elementos.length ; i++) {
          if (this.elementos[i].getISBN() == ISBN ){
              this.elementos.splice (i,1)
              return true;
          }
      }
      return false;
    }

    public buscarPorAutor (autor:string):ArticuloLectura[] {
        let arregloAutor:ArticuloLectura[] = [];           // Este método recorre el arreglo y cuando encuentra el mismo autor, agrega ese elemento al arreglo auxiliar "arregloAutor"
                                                            // mediante el uso del Push. Retorna finalmente el arreglo. En caso de no encontrar el autor, retornará un arreglo vacío.
        for (let i=0; i<this.elementos.length;i++){
            if (this.elementos[i].getAutor() == autor) {
                arregloAutor.push(this.elementos[i])
            }
        }
        return arregloAutor;
    }

}