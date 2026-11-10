let precios = [15, 25, 30, 10, 45];

let contador = 0;

for (let i = 0; i < precios.length; i++) {

    if (precios[i] > 20) {

        contador++;

        console.log(`Precio encontrado: $${precios[i]}`);

    }

}

console.log(`Productos con precio mayor a $20: ${contador}`);