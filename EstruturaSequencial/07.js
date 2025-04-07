import readline from 'readline';
import process from 'process';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Informe o lado do quadrado: ", (lado)=>{
    let area;
    area = parseFloat(lado)*lado;
    console.log("A área do quadrado é: "+area+ " e o quadrado dela é: " +area*area);
    r1.close();
})