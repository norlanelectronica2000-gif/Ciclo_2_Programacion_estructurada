const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {
    rl.question("Introduzca su año de ncaimiento: ", (anionacimiento) => {

        let nacimiento = parseInt(anionacimiento);

        let fechaactualidad = new Date();
        let fechaanio = fechaactualidad.getFullYear();
        let edad = fechaanio - nacimiento;

        console.log(`Nombre: ${nombre}`);
        console.log(`Edad: ${edad}`);
        console.log(`Hola ${nombre}, ve que tenes la edad aproximadamente de ${edad} años.`);
    })
})