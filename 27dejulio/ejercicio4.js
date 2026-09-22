import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", function(precio){
    rl.question("Ingrese la cantidad que deseas comprar: ", function(cantidad){

        let preciounitario = parseFloat(precio);
        let cantidadtotal = parseInt(cantidad);

        let totalpagar = preciounitario * cantidadtotal;

        console.log(`El total a pagar por ${cantidad} unidades es de: $${totalpagar.toFixed(2)}`);

        rl.close();
    });
});