import { ProductosService } from './productos.service';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    getProductos(): void;
}
