export default class randoms {
    
    constructor(){

    }

    public generarJugada (cantRodillos: number, menorValor:number, mayorValor:number):number[]{
        let jugada = new Array (cantRodillos);
        for (let i=0; i<cantRodillos; i++) {
            jugada[i] = Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
        }
        return jugada;
    }

    public numeroRandom (menorValor:number, mayorValor:number ):number {
        let numero:number;
        return numero = Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
    }

    public numeroRandomConDecimales (menorValor:number, mayorValor:number):number {
        let numero:number;
        return numero = parseFloat (((Math.random() * ((mayorValor+1) - menorValor) + menorValor)).toFixed(2));
    }

    public arregloRandomConDecimales (cant: number, menorValor:number, mayorValor:number):number[]{
        let arreglo = new Array (cant);
        for (let i=0; i<cant; i++) {
            arreglo[i] = Math.random() * ((mayorValor+1) - menorValor) + menorValor;
        }
        return arreglo;
    }

}