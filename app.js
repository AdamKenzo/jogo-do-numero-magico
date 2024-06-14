
let listaDeNumerosSorteados = [];
let numeroLimite = 2;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

exibirMensagemInicial();
// usando function para evitar a repetição de código
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    let textoInicialNumeroLimete = `Escolha um número mágico entre 1 e ${numeroLimite}`
    exibirTextoNaTela('p', textoInicialNumeroLimete);
    exibirTextoNaTela('h1', 'Jogo do número mágico');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número mágico com ${tentativas} ${palavraTetativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if ((chute == 0) || (chute > numeroLimite) || (chute < 0)){
        exibirTextoNaTela('p', 'Por favor, digite um número válido');
        console.log("-----------------------------------------------------");
        console.log("Homenagem ao Will, que deu ideia dessa funcionalidade");
        console.log("-----------------------------------------------------");
    }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número mágico é menor');
        } else {
            exibirTextoNaTela('p', 'O número mágico é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (listaDeNumerosSorteados[listaDeNumerosSorteados.length - 1] == numeroEscolhido){
        console.log('oi');
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados = [];
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



