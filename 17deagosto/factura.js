import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero de factura (FAC-145678): ",(factura)=>{
    
    let facturaNum= factura.slice(4);
    console.log(`Numero de factura: ${facturaNum}`);
    rl.close();
})