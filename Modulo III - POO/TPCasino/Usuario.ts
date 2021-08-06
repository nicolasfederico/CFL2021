export default class Usuario {
    private MontoAcumulado: number;


    public constructor () {
        this.MontoAcumulado = 0;
    }

    public getMontoAcumulado(): number {
        return this.MontoAcumulado;
    }

    public aumentarMontoAcumulado(valor:number): void {
        this.MontoAcumulado = this.MontoAcumulado + valor;
    }

    public disminuirMontoAcumulado (valor:number):void {
        this.MontoAcumulado = this.MontoAcumulado - valor;
    }
}