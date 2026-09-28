import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese los participantes que terminaron la carrera: ', participantes=>{
    
    let participantesTotal = parseFloat(participantes);
    let total = 0;

    for(let i=1; i<=participantesTotal; i++){
        total=i;
        console.log(`Participante #${i}`);
        switch(total){
        case 1:
            console.log('Gano la medalla de primer lugar.');
            break;
        case 2:
            console.log('Gano la medalla de segundo lugar.');
            break;
        case 3:
            console.log('Gano la medalla de tercer lugar.');
            break;
        case 4:
            console.log('Ganaron una medalla por participar.')
            break;
        case 5:
            console.log('Ganaron una medalla por participar.')
            break;
        case 6:
            console.log('Ganaron una medalla por participar.')
            break;
        case 7:
            console.log('Ganaron una medalla por participar.')
            break;
        case 8:
            console.log('Ganaron una medalla por participar.')
            break;
        case 9:
            console.log('Ganaron una medalla por participar.')
            break;
        case 10:
            console.log('Ganaron una medalla por participar.')
            break;
        default:
            console.log('Gracias por tu participacion.')
            break;
        }
    } 

    console.log(`Total de participantes: ${total}`)

    rl.close();
})