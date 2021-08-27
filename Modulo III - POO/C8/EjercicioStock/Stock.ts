import Item from "./Item";
import * as RLS from "readline-sync";
import gestorArchivos from "./gestorArchivos";

export default class Stock {
    private stock: Item [];
    private vendidos: Item [];
    private file: gestorArchivos;


    public constructor () {
        this.stock = [];
        this.vendidos = [];
        this.file = new gestorArchivos ();
    }

    public cargarItem () {
        let nombre:string = RLS.question("Ingresa el nombre del artículo: ")
        let costo:number = RLS.questionInt("Ingresa el costo del artículo: ")
        this.stock.push(new Item(nombre, costo))
    }

    public cargarItemsTxt (rutaArchivo:string, separador:string):void {
        let items:string[] = this.file.LeerArchivo(rutaArchivo, separador);
        let propiedadesItem:string[] = [];
        items.forEach(itemString => {
            propiedadesItem = itemString.split(";")
            this.stock.push(new Item(propiedadesItem[0],parseInt(propiedadesItem[1])))
        });
    }

    public venderItem () {
        let nombre:string = RLS.question ("Ingresa el nombre del artículo a vender: ")
        let posicionItem:number = this.buscarItem (nombre);
        this.vendidos.push (new Item(this.stock[posicionItem].getNombre(),this.stock[posicionItem].getCosto()))
        this.file.EscribirArchivo("itemsVendidos.txt", "Se vendió el item " + this.stock[posicionItem].getNombre() + ", con un costo de $"+this.stock[posicionItem].getCosto()+".")
        console.log (">>>>>El artículo: "+ this.stock[posicionItem].getNombre() + " fue vendido con éxito.<<<<<<")
        this.stock.splice(posicionItem,1);
    }

    private buscarItem (nombre:string):number {
        for (let i=0; i<this.stock.length ;i++){
            if (this.stock[i].getNombre () == nombre) {
                return i;
            }
        }
        return -1;
    }

    public mostrarStock ():void {
        console.log (this.stock);
    }

    public mostrarVendidos ():void {
        console.log (this.vendidos);
    }
}