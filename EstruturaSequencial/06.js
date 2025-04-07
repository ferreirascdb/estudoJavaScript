import readline from 'readline';
import process from 'process';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Informe o raio do circulo: ", (raio)=>{
    let area;
    area = parseFloat (raio*raio)*3.14;
    console.log("A área do circulo é: " +area);
    r1.close();
});