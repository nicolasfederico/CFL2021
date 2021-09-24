import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaService } from './tarea/tarea.service';
import { TareaController } from './tarea/tarea.controller';

@Module({
  imports: [ServeStaticModule.forRoot({rootPath: join(__dirname,'..','client')})],
  controllers: [AppController, TareaController],
  providers: [AppService, TareaService],
})
export class AppModule {}
