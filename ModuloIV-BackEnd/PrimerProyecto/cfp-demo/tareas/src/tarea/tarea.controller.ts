import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import Tarea from './tarea';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {

    constructor(private readonly tareaService:TareaService) {}

    @Get()
    public getTareas(): Tarea []{
        return this.tareaService.getTareas();
    }

    @Get(':id')
    public getTarea(@Param('id') id: string):Tarea {
        return this.tareaService.getTarea(parseInt(id));
    }

    @Post()
    public addTarea(@Body() tarea:any) {
        return this.tareaService.addTarea(tarea);
    }

    @Delete(':id')
    public delTarea(@Param('id') id:string) {
        return this.tareaService.delTarea(parseInt(id));
    }
}
