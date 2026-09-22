const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el nombre del estudiante: ", (nombre)=>{
    rl.question("Ingrese el nombre del equipo: ", (equipo)=>{
        rl.question("Ingrese la cantidas de horas solicitadas: ", (horas)=>{

            let fecha = new Date;
            let dia = fecha.getDate();
            let mes = fecha.getMonth()+1;
            let anio = fecha.getFullYear();
            let hora = fecha.getHours();
            let minutos = fecha.getMinutes();
            let segundos = fecha.getSeconds();

            let costo = horas * 2.25;

            if(horas<12){
                console.log("Prestamo registrado en jornada de mañana:")
            } else{
                console.log("Prestamo registrado en jornada de tarde.")
            }

            console.log("Nombre del estudiante: "+nombre.toUpperCase());
            console.log("Nombre del equipo: "+equipo.toUpperCase());
            console.log(`Costo total por hora: $${costo.toFixed(2)}`)
            console.log(`Fecha actual: ${dia}/${mes}/${anio}`);
            console.log(`Hora actual: ${hora}:${minutos}:${segundos}`);

            rl.close();
        })
    })
})