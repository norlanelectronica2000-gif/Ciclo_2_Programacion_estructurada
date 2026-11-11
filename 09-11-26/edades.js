import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const edad =[];

const registrarEdades=(actual, total)=>{
    if(actual>total){
        console.log("|EDADES REGISTRADAS:|");
        for(let i=0; i<edad.length; i++){
            console.log(`|Persona ${i+1}: ${edad[i]} años.|`)
        }
        rl.close();
        return;
    }

    rl.question(`Ingresa la edad de la persona ${actual}: `, ed =>{
        edad.push(Number(ed));
        registrarEdades(actual+1, total);
    })
}

rl.question('¿Cuantas personas desea registrar?: ', cantidad =>{
    const total= Number(cantidad);
    if(!Number.isInteger(total) || total <= 0){
        console.log("La cantidad debe ser un entro mayor que cero.");
        rl.close();
        return;
    }
    registrarEdades(1, total);
})