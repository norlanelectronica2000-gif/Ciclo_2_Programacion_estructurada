const ventas =[150, 200, 180, 350, 250];

let total=0;
let mayorVenta = ventas[0];
let diaMayor = 0;

for(let i=0; i<ventas.length; i++){
    total = total + ventas[i];
    if(ventas[i]>mayorVenta){
        mayorVenta =ventas[i];
        diaMayor =i;
    }
}

console.log(`Total vendido: $${total.toFixed(2)}\nMayor venta: $${mayorVenta.toFixed(2)}\nDia con maor venta: Dia ${diaMayor+1}`);