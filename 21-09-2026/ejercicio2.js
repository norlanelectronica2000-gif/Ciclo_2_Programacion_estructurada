import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese las horas que duro cada prestamo: ', horas=>{

    let cobroHora = parseFloat(horas);
    let cobro = 2.25;
    let cobroTotal = 0;

    for (let prestamo=1; prestamo<=4; prestamo++){
        cobroTotal=cobroTotal+cobroHora;
        cobroHora=cobro*cobroHora;
        console.log('Prestamo: '+prestamo);
        console.log('Cobro por hora: $'+cobroHora.toFixed(2));
    }

    console.log(`Cobro Total: $${cobroTotal.toFixed(2)}`);

    rl.close();

})