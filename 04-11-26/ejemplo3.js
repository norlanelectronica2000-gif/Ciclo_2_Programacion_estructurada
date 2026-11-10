let notas = [8, 9, 7, 10, 6];

let mayor = notas[0];
let menor = notas[0];

for (let i = 1; i < notas.length; i++) {

    if (notas[i] > mayor) {
        mayor = notas[i];
    }

    if (notas[i] < menor) {
        menor = notas[i];
    }

}

console.log(`Nota mayor: ${mayor}`);
console.log(`Nota menor: ${menor}`);