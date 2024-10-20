document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'celula'
    const celulas = document.querySelectorAll('.celula');
    // Seleciona o elemento com o ID 'mensagem'
    const mensagem = document.getElementById('mensagem');
    // Seleciona o botão de reiniciar com o ID 'reiniciar'
    const reiniciarButton = document.getElementById('reiniciar');

    // Variáveis de controle do jogo
    let jogadorAtual = 'X'; // Jogador atual
    let movimentos = { 'X': [], 'O': [] }; // Movimentos dos jogadores
    const maxMovimentos = 3; // Número máximo de movimentos permitidos por jogador

    // Padrões de vitória possíveis
    const padroesDeVitoria = [
        [0, 1, 2], // Linha superior
        [3, 4, 5], // Linha do meio
        [6, 7, 8], // Linha inferior
        [0, 3, 6], // Coluna esquerda
        [1, 4, 7], // Coluna do meio
        [2, 5, 8], // Coluna direita
        [0, 4, 8], // Diagonal
        [2, 4, 6]  // Diagonal
    ];

    // Adiciona os eventos de clique nas células e botão de reiniciar
    celulas.forEach(celula => celula.addEventListener('click', gerenciarClique));
    reiniciarButton.addEventListener('click', reiniciarJogo);

    // Função que gerencia o clique em uma célula
    function gerenciarClique(e) {
        const index = e.target.dataset.index; // Obtém o índice da célula clicada

        // Verifica se a célula está vazia
        if (e.target.textContent === '') {
            // Se o jogador ainda não atingiu o número máximo de movimentos
            if (movimentos[jogadorAtual].length < maxMovimentos) {
                colocarPeca(index); // Coloca a peça na célula
            } else {
                removerPecaAntiga(); // Realoca a peça mais antiga para uma nova posição
                colocarPeca(index); // Coloca a peça na nova célula
            }
        }
    }

    // Coloca a peça na célula e verifica a vitória
    function colocarPeca(index) {
        const celula = document.querySelector(`[data-index='${index}']`); // Seleciona a célula pelo índice
        celula.textContent = jogadorAtual; // Define o texto da célula como o jogador atual
        celula.classList.add(jogadorAtual.toLowerCase()); // Adiciona a classe 'x' ou 'o' à célula
        movimentos[jogadorAtual].push(parseInt(index)); // Adiciona o índice da célula aos movimentos do jogador

        // Desativa a peça mais antiga após o limite de jogadas
        if (movimentos[jogadorAtual].length === maxMovimentos) {
            desativarPecaAntiga();
        }

        // Verifica vitória ou troca de jogador
        if (verificarVitoria(jogadorAtual)) {
            mensagem.textContent = `Jogador '${jogadorAtual}' venceu!`; // Exibe mensagem de vitória
            finalizarJogo(); // Finaliza o jogo
        } else {
            alternarJogador(); // Alterna para o próximo jogador
        }
    }

    // Remove a peça mais antiga do jogador atual
    function removerPecaAntiga() {
        const primeiroMovimento = movimentos[jogadorAtual][0]; // Obtém o primeiro movimento do jogador atual
        const celulaAntiga = document.querySelector(`[data-index='${primeiroMovimento}']`); // Seleciona a célula correspondente
        celulaAntiga.textContent = ''; // Limpa o texto da célula
        celulaAntiga.classList.remove('x', 'o', 'disabled'); // Remove as classes da célula
        celulaAntiga.addEventListener('click', gerenciarClique); // Reativa a célula para clique
        movimentos[jogadorAtual].shift(); // Remove o primeiro movimento do array
    }

    // Desativa a peça mais antiga para impedir que ela seja clicada novamente
    function desativarPecaAntiga() {
        const primeiroMovimento = movimentos[jogadorAtual][0];
        const celulaAntiga = document.querySelector(`[data-index='${primeiroMovimento}']`);
        celulaAntiga.classList.add('disabled');
        celulaAntiga.removeEventListener('click', gerenciarClique); // Desativa o clique
    }

    // Alterna entre os jogadores
    function alternarJogador() {
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; // Alterna o jogador atual
        mensagem.textContent = `Jogador '${jogadorAtual}', sua vez!`; // Atualiza a mensagem para o próximo jogador
    }

    // Verifica se o jogador atual venceu o jogo
    function verificarVitoria(jogador) {
        // Verifica se algum padrão de vitória é atendido pelos movimentos do jogador atual
        return padroesDeVitoria.some(padrao =>
            padrao.every(index => movimentos[jogador].includes(index))
        );
    }

    // Finaliza o jogo, desativando todas as células
    function finalizarJogo() {
        // Remove o evento de clique de todas as células para desativá-las
        celulas.forEach(celula => celula.removeEventListener('click', gerenciarClique));
    }

    // Reinicia o jogo
    function reiniciarJogo() {
        // Confirma se o jogador deseja reiniciar o jogo
        if (confirm('Tem certeza que deseja reiniciar o jogo?')) {
            // Limpa todas as células e reseta as variáveis
            celulas.forEach(celula => {
                celula.textContent = ''; // Limpa o texto da célula
                celula.classList.remove('disabled', 'x', 'o'); // Remove as classes da célula
                celula.addEventListener('click', gerenciarClique); // Reativa o clique na célula
            });
            jogadorAtual = 'X'; // Reseta o jogador atual para 'X'
            movimentos = { 'X': [], 'O': [] }; // Reseta os movimentos dos jogadores
            mensagem.textContent = "Jogador 'X', inicie o jogo"; // Atualiza a mensagem para o início do jogo
        }
    }
});
