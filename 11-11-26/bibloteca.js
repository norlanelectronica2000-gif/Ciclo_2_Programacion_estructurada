import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const libros =[];

const resgistrarLibros = (actual, total) =>{
    if(actual>total){
        const libroRetirado = libros.pop();
        console.log(`Linros retirados: ${libroRetirado}`)
        console.log(`Libros restantes: ${libros}`)
        console.log(`Cantidad actual de libros registrados: ${libros.length}`);
        rl.close();
        return;
    }
    rl.question(`Ingrese el titulo del libro #${actual}: `, titulo=>{
        libros.push(titulo.trim());
        resgistrarLibros(actual+1, total);
    })
}

rl.question('¿Cuantos pacientes deseas realizar?: ', cantidad =>{
    const total = Number(cantidad);
    if(!Number.isInteger(total) || total<=0){
        console.log('El numero debe ser mayor o igual a 0.');
        rl.close();
        return;
    }
    resgistrarLibros(1, total);
})