import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];

rl.question("Ingrese la primera nota: ", function(dato1) {

    notas[0] = parseFloat(dato1);

    rl.question("Ingrese la segunda nota: ", function(dato2) {

        notas[1] = parseFloat(dato2);

        rl.question("Ingrese la tercera nota: ", function(dato3) {

            notas[2] = parseFloat(dato3);

            let suma = 0;

            for (let i = 0; i < notas.length; i++) {
                suma = suma + notas[i];
            }

            let promedio = suma / notas.length;

            console.log("\n--- RESULTADOS ---");

            for (let i = 0; i < notas.length; i++) {
                console.log(`Nota ${i + 1}: ${notas[i]}`);
            }

            console.log(`Promedio: ${promedio.toFixed(2)}`);

            rl.close();

        });

    });

});