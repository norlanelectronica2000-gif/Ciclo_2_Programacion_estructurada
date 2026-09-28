import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la cantidad de piezas: ', cantidad=>{
    rl.question('Ingrese los dias que va a trabajar: ', dias=>{

        let piezas = parseInt(cantidad);
        let diasTrabajo = parseInt(dias);
        let produccion = 0;

        for (let i=1; i<=diasTrabajo; i++){
            produccion = produccion+piezas;
            console.log('Dia '+i);
            console.log('Piezas obtenidas: '+produccion);
            if(produccion>=100){
            console.log('Se cumplio la meta de produccion.');
            } else{
            console.log('Piezas insuficientes, completa los demas dias para obtener la meta de produccion obtenida.');
            }
        }

        console.log('Resultado Final: '+produccion);

        rl.close();
    })
})