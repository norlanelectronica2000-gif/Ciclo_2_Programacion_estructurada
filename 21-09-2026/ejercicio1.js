import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuanto dinero ahorra cada dia? $', respuesta=>{

    let ahorraDiario = Number(respuesta);

    let ahorroTotal=0;

    for (let dia=1; dia<=5; dia++){
        ahorroTotal = ahorroTotal+ahorraDiario;
        console.log(`Dia ${dia}.`)
        console.log(`Dinero ahorrado: $${ahorroTotal.toFixed(2)}`)
    }

    rl.close();

})