import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del estudiante: ", (nombre)=>{
    rl.question("Ingrese el apellido del estudiante: ", (apellido)=>{
        rl.question("Ingrese el año de ingreso: ", (ingreso)=>{
            rl.question("Ingrese la cuota mensual: ", (cuota)=>{

                let nombreMayuscula= nombre.toUpperCase();
                let apellidoMayuscula= apellido.toUpperCase();
                let apellidoLetras= apellido.slice(0, 3);

                let ingresoNum= Number(ingreso);
                let ingresoTexto= ingresoNum.toString();
                let ultimosDos= ingresoTexto.slice(2, 4);
                
                let cuotaNum= parseFloat(cuota);
                let cuotaDosCifras= cuotaNum.toFixed(2);

                console.log(`Nombre y apellido: ${nombreMayuscula} ${apellidoMayuscula}`);
                console.log(`Primeras letras del apellido: ${apellidoLetras}`);
                console.log(`Los ultimos dos digitos del año: ${ultimosDos}`);
                console.log(`Cuota Mensual: ${cuotaDosCifras}`);

                rl.close();

            })
        })
    })
})