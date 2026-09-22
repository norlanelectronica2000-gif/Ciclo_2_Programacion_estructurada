import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese cualquer valor o texto: ", function(entrada){
    
    let resultado = parseFloat(entrada);
    let esNaN = isNaN(resultado);

    console.log(`Dato ingresado por el usuario: "${entrada}"`);
    console.log(`Resultado de parseFloat(): ${resultado}`);
    console.log(`Valor retornado por isNaN: ${esNaN}`);

    rl.close();
});