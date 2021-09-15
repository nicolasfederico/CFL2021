import { Controller, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor(private clienteService: ClientesService) {}
    @Get()
    public getClientes(): any[] {
        return this.clienteService.getClientes()
    }
}
