import { Controller, Get } from '@nestjs/common';
import { ProductosFijosService } from './productos-fijos.service';

@Controller('productos-fijos')
export class ProductosFijosController {
    constructor (private productosService: ProductosFijosService) {}
    @Get ()
    public getProducto (): string {
        return this.productosService.getProducto();
    } 
}
