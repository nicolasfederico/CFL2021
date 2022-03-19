import { ClientesService } from './clientes.service';
export declare class ClientesController {
    private clienteService;
    constructor(clienteService: ClientesService);
    getClientes(): any[];
}
