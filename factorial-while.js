// Factorial de 10 utilizando un solo bucle while.

const numero = 10;
let factorial = 1;
let contador = 1;

while (contador <= numero) {
    factorial *= contador++;
}

console.log(`${numero}! es ${factorial}`);
