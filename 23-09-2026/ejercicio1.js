import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero: ', num=>{
    const nume = parseInt(num);
    for (let i=1; i<=10; i++){
        const resultado = nume * i;
        console.log(`${nume} * ${i} = ${resultado}`);
    }
    rl.close();
})