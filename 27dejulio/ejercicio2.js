import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", function(producto){
    rl.question("Ingrese el descuento que se aplicara el producto: ", function(descuento){

        let precioProducto = parseFloat(producto);
        let porcentaje = parseFloat(descuento);

        let valorDesc = precioProducto * porcentaje / 100;
        let precioFinal = precioProducto - valorDesc;

        console.log(`Precio original: $${precioProducto.toFixed(2)}`);
        console.log(`Valor del descuento $${valorDesc.toFixed(2)}`);
        console.log(`Precio Final: $${precioFinal.toFixed(2)}`);
        
        rl.close();
    });
});