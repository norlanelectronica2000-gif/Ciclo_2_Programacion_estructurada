import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero: ', function(entrada){

    let numero = Number(entrada);

    for (let i=1; i<=10; i++){
        console.log(numero + ' * ' + i + ' = ' + (numero * i));
    }

    rl.close();
    
})