import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { E01ClienteModule } from './e01-cliente/e01-cliente.module';
/* import { E01FacturaModule } from './e01-factura/e01-factura.module'; */

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    E01ClienteModule,
    /* E01FacturaModule */],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
