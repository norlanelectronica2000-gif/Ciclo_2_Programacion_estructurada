import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const energiaElectrica=(actual, equipos, kilovatios, excedidos)=>{
    if(actual>equipos){
        console.log(`Cantidad de equipos: ${equipos}`);
        console.log(`Total de kilovatios: ${kilovatios.toFixed(2)}`);
        console.log(`Equipos con consumo elevado (> 15 kWh): ${excedidos} kwh`);
        ny.close();
        return;
    }
    ny.question('Ingrese el consumo de kilovatios (kWh): ', dato=>{
        const kwh = parseFloat(dato);
        if(!Number.isFinite(kwh) || kwh<0){
            energiaElectrica(actual, equipos, kilovatios, excedidos);
            return;
        }
        let nuevosExcedidos = excedidos;
        if(kwh>15){
            console.log(`¡Atencion!`)
            console.log(`El equipo ${actual} presenta un consumo elevado (${kwh} kWh).`);
            nuevosExcedidos++;
        }
        const kwhTotal = kilovatios+kwh;
        console.log(`Total de kilovatios acumulados: ${kwhTotal.toFixed(2)} kwh.`);

        energiaElectrica(actual +1, equipos, kwhTotal, nuevosExcedidos);
    })
}
ny.question('Cuantos equipos deseas registrar: ', dato=>{
    const equipos = parseInt(dato, 10);
    if(Number.isFinite(equipos) && equipos>0){
        energiaElectrica(1, equipos, 0, 0);
    }else{
        console.log('Cantidad de equipos no valido.');
        ny.close();
    }
})