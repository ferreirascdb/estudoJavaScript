
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const notas = [];
let i = 0;
let media =0;
function calcularMedia(){
    
    if (i<4){
        readline.question(`Informe a ${i + 1}° `, (nota) =>{
            notas[i] = parseFloat(nota);
            media += notas[i];
            i++;
            calcularMedia();
        });
    } else{
        readline.close();
        media =media/4;
        console.log("a media é: ", media); 
    }
}

calcularMedia();
