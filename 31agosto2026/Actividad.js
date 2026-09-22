// Ejercicio 3: Una tienda desea evaluar las ventas realizadas por uno de sus
// vendedores durante tres días.
// Solicite:
// • Nombre del vendedor.
// • Salario base
// • Venta del día 1.
// • Venta del día 2.
// • Venta del día 3.
// Calcule:
// venta total y el promedio de ventas
// Si el promedio diario es mayor a $150, otorgue una bonificación del 20% a su salario
// base.
// De lo contrario, otorgue un 10% de bonificación a su salario base.
// Muestre el nombre del vendedor en mayúsculas, la venta total, el promedio diario con
// dos cifras decimales y el salario a devengar.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question("Ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese la base del salario: ", (base) => {
        rl.question("Ingrese la venta del dia 1:", (Prventa) => {
            rl.question("Ingrese la venta del dia 2:", (Segventa) => {       
                rl.question("Ingrese la venta del dia 3:", (Terventa) => {
          
                    let SalaBase = parseFloat(base);
                    let venta1 = parseFloat(Prventa);
                    let venta2 = parseFloat(Segventa);          
                    let Venta3 = parseFloat(Terventa);

                    let totalVentas = venta1 + venta2 + Venta3;
                    let promedio = totalVentas / 3;
                    let NombreMayuscula = nombre.toLocaleUpperCase();
                    let bonificacion= 0;
                    let salarioTotal=0;

                    if (promedio > 150) {
                        bonificacion = SalaBase * 0.20;
                        salarioTotal = SalaBase + bonificacion;
                    }
                    else {
                        bonificacion = SalaBase * 0.10;
                        salarioTotal = SalaBase + bonificacion;
                    }
           
                    console.log(`${NombreMayuscula}`);
                    console.log(`El total de ventas es: $${totalVentas}`);
                    console.log(`El Promedio diario es de: $${promedio.toFixed(2)}`);           
                    console.log(`Su salario final es de: $${salarioTotal}`);

                    rl.close();
                })
            })
        })
    })
});