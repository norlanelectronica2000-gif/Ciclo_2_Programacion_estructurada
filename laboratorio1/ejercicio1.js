import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del cliente: ", function(cliente){
    rl.question("Cuantas paginas desea imprimir: ", function(paginas){
        rl.question("Costo de impresion por pagina: ", function(precio){
            rl.question("Cantidad de copias que necesita para el documento: ", function(copias){
                
                let numpaginas = parseFloat(paginas);
                let copiasimprimir = parseFloat(copias);
                let preciohojas = parseFloat(precio)

                let numtotal = numpaginas * copiasimprimir;
                let costodoc = numpaginas * preciohojas;
                let costototal = numtotal * preciohojas;

                console.log(`Nombre del cliente: ${cliente}`);
                console.log(`El costo de una copia completa del documento: $${costodoc.toFixed(2)}`);
                console.log(`La cantidad total de oaginas que se imprimiran: ${numtotal}`);
                console.log(`El costo total del trabajo: $${costototal.toFixed(2)}`);

                rl.close();
            });
        });
    });
});