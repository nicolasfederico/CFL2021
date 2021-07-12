import * as fs from 'fs';

export default class LectorArchivos {
    
    constructor(){

    }

    public LeerArchivo (archivo:string, separador:string):string[]{
        return (fs.readFileSync(archivo, 'utf-8')).split (separador);
    }

}
