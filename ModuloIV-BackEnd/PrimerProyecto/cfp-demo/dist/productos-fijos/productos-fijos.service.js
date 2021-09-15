"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosFijosService = void 0;
const common_1 = require("@nestjs/common");
let ProductosFijosService = class ProductosFijosService {
    getProducto() {
        let productos = [
            {
                "nombre": "Papa",
                "precio": 40
            },
            {
                "nombre": "Zanahoria",
                "precio": 50
            },
            {
                "nombre": "Aceite Girasol",
                "precio": 98
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
        ];
        return productos;
    }
    ;
};
ProductosFijosService = __decorate([
    (0, common_1.Injectable)()
], ProductosFijosService);
exports.ProductosFijosService = ProductosFijosService;
//# sourceMappingURL=productos-fijos.service.js.map