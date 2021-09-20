export default class Producto {
    private idProducto: number;
    private nombreProducto: string;
    private precio: number;

    public constructor (id: number, nombre:string, precio: number) {
        this.idProducto = id;
        this.nombreProducto = nombre;
        this.precio = precio;
    }

    public getId(): number {
        return this.idProducto;
    }

    public getNombre(): string {
        return this.nombreProducto;
    }

    public getPrecio(): number {
        return this.precio;
    }
}