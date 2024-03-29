//2questao
// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML=('Hora do desafio');

//3questao
// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
let palpite = document.querySelector('verificarChute');
function verificarChute() {
    console.log('foi clicado');
}

//4questao
// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
let atencao = document.querySelector('alerta');
   function alerta(){
    alert('Eu amo JS')
   }

   //5questao
//    Crie uma função que é executada quando o botão
//     prompt é clicado, perguntando o nome de uma 
//     cidade do Brasil. Em seguida, exiba um 
//     alerta com a mensagem concatenando a
//      resposta com o texto: Estive em {cidade}
//       e lembrei de você.


function msg() {
    let cidade = prompt('Digite o nome de uma cidade do brasil');
    
    alert(`Estive em  ${cidade} ,e lembrei de você`);

}

//6 questao
// Ao clicar no botão soma,
//  peça 2 números e exiba o resultado da soma em um alerta.


function plus() {
    let n1 = parseInt(prompt("digite um numero"));
    let n2 = parseInt(prompt('digite outro numero'));
    let resultado= n1+n2;
    alert(`${n1} + ${n2} =  ${resultado}`)
}