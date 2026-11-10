const notas=[8, 9, 6, 5, 4, 5, 9, 10];
let suma = 0;
let aprobados = 0;

for(let i=0; i<notas.length; i++){
    suma = suma+ notas[i];

    if(notas[i]>= 6){
        aprobados++;
    }
}

let promedio = suma/notas.length;
console.log(`Suma de notas ${suma}\nPromedio: ${promedio.toFixed(2)}\nCalificaciones mayores o iguales a 6: ${aprobados}`);