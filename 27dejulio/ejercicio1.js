import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del empleado: ", function(nombre){
    rl.question("Ingrese las horas trabajadas: ", function(horas){
        rl.question("Ingrese el pago por hora: ", function(pago){

            let horasTrabajadas = parseFloat(horas);
            let pagoHora = parseFloat(pago);
            
            let salario = horasTrabajadas * pagoHora;

            console.log("\n --- Salario semanal---");
            console.log(`Empleado: ${nombre}`);
            console.log(`Salario semanal: ${salario.toFixed(2)}`);

            rl.close();
        });
    });
});