import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre completo: ",(nombre)=>{
    
    let eventoMayuscula=nombre.toUpperCase();
    let eventoMinuscula=nombre.toLowerCase();

    console.log(`Dato ingresado por el usuario: ${nombre}`);
    console.log(`Entrada en mayuscula: ${eventoMayuscula}`);
    console.log(`Entrada en minuscula: ${eventoMinuscula}`);
    
    rl.close();

})
