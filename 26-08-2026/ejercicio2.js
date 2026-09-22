import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre)=>{
    rl.question("Ingrese su edad: ", (edad)=>{
        
        edad = parseInt(edad);
        if (edad >= 0 && edad <=12){
            console.log(`${nombre} usted es una persona joven.`);
        }
        else if (edad >= 18 && edad <=25){
            console.log(`${nombre} usted es una persona adulto joven.`)
        }
        else{
            console.log(`${nombre} usted es un adulto.`)
        }
        rl.close();
        
    })
})