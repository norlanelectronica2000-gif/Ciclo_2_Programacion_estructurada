import readline from 'node:readline';

const ny = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSalario(horas, pagoHora){
    return horas*pagoHora;
}

ny.question('Ingrese las horas trabajadas: ', (datosHora)=>{
    ny.question('Ingrese el pago por hora: $', (datosPago)=>{
        const horas = parseFloat(datosHora);
        const pagoHora = parseFloat(datosPago);

        if (isNaN(horas) || isNaN(pagoHora) || horas<0 || pagoHora<0){
            console.log('Error: Por favor ingrese valores numericos validos.')
        } else{
            const salarioTotal = calcularSalario(horas, pagoHora);

            console.log(`   Resumen de Pago`);
            console.log(`Horas trabajadas: ${horas}`);
            console.log(`Pago por hora: $${pagoHora.toFixed(2)}`);
            console.log(`Salario total a pagar: $${salarioTotal.toFixed(2)}`);
        }

        ny.close();
    })
})