import readline from "node:readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Ingrese el codigo del departamento (ejemplo: DEP-VEN-2026-045): ", (codigo)=>{
    codigo= codigo.toLocaleUpperCase();
    let departamento = codigo.slice(4,7);

    if(departamento == "VEN"){
        console.log(`El codigo pertenece al departamento de ventas.`);
    } else {
        console.log(`El codigo no pertence al departamentos de ventas.`);
    }

    rl.close();
})