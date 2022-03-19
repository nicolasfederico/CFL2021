import { Body, Controller, Get, Post } from '@nestjs/common';
import e01Cliente from './e01-cliente.entity';
import { E01ClienteService } from './e01-cliente.service';
import { ClienteDTO } from './e01-cliente.dto';

@Controller('e01-cliente')
export class E01ClienteController {

    constructor(private readonly E01ClienteService:E01ClienteService) {}

    @Get()
    public async getClientes(): Promise <e01Cliente[]> {
        return await this.E01ClienteService.getClientes();
    }

    @Post("new-cliente")
        createArticle(@Body() clienteDto : ClienteDTO): Promise<e01Cliente> {
            return this.E01ClienteService.addCliente(clienteDto);
        }

}
