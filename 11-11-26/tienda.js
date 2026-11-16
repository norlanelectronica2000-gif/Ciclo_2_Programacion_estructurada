import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pedidos =[];

const resgistrarPedido = (actual, total) =>{
    if(actual>total){
        console.log('**CANCELACION DE PEDIDO**');
        let cancelado = pedidos.pop();
        console.log(`Pedido cancelado: ${cancelado}\nPEDIDOS RESTANTES:\n`);
        for(let i=0; i<pedidos.length; i++){
            console.log(`Pedido ${i+1}:${pedidos[i]}`);
        }
        console.log(`Pedido restante: ${pedidos.length}`);
        rl.close();
        return;
    }
    rl.question(`Ingrese el codigo del pedido ${actual}: `, codigo=>{
        pedidos.push(codigo);
        resgistrarPedido(actual+1, total);
    })
}

rl.question('¿Cuantos pedidos deseas realizar?: ', cantidad =>{
    const total = Number(cantidad);
    if(!Number.isInteger(total) || total<=0){
        console.log('El numero debe ser mayor o igual a 0.');
        rl.close();
        return;
    }
    resgistrarPedido(1, total);
})