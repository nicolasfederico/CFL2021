import Producto from "./Producto";
export declare class ProductosPostmanService {
    private listaProductos;
    constructor();
    getProductos(): Producto[];
    private loadProductos;
    getProducto(id: number): Producto;
}
