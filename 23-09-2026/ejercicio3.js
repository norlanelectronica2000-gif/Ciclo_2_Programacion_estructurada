import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa la cantidad de productos fabricados: ', productos=>{
    productos = parseInt(productos);
    let i1 = 0;
    let i2 = 0;
    for(let i=1; i<=productos; i++){
        if (i % 3 == 0){
            i1 = i1 + 1;
            console.log(`Defectuoso: ${i1}`);
        } else{
            i2 = i2 +1;
            console.log(`No Defectuoso: ${i2}`);
        }
    }
    console.log(`Hay ${i1} defectuosos y ${i2} defectupsos.`);
    rl.close();
})