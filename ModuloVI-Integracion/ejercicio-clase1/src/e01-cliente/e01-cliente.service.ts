import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import e01cliente from './e01-cliente.entity';
import { ClienteDTO } from './e01-cliente.dto';

@Injectable()
export class E01ClienteService {

    constructor(@InjectRepository(e01cliente) private readonly repoCliente : Repository<e01cliente>) {
    }


    public async getClientes() : Promise<e01cliente[]> {
        
        try {
            const clientes: e01cliente [] = await this.repoCliente.find()
            console.log (clientes);
            return clientes;
        } catch (error) {
            throw new HttpException ( { error : `Error buscando los clientes: ${error}`}, HttpStatus.NOT_FOUND);
        }   
    }

    public async getCliente (id:number) : Promise <e01cliente> {
        try {
            const cliente: e01cliente = await this.repoCliente.findOne(id);
            return cliente;
        } catch (error) {
            throw new HttpException ( { error : `Error buscando el cliente de Id: ${id}`}, HttpStatus.NOT_FOUND);
        }
    }

    public async addCliente (newCliente: ClienteDTO): Promise <e01cliente>{
        try{
            const clienteCreado: e01cliente = await this.repoCliente.save(new e01cliente(
                newCliente.nombre,
                newCliente.apellido,
                newCliente.direccion,
                newCliente.activo)
            );
            if (clienteCreado.getCodigoCliente()){
                return clienteCreado;
            } else {
                throw new HttpException('No se pudo crear el cliente', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException ({
                status:HttpStatus.NOT_FOUND,
                error: "there is an error in the request," + error,
            }, HttpStatus.NOT_FOUND);
        }




        }
}



