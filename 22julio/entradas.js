//1- Importar Modulo
import readline from "node:readline";

//2- Creamos la Interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Hacemos la pregunta al usuario
rl.question("Ingrese un primer numero: ",function(num1){
    rl.question("Ingrese el segundo numero: ",function(num2){

        num1 = Number(num1);
        num2 = Number(num2);

        let suma = num1 + num2
        console.log(`La suma de los dos numeros es: ${suma}`)
        rl.close();
    })
})