// Factorial de 10 while, if y break.

const numero = 10;
let factorial = 1;
let contador = 0;

while (true) {
    contador++;
    if (numero <= contador) {
        break;
    }
    factorial *= contador+1;
}

console.log(`${numero}! es ${factorial}`);
