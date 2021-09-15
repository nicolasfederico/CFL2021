import { ProductosFijosService } from './productos-fijos.service';
export declare class ProductosFijosController {
    private productosService;
    constructor(productosService: ProductosFijosService);
    getProducto(): string;
}
