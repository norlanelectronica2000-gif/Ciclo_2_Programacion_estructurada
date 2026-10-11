import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precioEntrada = 5;
const calcularSubTotal = (cant) => cant*precioEntrada;
const calcularDesc = (subtotal, cant) =>{
    if(cant >= 5){
        return subtotal*0.15;
    }
    return 0;
}

ny.question('¿Cuantas entradas va a comprar?: ', (datoCant)=>{
    const cant = parseInt(datoCant);

    if(isNaN(cant) || cant <= 0){
        console.log('Error: Ingrese una cantidad valida de entradas.');
    } else{
        const subtotal = calcularSubTotal(cant);
        const desc = calcularDesc(subtotal, cant);
        const total = subtotal - desc;

        console.log('   DETALLES DE LA COMPRA DE ENTRADAS');
        console.log(`Cantidad de entradas: ${cant}`);
        console.log(`Subtotal            : $${subtotal.toFixed(2)}`);
        console.log(`Descuento (15%)     : -$${desc.toFixed(2)}`);
        console.log(`Total a pagar       : $${total.toFixed(2)}`);
    }

    ny.close();
});