import { Controller, Get, Param } from '@nestjs/common';
import Producto from './Producto';
import { ProductosPostmanService } from './productos-postman.service';

@Controller('productos-postman')
export class ProductosPostmanController {
    constructor(private readonly productosPostmanService: ProductosPostmanService) {}

    @Get()
    public getProductos() {
        return this.productosPostmanService.getProductos();
    }

    @Get(':id')
    public getProducto(@Param('id') id): Producto {
        return this.productosPostmanService.getProducto(parseInt(id));
    }
}
