import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPrecioFinal(precio){
    const descuento = precio * 0.10;
    const precioFinal = precio - descuento
    return precioFinal;
}

ny.question('Ingrese el precion del producto: ',(dato)=>{
    const precio = parseFloat(dato);
    const total = calcularPrecioFinal(precio);
    
    console.log(`Precio origina: $${precio.toFixed(2)}`);
    console.log(`Precio Final con descuento: $${total.toFixed(2)}`);

    ny.close();
})