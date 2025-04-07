import readline from 'readline';
import process from 'process';
const r1= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("quanto você ganha por hora? ", (ganho)=>{
    r1.question("quantas horas você trabalhou? ", (qtdHoras) =>{
        let salario;
        salario= parseFloat (qtdHoras) * parseFloat (ganho);
        console.log(`seu salário deverá ser de R$`, salario);
        r1.close();
    })
})