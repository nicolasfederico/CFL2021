"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const productos_controller_1 = require("./productos/productos.controller");
const productos_service_1 = require("./productos/productos.service");
const productos_fijos_service_1 = require("./productos-fijos/productos-fijos.service");
const productos_fijos_controller_1 = require("./productos-fijos/productos-fijos.controller");
const clientes_service_1 = require("./clientes/clientes.service");
const clientes_controller_1 = require("./clientes/clientes.controller");
const productos_postman_service_1 = require("./productos-postman/productos-postman.service");
const productos_postman_controller_1 = require("./productos-postman/productos-postman.controller");
const vehiculos_controller_1 = require("./vehiculos/vehiculos.controller");
const vehiculos_service_1 = require("./vehiculos/vehiculos.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'client'),
            }),
        ],
        controllers: [app_controller_1.AppController, productos_controller_1.ProductosController, productos_fijos_controller_1.ProductosFijosController, clientes_controller_1.ClientesController, productos_postman_controller_1.ProductosPostmanController, vehiculos_controller_1.VehiculosController],
        providers: [app_service_1.AppService, productos_service_1.ProductosService, productos_fijos_service_1.ProductosFijosService, clientes_service_1.ClientesService, productos_postman_service_1.ProductosPostmanService, vehiculos_service_1.VehiculosService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map