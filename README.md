# estudoJavaScript

Para printar no terminar ou ver no cosole do navedador usar console.log
console.log("Olá mundo");

-----------------------------------------------------------------------------------------------------

*ReadLine*
Para ler linhasm usar o 'readline', tem duas formas de usar, usando o import e o require()
ex:

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um número: ', (numero) => {
    console.log('O número informado foi ' + numero);
    readline.close();
});

Usando import:

import readline from 'readline';
import process from 'process';


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 

*não esquecer de fechar o readline*
r1.close();
-----------------------------------------------------------------------------------------------------

FOR - > READLINE
Não dá para usar for com readline.question, mas, dá para usar recursividade, olhar como foi feito no exercicio de EstruturaSequencial 04.js


