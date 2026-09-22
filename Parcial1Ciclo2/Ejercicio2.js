const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el nombre del empleado: ", (nombre)=>{
    rl.question("Ingrese la cantidad de productos elaborados: ", (elaborados)=>{
        rl.question("Ingrese la cantidad de productos defectuosos: ", (defectuosos)=>{

            let porcentaje = (elaborados/defectuosos)*100;

            if(porcentaje>=95.00){
                console.log("Produccion aceptada.");
            } else{
                console.log("Produccion requiere revision.");
            }
            
            console.log("Nombre del empleado: "+nombre.toUpperCase());
            console.log("Cantidad de productos correctos: "+elaborados);
            console.log("Cantidad de productos defectuosos: "+defectuosos);
            console.log(`Porcentaje obtenido: ${porcentaje.toFixed(2)}`);
            
            rl.close();
        })
    })
})