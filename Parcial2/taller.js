import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const costoServicio = (actual, vehiculosAtendidos, costoTotal)=>{
    if(actual>vehiculosAtendidos){
        console.log(`Cantidad de coches antendidos: ${vehiculosAtendidos}`)
        console.log(`Total de ingreso en el taller: $${costoTotal.toFixed(2)}`)
        ny.close();
        return;
    }

    ny.question('Ingrese el costo del coche numero '+actual+': ', datos=>{
        const costo = parseFloat(datos)
        if(!Number.isFinite(costo) || costo<0){
            console.log('Ingrese el costo correcto: ');
            costoServicio(actual, vehiculosAtendidos, costoTotal);
            return;
        }
        const ingresoTotal = costoTotal+costo;
        console.log(`Costo acumulado del #${actual}: $${ingresoTotal.toFixed(2)}`)
        costoServicio(actual +1, vehiculosAtendidos, ingresoTotal)
    })
}

ny.question('Cuantos vehiculos son atendidos: ', (datos)=>{
    const vehiculosAtendidos = parseInt(datos);
    if(Number.isInteger(vehiculosAtendidos) && vehiculosAtendidos > 0){
        costoServicio(1, vehiculosAtendidos, 0)
    }else{
        console.log('Cantidad invalida.');
        ny.close();
    }
})