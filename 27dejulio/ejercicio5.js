import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de los dolares: ", function(dolar){
    
    let dolares = parseFloat(dolar);

    let euro = dolares * 0.88;

    console.log(`$${dolares.toFixed(2)} dolares equivalen a €${euro} euros.`);

    rl.close();
});