import readline from "node:readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Ingrese su nombre: ", (nombre)=>{
    let fechaActual = new Date;
    console.log(`Hora actual: ${fechaActual.toLocaleDateString()}`);

    let hora = fechaActual.getHours();

    if(hora <12){
        console.log(`Buenos dias ${nombre}`)
    }
    rl.close();
})