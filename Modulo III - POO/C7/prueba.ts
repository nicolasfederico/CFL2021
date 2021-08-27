import ErrorCustom1 from "./ErrorCustom1"
import ErrorCustom2 from "./ErrorCustom2" 





function sumar(a: any, b: any): number {
    if (typeof a != 'number') {
        throw new ErrorCustom1('Input 1 debe ser numerico')
    } else if (typeof b != 'number') {
        throw new ErrorCustom2('Input 2 debe ser numerico')
    }
    return a + b;
}


let result: number= 0;

try {
    result = sumar("1", 0);
    console.log (result)
    console.log ("hola2131")
} catch (err) {
    if (err instanceof ErrorCustom1) {
        console.log('Error generado en ErrorCustom1')
    } else if (err instanceof ErrorCustom2) {
        console.log('Error generado en ErrorCustom2')
    }
    result = 0;
}

console.log('hola')

