# Jogo da Velha 3 Peças

Este é um jogo da velha simples implementado em HTML, CSS e JavaScript. O jogo permite que dois jogadores alternem, colocando suas peças em um tabuleiro 3x3, com a lógica de vitória sendo aplicada.

## Como Jogar

1. **Objetivo**: O objetivo do jogo é ser o primeiro a alinhar três peças na horizontal, vertical ou diagonal.
2. **Início do Jogo**: O jogador "X" começa.
3. **Jogadas**:
   - Clique em uma célula vazia do tabuleiro para colocar sua peça.
   - O jogador atual pode fazer até três jogadas.
   - Após três jogadas, a peça mais antiga será removida quando um novo movimento for feito.
4. **Vencedor**: O jogo termina quando um jogador conseguir alinhar três peças ou quando não houver mais movimentos disponíveis (empate).
5. **Reiniciar o Jogo**: Clique no botão "Reiniciar" para começar um novo jogo.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: O arquivo HTML principal que contém a estrutura do tabuleiro e a interface do usuário.
- `style.css`: O arquivo CSS que estiliza o tabuleiro e as células.
- `script.js`: O arquivo JavaScript que contém a lógica do jogo.

### Exemplo de Estrutura de Arquivos

```
/jogo-da-velha
│
├── index.html
└── src/
    ├── css/
    │    └── style.css
    └── /js
        └── script.js
```

## Funcionalidades

- **Tabuleiro Dinâmico**: O tabuleiro é gerado utilizando HTML, e as jogadas são feitas através de eventos de clique em células específicas.
- **Controle de Jogadas**: A lógica do jogo mantém o controle de quantas jogadas cada jogador fez, permitindo a remoção da peça mais antiga quando necessário.
- **Verificação de Vitória**: A cada jogada, o jogo verifica se o jogador atual venceu, exibindo uma mensagem em 'status' se um jogador ganhar.
- **Reinicialização do Jogo**: O jogo pode ser reiniciado a qualquer momento, limpando o tabuleiro e resetando o estado.

## Instalação

Para jogar, siga estas etapas:

1. Clone o repositório:
   ```bash
   git clone https://github.com/vitoroliveirasilva/JogoDaVelha3Pecas.git
   cd JogoDaVelha3Pecas
   ```

2. Abra o arquivo `index.html` em seu navegador da web.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
