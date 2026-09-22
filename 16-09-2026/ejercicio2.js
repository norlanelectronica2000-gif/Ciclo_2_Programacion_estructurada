import readline from "node:readline";

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", (nombre)=>{
    rl.question("Ingrese el precio del producto: ", (datoPrecio)=>{
        rl.question("Ingrese la cantidad comprada: ", (datoCantidad)=>{
            
            let precio= parseFloat(datoPrecio);
            let cantidad= parseInt(datoCantidad);
            
            console.log("TIPO DE COMPRA");
            console.log("1. Compra normal");
            console.log("2.Compra con envios");
            console.log("3.Compra con empaque especial");

            rl.question("Ingrese una de las opciones: ", (opcion)=>{
                
                opcion= parseInt(opcion);
                let total;
                
                switch(opcion){
                    case 1:
                        total = precio*cantidad;
                        break;
                    case 2:
                        total =(precio*cantidad)+3.50;
                        break;
                    case 3:
                        total =(precio*cantidad)+2.00;
                        break;
                    default:
                        console.log("Opcion no valida");
                }

                console.log("DETALLE DE LA COMPRA")
                console.log(`Producto: `)
            })
        })
    })
})