import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cuantos boetos va a comprar: ', bol=>{
    const CantidadBoletos = Number(bol);
    for (let boletos=1; boletos<=CantidadBoletos; boletos++){
        let precio = 4;
        if(boletos>=5){
            precio = precio-1;
            console.log(`Boletos: ${boletos}`);
            console.log('Tiene descuento.');
            console.log(`Precio: ${precio.toFixed(2)}`);
        } else {
            console.log(`Boletos: ${boletos}`);
            console.log('No tiene descuento.');
            console.log(`Precio: ${precio.toFixed(2)}`);
        }
    }
    rl.close();
})