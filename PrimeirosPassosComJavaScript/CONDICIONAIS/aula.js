
// Condicionais e boolean
const c = true;
let a = 4;
let b = 4;

if(a==b){
    console.log("%d é igual a %d!", a, b);
}else{
    console.log("%d é diferente de %d!", a, b);
}

// Resto da divisão %
let numero = 14;
if(numero%2 == 0){
    console.log("%d é par!", numero);
}else{
    console.log("%d é ímpar!", numero);
}

numeroPar = (numero%2) === 0;
console.log(numeroPar);
