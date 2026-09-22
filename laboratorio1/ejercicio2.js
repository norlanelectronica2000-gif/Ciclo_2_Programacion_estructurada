import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nombre de la persona: ", function(nombre){
    rl.question("Cantidad de dias que trabaja durante el mes: ", function(dias){
        rl.question("Gasto diario en desayuno: ", function(desayuno){
            rl.question("Gasto diario en almuerzo: ", function(almuerzo){
                rl.question("Gasto diario en transporte para comprar o trasladarse a consumir alimentos: ", function(transporte){

                    let cantdias = parseFloat(dias);
                    let gastodesayuno = parseFloat(desayuno)
                    let gastoalmuerzo = parseFloat(almuerzo)
                    let gastotransporte = parseFloat(transporte)

                    let gastodiario = gastodesayuno + gastoalmuerzo + gastotransporte;
                    let gastototal = gastodiario*cantdias

                    console.log(`Nombre de la persona: ${nombre}`);
                    console.log(`El gasto diario: $${gastodiario.toFixed(2)}`);
                    console.log(`El gasto mensual estimado: $${gastototal.toFixed(2)}`)

                    rl.close();
                });
            });
        });
    });
});