import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesService {
    public getClientes():any []{
        let clientes = [
            {
                "RazonSocial": "Nicolas Federico",
                "Domicilio" : "San Martin 123",
                "Saldo" : 1
            },
            {
                "RazonSocial": "Jamon Manuel",
                "Domicilio" : "Juan B. Justo 6579",
                "Saldo" : 4560
            },
            {
                "RazonSocial": "Juan Perez",
                "Domicilio" : "Roca 1304",
                "Saldo" : 86156
            },
            {
                "RazonSocial": "Roberto Fernandez",
                "Domicilio" : "Avellaneda 21",
                "Saldo" : 6846
            },
            {
                "RazonSocial": "Juan Pablo Segundo",
                "Domicilio" : "Calle 1 Pasaje 2",
                "Saldo" : 1340
            },
            {
                "RazonSocial": "Michael Jackson",
                "Domicilio" : "Cielo 123",
                "Saldo" : 41510
            },
            {
                "RazonSocial": "Pablo Pedro Pietro",
                "Domicilio" : "Portugues 582",
                "Saldo" : 4562
            }
            ]
        return clientes;
    };  
}

