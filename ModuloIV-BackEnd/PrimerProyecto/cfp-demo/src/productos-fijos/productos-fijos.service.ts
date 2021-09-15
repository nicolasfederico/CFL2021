import { Injectable } from '@nestjs/common';


@Injectable()
export class ProductosFijosService {
    public getProducto():any {
        let productos = [
            {
                "nombre": "Papa",
                "precio" : 40
            },
            {
                "nombre": "Zanahoria",
                "precio" :50
            },
            {
                "nombre": "Aceite Girasol",
                "precio" : 98
            },
            {
                "nombre": "Pure Tomate",
                "precio": 63
            },
            {
                "nombre": "Fideos",
                "precio": 45
            },
            {
                "nombre": "Gaseosa",
                "precio": 116
            }
        ]
        return productos;
    };  
}
