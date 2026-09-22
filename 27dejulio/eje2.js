import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la base del rectangulo: ", function(base){
    rl.question("Ingrese la altura del rectangulo: ",function(altura){
        
        const area= Number (base) * Number (altura);

        console.log(`El area del rectangulo es: ${area}`);
        rl.close();
    })
})