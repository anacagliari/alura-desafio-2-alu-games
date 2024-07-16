let quantidadeAlugueisJogos = 0;

function alterarStatus(idJogo){
    let jogoSelecionado = document.getElementById(`game-${idJogo}`);
    let imagemJogo = jogoSelecionado.querySelector('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name').textContent;

    if (imagemJogo.classList.contains('dashboard__item__img--rented')) {
        let confirmacaoDevolucao = confirm(`Confirma a devolução do jogo ${nomeJogo}?`);
        if (confirmacaoDevolucao) {
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            imagemJogo.classList.remove('dashboard__item__img--rented');
            quantidadeAlugueisJogos--;
        }
    } else {
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        imagemJogo.classList.add('dashboard__item__img--rented');
        quantidadeAlugueisJogos++;
    }

    console.log(`Quantidade de jogos alugados: ${quantidadeAlugueisJogos}`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
// Este exemplo adiciona um evento DOMContentLoaded que é acionado quando a página é carregada. Nesse momento, ele conta a quantidade inicial de jogos alugados.
document.addEventListener('DOMContentLoaded', function() {
    quantidadeAlugueisJogos = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Quantidade de jogos alugados: ${quantidadeAlugueisJogos}`);
});




// desafios:
//Crie um programa que verifica se uma palavra ou frase é um palíndromo.
let palindromo = prompt("Digite uma palavra ou uma frase para verificar se é um palíndromo: ");

function ehPalindromo(palindromo) {
    // Remove todos os caracteres não alfanuméricos e converte a string para minúsculas
    let ajusteString = palindromo.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Inverte a string
    let inverteString = ajusteString.split('').reverse().join('');
    // Compara a string original com a string invertida
    return ajusteString === inverteString;
}

alert(`Palíndromo de ${palindromo}: ${ehPalindromo(palindromo)}`);


//Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
let valor1 = prompt("Digite o primeiro número: ");
let valor2 = prompt("Digite o segundo número: ");
let valor3 = prompt("Digite o terceiro número: ");

function ordenaNumerosFuncaoSortArray(valor1, valor2, valor3) {
    let ordenacao = [valor1, valor2, valor3].sort((x, y) => x - y);
    console.log(`Números ordenados: ${ordenacao.join(', ')}`);
}

alert(`Número em ordem crescente (Função Sort do Array): ${ordenaNumerosFuncaoSortArray(valor1, valor2, valor3)}`);
