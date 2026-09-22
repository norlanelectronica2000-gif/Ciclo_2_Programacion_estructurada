import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el la compra del producto: ", (producto)=>{
    producto = parseFloat(producto);
    if (producto >= 50){
        console.log("Su compra no aplica a envio gratis.")
    } else {
        console.log("Su compra si aplica envio gratis.")
    }
    rl.close();
})