import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarNotas=(actual, cantidad, suma)=>{
    if(actual>cantidad){
        const promedio = suma/cantidad;
        console.log(`Nota Final: ${promedio.toFixed(2)}`);
        if(promedio>=6){
            console.log('Usted a aprobado.');
        } else{
            console.log('Usted a reprobado.');
        }
        ny.close();
        return;
    }
    ny.question('Ingrese la nota '+actual+': ', dato=>{
        const nota = parseFloat(dato);
        if(!Number.isFinite(nota) || nota<0 || nota>10){
            console.log('Ingrese una nota entre 0 y 10.');
            registrarNotas(actual, cantidad, suma);
            return;
        }
        const nuevaSuma = suma + nota;
        registrarNotas(actual +1, cantidad, nuevaSuma);
    })
}

ny.question('¿Cuantas evaluaciones desea registrar?: ', dato=>{
    const cantidad = parseFloat(dato);
    if(Number.isFinite(cantidad) && cantidad > 0){
        registrarNotas(1,cantidad,0);
    }else{
        console.log('Cantidad no valida.');
        ny.close();
    }
})