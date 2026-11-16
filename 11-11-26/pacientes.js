import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pacientes =[];

const resgistrarPacientes = (actual, total) =>{
    if(actual>total){
        rl.question(`Ingrese el nombre del paciente prioritario: `, prioritario=>{
            pacientes.unshift(prioritario);
            console.log('**ORDEN DE ATENDIDOS**')
            for(let i=0; i<pacientes.length; i++){
                console.log(`Turno ${i+1}: ${pacientes[i]}`);
            }
            rl.close();
        })
        return;
    }
    rl.question(`Ingrese el nombre del paciente ${actual}: `, nombre=>{
        pacientes.push(nombre);
        resgistrarPacientes(actual+1, total);
    })
}

rl.question('¿Cuantos pacientes deseas realizar?: ', cantidad =>{
    const total = Number(cantidad);
    if(!Number.isInteger(total) || total<=0){
        console.log('El numero debe ser mayor o igual a 0.');
        rl.close();
        return;
    }
    resgistrarPacientes(1, total);
})