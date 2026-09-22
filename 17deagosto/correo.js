import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su correo electronico: ", (correo)=>{
    
    let correoMini= correo.toLowerCase();
    console.log(`Correo electronico: ${correoMini}`);
    rl.close();
})