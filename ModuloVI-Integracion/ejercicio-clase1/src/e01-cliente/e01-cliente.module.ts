import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { E01ClienteController } from './e01-cliente.controller';
import e01cliente from './e01-cliente.entity';
import { E01ClienteService } from './e01-cliente.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([ e01cliente ])
],
  controllers: [E01ClienteController],
  providers: [E01ClienteService]
})
export class E01ClienteModule {}
