import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Tarea from './tarea.entity';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([ Tarea ])
    ],
    controllers: [
        TareaController
    ],
    providers: [
        TareaService
    ]
})
export class TareaModule {}
