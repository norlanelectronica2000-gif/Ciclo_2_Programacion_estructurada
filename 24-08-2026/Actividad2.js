const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el año: ", (anio) => {
    rl.question("Ingrese el mes: ", (mes) => {
        rl.question("Ingrese el dia: ", (dia) => {
            
            let aniopersonalizado = parseInt(anio);
            let mespersonalizado = parseInt(mes);
            let diapersonalizado = parseInt(dia);

            let nuevafecha = new Date(aniopersonalizado, mespersonalizado - 1, diapersonalizado);

            console.log(`Fecha completa: `, nuevafecha.toLocaleString());
            console.log(`Solo la fecha: `, nuevafecha.toLocaleDateString());
            console.log(`Solo la hora: `, nuevafecha.toLocaleTimeString());

            rl.close();
        })
    })
})