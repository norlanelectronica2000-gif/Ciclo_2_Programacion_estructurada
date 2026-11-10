let precios = [39.99, 50.00, 20.00, 9.99, 13.99, 19.99];

for(let i=0; i<precios.length; i++){
    if(precios[i]>15){
        console.log(`$ ${precios[i].toFixed(2)}`);
    }
}