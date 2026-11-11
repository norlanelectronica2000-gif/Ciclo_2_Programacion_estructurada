//  1- Un docente necesita analizar las calificaciones obtenidas por sus estudiantes en una evaluación. 
// Desarrolle un programa que solicite al usuario cuántos estudiantes desea registrar. 
// Mediante una función recursiva, solicite la calificación de cada estudiante y almacénela en un arreglo.
// Al finalizar, el programa deberá calcular y mostrar el promedio general de las calificaciones y 
// la cantidad de estudiantes que obtuvieron una nota mayor o igual a 6.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nota=[];
let notas = 0;
let aprobados = 0;

const notasEstudiantes = (actual, alumnos) =>{
    if(actual>alumnos){
        aprobados = nota.filter(n=>n>=6).length;
        let promedio = notas/nota.length;
        console.log(`Cantidad de alumnos calificados: ${alumnos}\nPromedio: ${promedio.toFixed(2)}\nEstudiantes aprobados mayor de 6: ${aprobados}`)
        rl.close();
        return;
    }
    rl.question(`Solicite la calificacion del estudiante ${actual}: `, calificacion =>{
        let n = Number(calificacion);
        nota.push(n);
        notas = notas + n;
        notasEstudiantes(actual+1, alumnos);
    })
}

rl.question('¿Cuantos estudiantes desea registrar?: ', estudiantes=>{
    const alumnos = Number(estudiantes);
    
    if(!Number.isInteger(alumnos) || alumnos<=0){
        console.log('La cantidad debe ser un entero mayor que cero.');
        rl.close();
        return;
    }

    notasEstudiantes(1, alumnos);
})