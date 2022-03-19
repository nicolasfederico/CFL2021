import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaService } from './tarea/tarea.service';
import { TareaController } from './tarea/tarea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaModule } from './tarea/tarea.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({rootPath: join(__dirname,'..','client')}),
    TareaModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
