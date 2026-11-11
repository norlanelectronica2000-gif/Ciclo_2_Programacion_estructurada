import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precios =[];
let suma=0;

const registrarPrecio = (actual, total) =>{
    
    if(actual>total){
        
        console.log('**REPORTE DE PRODUCTOS**');
        for(let i=0; i<precios.length; i++){
            console.log(`Producto ${i+1}: $${precios[i].toFixed(2)}`);
        }
        
        console.log(`Suma total de precios: $${suma.toFixed(2)}`);
        rl.close();
        return;
    }
    rl.question(`Ingrese el precio del producto ${actual}: $`, precio =>{
        
        let valor = Number(precio);
        precios.push(valor);
        suma = suma+ valor;
        registrarPrecio(actual+1, total);
    })
}

rl.question('¿Cuantos productos desea registrar?:', cantidad =>{
    
    const total= Number(cantidad);
    
    if(!Number.isInteger(total) || total<=0){
        console.log('La cantidad debe ser un entero mayor que cero.');
        rl.close();
        return;
    }

    registrarPrecio(1, total);
})