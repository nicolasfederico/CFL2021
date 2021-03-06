import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Producto from "./Producto";

@Injectable()
export class ProductosPostmanService {
    private listaProductos: Producto [] = [];
    
    public constructor (){
        this.loadProductos();
    }
    
    getProductos(): Producto [] {
        return this.listaProductos;
    }

    private loadProductos(): void {
        let archivo = fs.readFileSync('productos.csv', 'utf8');
        console.log(archivo);
        const elementos = archivo
            .split('\n')
            .map(p => p.replace('\r', ''))
            .map(p => p.split(','));
            console.log (elementos)
        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(
                parseInt(elementos[i][0]),
                elementos[i][1], 
                parseFloat(elementos[i][2])
            );
            this.listaProductos.push(producto);
        }
    }

    public getProducto(id: number): Producto {
        let producto = null;
            for (let i=0; i<this.listaProductos.length; i++) {
                if (this.listaProductos[i].getId()==id) {
                    return this.listaProductos[i];
                }
            }
        return producto;
    }
}