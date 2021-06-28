function resolverFibonacci (n) {
    let resultado = 0;
    if (n>1){
        resultado=resolverFibonacci(n-1)+resolverFibonacci(n-2);
    }
    else {
        resultado=n;
    }
    return resultado;
}