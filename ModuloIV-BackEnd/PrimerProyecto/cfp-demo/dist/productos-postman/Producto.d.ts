export default class Producto {
    private idProducto;
    private nombreProducto;
    private precio;
    constructor(id: number, nombre: string, precio: number);
    getId(): number;
    getNombre(): string;
    getPrecio(): number;
}
