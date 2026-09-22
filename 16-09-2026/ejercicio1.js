import readline from "node:readline";

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("CONVERSION DE MEDIDAS");
console.log("1. Metros a centimetros");
console.log("2. Kilometros a metros");
console.log("3.Horas a minutos");
console.log("4. Dias a horas");

rl.question("Ingrese una opcion del menu: ", (opcion)=>{
    rl.question("Ingrese la cantidad que desea convertir: ", (cantidad)=>{
        
        cantidad = parseFloat(cantidad);
        let resultado
        
        switch(opcion.toLowerCase()){
            case "1":
                resultado = cantidad * 100;
                console.log(`Resultado: ${resultado}cm`);
                break;
            case "2":
                resultado = cantidad * 1000;
                console.log(`Resultado: ${resultado}m`);
                break;
            case "3":
                resultado = cantidad * 60;
                console.log(`Resultado: ${resultado} minutos`);
                break;
            case "4":
                resultado = cantidad * 24;
                console.log(`Resultado: ${resultado} horas`);
                break;
            default:
                console,log(`Opcion no valida`);
        }
        
        rl.close();
    })
})