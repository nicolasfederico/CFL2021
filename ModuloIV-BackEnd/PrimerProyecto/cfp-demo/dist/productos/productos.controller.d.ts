import { ProductosService } from './productos.service';
export declare class ProductosController {
    private productoService;
    constructor(productoService: ProductosService);
    getProducto(): string;
}
