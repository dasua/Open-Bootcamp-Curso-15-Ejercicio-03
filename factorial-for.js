// Factorial de 10 utilizando un solo bucle for.
const numero = 10;
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log(`${numero}! es ${factorial}`);
