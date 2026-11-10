let notas = [8, 9, 7, 10, 6];
let suma = 0;
for (let i = 0; i < notas.length; i++) {

    suma = suma + notas[i];

}
let promedio = suma / notas.length;
console.log(`Suma de notas: ${suma}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);