import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarVentas =(actual, cantidad, total)=>{
    //CASO BASE
    if(actual>cantidad){
        console.log('Cantidad de ventas: '+cantidad)
        console.log(`Total de ingreso: $${total.toFixed(2)}`)
        ny.close();
        return;
    }
    ny.question('Ingrese el monto de la venta '+actual+': $', dato=>{
        const venta = parseFloat(dato)
        if(!Number.isFinite(venta)|| venta<0){
            console.log('Ingrese el monto valido: ');
            registrarVentas(actual, cantidad, total);
            return;
        }
        const nuevoTotal = total+venta;

        console.log(`Total acumulado: $${nuevoTotal.toFixed(2)}`);

        //LLAMADA RECURSIVA
        registrarVentas(actual +1, cantidad, nuevoTotal);
    })
}

ny.question('Cuantas ventas deseas registrar?: ',dato=>{
    const cantidad = parseInt(dato);
    if(Number.isInteger(cantidad) && cantidad >0){
        registrarVentas(1,cantidad,0);
    }else{
        console.log("Ingrese una cantidad valida.");
        ny.close();
    }
})