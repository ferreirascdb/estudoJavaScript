import readline from 'readline';
import process from 'process';


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


r1.question("informe um número ", (num1) =>{
    r1.question("informe o segundo número ", (num2) =>{
        const soma = parseFloat(num1) + parseFloat (num2);
        console.log("A soma é: " +soma);
        r1.close();
    })
});
