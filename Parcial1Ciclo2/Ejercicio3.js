const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el nombre completo del estudiante: ", (nombrecompleto)=>{
    rl.question("Ingrese codigo de inscrpicion (ejemplo: ING-2026-0845): ", (codigo)=>{
        
        let anio = codigo.slice(4,8);

        if(anio==2026){
            console.log("=============================");
            console.log("");
            console.log("    TICKET DE INSCRIPCION");
            console.log("");
            console.log("=============================");
            console.log("Estudiante: "+nombrecompleto.toUpperCase());
            console.log("Codigo: "+codigo.toUpperCase());
            console.log("-----------------------------");
            console.log("Carrera: "+codigo.slice(0,3).toUpperCase());
            console.log("Carrera: "+codigo.slice(4,8));
            console.log("Carrera: "+codigo.slice(9,13));
            console.log("-----------------------------");
            console.log("Estado: Inscripcion Valida");
            console.log("=============================");
        } else{
            console.log("=============================");
            console.log("");
            console.log("    TICKET DE INSCRIPCION");
            console.log("");
            console.log("=============================");
            console.log("Estudiante: "+nombrecompleto.toUpperCase());
            console.log("Codigo: "+codigo.toUpperCase());
            console.log("-----------------------------");
            console.log("Carrera: "+codigo.slice(0,3).toUpperCase());
            console.log("Carrera: "+codigo.slice(4,8));
            console.log("Carrera: "+codigo.slice(9,13));
            console.log("-----------------------------");
            console.log("Estado: Verifica año de inscripcion");
            console.log("=============================");
        }
        rl.close();
    })
})