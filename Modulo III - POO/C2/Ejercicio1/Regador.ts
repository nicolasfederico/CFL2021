class regador {
    estaPrendido: boolean
    caudal: number
    anguloAspersion:  number


    constructor (prendido: boolean, caudal: number, anguloAspersion: number) {
        this.estaPrendido = prendido;
        this.caudal = caudal;
        this.anguloAspersion = anguloAspersion;
    }

    prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false
        }
        else {
            this.estaPrendido = true
        }
    }

    aumentarCaudal (): void {
        this.caudal = this.caudal +1
    }

    disminuirCaudal (): void {
        this.caudal = this.caudal -1 
    }

    aumentarAngulo (): void {
        this.anguloAspersion = this.anguloAspersion +1
    }

    disminuirAngulo (): void {
        this.anguloAspersion = this.anguloAspersion -1
    }

    rangoAspersion (angulo:number): void {
        this.anguloAspersion = angulo
    }

}

let regador1 = new regador (true, 124, 360)

console.log (regador1)

regador1.rangoAspersion (180);

console.log (regador1)

regador1.disminuirAngulo ();

console.log (regador1);