import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';
import { ProductosFijosService } from './productos-fijos/productos-fijos.service';
import { ProductosFijosController } from './productos-fijos/productos-fijos.controller';
import { ClientesService } from './clientes/clientes.service';
import { ClientesController } from './clientes/clientes.controller';
import { ProductosPostmanService } from './productos-postman/productos-postman.service';
import { ProductosPostmanController } from './productos-postman/productos-postman.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
      'client'),
      }),
  ],
  controllers: [AppController, ProductosController, ProductosFijosController, ClientesController, ProductosPostmanController],
  providers: [AppService, ProductosService, ProductosFijosService, ClientesService, ProductosPostmanService],
})
export class AppModule {}
