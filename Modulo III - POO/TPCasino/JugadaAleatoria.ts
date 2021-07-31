export default class JugadaAleatoria {
    
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

}