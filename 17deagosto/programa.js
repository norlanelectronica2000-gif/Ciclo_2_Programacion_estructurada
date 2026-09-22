import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero de referencia de 6 digitos: ",(factura)=>{

    let referenciaNum= parseInt(factura);
    let referenciatext= referenciaNum.toString();

    let primerosDigitos= referenciatext.slice(0,3);
    console.log(`Numero de referencia: ${referenciaNum} \n Primeros tres digitos: ${referenciatext}`);
    rl.close();
})