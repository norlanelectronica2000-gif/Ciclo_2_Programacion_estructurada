import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularPromedio = (n1, n2, n3)=>{
    return (n1+n2+n3)/3;
};

ny.question('Ingrese la nota 1: ', (nota1)=>{
    ny.question('Ingrese la nota 2: ', (nota2)=>{
        ny.question('Ingrese la nota 3: ', (nota3)=>{
            const n1 = parseFloat(nota1);
            const n2 = parseFloat(nota2);
            const n3 = parseFloat(nota3);

            const promedio = calcularPromedio(n1, n2, n3);
            
            console.log('Promedio Final');

            if(promedio>=6){
                console.log(`Aprobastes con: ${promedio.toFixed(2)}`)
            } else{
                console.log(`Reprobastes con: ${promedio.toFixed(2)}`)
            }

            ny.close();
        })
    })
})