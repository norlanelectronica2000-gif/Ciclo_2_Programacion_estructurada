import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el gasto diario del transporte: ', gasto=>{

    let gastoDiario = parseFloat(gasto);
    let gastoAcumulado = 0;

    for(let dia=1; dia<=6; dia++){
        gastoAcumulado=gastoAcumulado+gastoDiario;
        console.log(`Dia: ${dia}`);
        console.log(`Gasto acumulado: $${gastoAcumulado.toFixed(2)}`);
    }

    console.log(`Gasto total de transporte en los 6 dias: $${gastoAcumulado.toFixed(2)}`);

    rl.close();

})