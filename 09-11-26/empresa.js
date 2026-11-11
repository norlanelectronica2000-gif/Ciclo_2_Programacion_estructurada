// 2- Una empresa necesita llevar un control de las ventas realizadas durante varios días de trabajo. 
// Desarrolle un programa que solicite al usuario cuántos días de ventas desea registrar. 
// Mediante una función recursiva, solicite el monto vendido en cada día y almacene los valores en un arreglo.
// Al finalizar, el programa deberá calcular el total vendido e identificar el día en que se obtuvo la mayor venta.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ventas =[];
let ventasTotal = 0;

const montoVendido = (actual, dias) =>{
    if(actual>dias){
        let mayorVenta = Math.max(...ventas);
        let diaMayor = ventas.indexOf(mayorVenta);
        console.log(`Dias: ${dias}\nTotal Vendido: $${ventasTotal.toFixed(2)}\nLa mayor venta se obtuvo el día ${diaMayor} con un monto de $${mayorVenta.toFixed(2)}`);
        rl.close();
        return;
    }
    rl.question(`Ingrese el monto que vendio en el dia ${actual}: $`, monto =>{
        let venta = Number(monto);
        ventas.push(venta);
        ventasTotal = ventasTotal + venta;
        montoVendido(actual+1, dias);
    })
}

rl.question('¿Cuantos dias de ventas desea registrar?: ', dia =>{
    const dias = Number(dia);
    if(!Number.isInteger(dias) || dias<=0){
        console.log('Los dias debe ser mayor que cero.');
        rl.close();
        return;
    }
    montoVendido(1, dias);
})