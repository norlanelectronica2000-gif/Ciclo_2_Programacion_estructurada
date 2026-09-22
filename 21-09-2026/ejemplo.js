import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cuantas veces deseas mostrar el saludo? ', entrada=>{

    let cantidad = Number(entrada);

    for (let i = 1; i <= cantidad; i++) {
        console.log(i + '. ¡Bienvenido!');
    }

    rl.close();

})