import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su codigo de 8 digitos: ", (codigo)=>{
    
    let codigoNum= parseInt(codigo);
    let codigosDig= codigoNum.toString();
    let cuatrodigitos= codigosDig.slice(0,4);

    console.log(`Codigos en texto: ${codigosDig}`);
    console.log(`Primeros cuatro digitos: ${cuatrodigitos}`);

    rl.close();

})