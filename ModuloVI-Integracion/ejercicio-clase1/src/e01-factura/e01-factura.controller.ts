/* import { Controller } from '@nestjs/common';

@Controller('e01-factura')
export class E01FacturaController {}


import { Body, Controller, Get, Post } from '@nestjs/common';
import e01Cliente from './e01-cliente.entity';
import { E01ClienteService } from './e01-cliente.service';
import { ClienteDTO } from './e01-cliente.dto';

@Controller('e01-factura')
export class E01FacturaController {

    constructor(private readonly E01ClienteService:E01FacturaService) {}

    @Get()
    public async getTareas(): Promise <e01Factura[]> {
        return await this.E01ClienteService.getClientes();
    }

    @Post("new-producto")
        createArticle(@Body() facturaDto : FacturaDTO): Promise<e01Factura> {
            return this.E01ClienteService.addCliente(clienteDto);
        }

}
 */