import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuantos visitantes llegaran?: ', respuesta=>{
    const CantVisitantes = Number(respuesta);
    let entradaGratuita = 0;
    for(let i=1; i<=CantVisitantes; i++){
        if(i%5 ===0){
            console.log(`Visitantes ${i}. Entrada gratuita.`)
            entradaGratuita++
        }
    }
    console.log(`Se otorgaron ${entradaGratuita} entradas gratuitas.`)
    rl.close();
})