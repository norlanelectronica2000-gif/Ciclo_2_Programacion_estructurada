import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const notasPromedio =(actual, estudiantes, promedio)=>{

    if(actual>estudiantes){
        console.log('Cantidad de estudiantes: '+estudiantes);
        console.log(`Promedio total: ${promedio.toFixed(2)}`);
        ny.close();
        return;
    }
    ny.question('Ingrese la nota del alumno del (del 0 a 10.0) del estudiante #'+actual+': ', dato=>{
        const nota = parseFloat(dato);
        if(!Number.isFinite(nota)|| nota<0){
            console.log('Ingrese nota valida: ');
            notasPromedio(actual, estudiantes, promedio);
            return;
        }
        const nuevoPromedio = promedio+nota/estudiantes;

        console.log(`Nota promedio: ${nuevoPromedio.toFixed(2)}`);

        notasPromedio(actual +1, estudiantes, nuevoPromedio);
    })
}

ny.question('Cuantos estudiantes deseas calificar?: ',dato=>{
    const estudiantes = parseInt(dato);
    if(Number.isInteger(estudiantes) && estudiantes>0){
        notasPromedio(1,estudiantes,0);
    }else{
        console.log('Ingrese la cantidad valida.');
        ny.close();
    }
})