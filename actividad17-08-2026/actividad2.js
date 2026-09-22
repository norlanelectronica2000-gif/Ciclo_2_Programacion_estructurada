import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un codigo de la carrera(Ejemplo: U20260000): ",(codigo)=>{

    let codigoNum= Number(codigo);
    let codigoInfo= codigoNum.toString();
    let primerosDigitos= codigo.slice(1,5);
    
    console.log(`Las primeras tres letras del codigo: ${primerosDigitos}`);
    
    rl.close();
    
})