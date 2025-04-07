import readline from 'readline';
import process from 'process';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Informe os centimetros: ", (cm) =>{
    let metros;
    metros = parseFloat (cm)/100;
    console.log("O valor informado em metros é: " +metros + "m");
    r1.close(); 
});