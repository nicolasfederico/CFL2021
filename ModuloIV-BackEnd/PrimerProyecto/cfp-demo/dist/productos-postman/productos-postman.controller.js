"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosPostmanController = void 0;
const common_1 = require("@nestjs/common");
const Producto_1 = require("./Producto");
const productos_postman_service_1 = require("./productos-postman.service");
let ProductosPostmanController = class ProductosPostmanController {
    constructor(productosPostmanService) {
        this.productosPostmanService = productosPostmanService;
    }
    getProductos() {
        return this.productosPostmanService.getProductos();
    }
    getProducto(id) {
        return this.productosPostmanService.getProducto(parseInt(id));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductosPostmanController.prototype, "getProductos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Producto_1.default)
], ProductosPostmanController.prototype, "getProducto", null);
ProductosPostmanController = __decorate([
    (0, common_1.Controller)('productos-postman'),
    __metadata("design:paramtypes", [productos_postman_service_1.ProductosPostmanService])
], ProductosPostmanController);
exports.ProductosPostmanController = ProductosPostmanController;
//# sourceMappingURL=productos-postman.controller.js.map