import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    private static readonly CANTIDAD_PRODUCTOS = 10;
    public getProducto(): any {
        let productos = [];
        let descripcionProductos = ["Belleza","Ropa", "Alimentos","Fiambreria", "Herramientas"]
        for (let i = 0; i < ProductosService.CANTIDAD_PRODUCTOS;i++) {
            let producto = {
                'producto_nombre': 'producto ' + i,
                'precio': Math.floor(Math.random() * 100),
                'descripcionProducto': descripcionProductos[Math.floor(Math.random() * descripcionProductos.length)]
            };
            productos.push(producto);
        }
        return productos;
    }
}
