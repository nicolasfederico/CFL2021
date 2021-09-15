"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
let ClientesService = class ClientesService {
    getClientes() {
        let clientes = [
            {
                "RazonSocial": "Nicolas Federico",
                "Domicilio": "San Martin 123",
                "Saldo": 1
            },
            {
                "RazonSocial": "Jamon Manuel",
                "Domicilio": "Juan B. Justo 6579",
                "Saldo": 4560
            },
            {
                "RazonSocial": "Juan Perez",
                "Domicilio": "Roca 1304",
                "Saldo": 86156
            },
            {
                "RazonSocial": "Roberto Fernandez",
                "Domicilio": "Avellaneda 21",
                "Saldo": 6846
            },
            {
                "RazonSocial": "Juan Pablo Segundo",
                "Domicilio": "Calle 1 Pasaje 2",
                "Saldo": 1340
            },
            {
                "RazonSocial": "Michael Jackson",
                "Domicilio": "Cielo 123",
                "Saldo": 41510
            },
            {
                "RazonSocial": "Pablo Pedro Pietro",
                "Domicilio": "Portugues 582",
                "Saldo": 4562
            }
        ];
        return clientes;
    }
    ;
};
ClientesService = __decorate([
    (0, common_1.Injectable)()
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map