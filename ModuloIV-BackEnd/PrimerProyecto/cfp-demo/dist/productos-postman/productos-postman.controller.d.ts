import Producto from './Producto';
import { ProductosPostmanService } from './productos-postman.service';
export declare class ProductosPostmanController {
    private readonly productosPostmanService;
    constructor(productosPostmanService: ProductosPostmanService);
    getProductos(): Producto[];
    getProducto(id: any): Producto;
}
