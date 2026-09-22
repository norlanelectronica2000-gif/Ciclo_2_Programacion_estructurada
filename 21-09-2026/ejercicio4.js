import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la cantidad de entradas cendidas: ', entradas=>{
    
    let entradasDiarias = Number(entradas);
    let totalEntradas = 0;

    for(let dia=1; dia<=5; dia++){
        totalEntradas = totalEntradas+entradasDiarias;
        console.log(`Dia: ${dia}`);
        console.log(`Total acumulados: ${totalEntradas}`);
    }

    console.log(`Total de entradas: ${totalEntradas}`);

    rl.close();
    
})