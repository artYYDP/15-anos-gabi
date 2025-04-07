# Festa de 15 Anos da Gabriella

Este projeto é um site para a festa de 15 anos da Gabriella. Ele reúne diversas seções interativas e informativas, como uma área "Sobre mim", galeria de fotos, contagem regressiva, confirmação de presença (integrada com Google Forms) e uma lista de presentes com sistema de controle, onde os convidados podem escolher um item e confirmar o presente.

## Funcionalidades

- **Menu Fixo e Header Dinâmico:**
  O menu superior permanece fixo e o header exibe dinamicamente o título da seção atual enquanto o usuário rola a página.

- **Seção "Sobre Mim":**
  Uma área onde a própria Gabriella se apresenta, explicando um pouco sobre sua história e convidando para a festa.

- **Galeria de Fotos:**
  Exibição de fotos da Gabriella em uma linha única, com efeito de hover para destacar cada imagem.

- **Contagem Regressiva:**
  Um cronômetro regressivo até a data do evento, exibindo meses, dias e horas.

- **Confirmação de Presença:**
  Integração com um formulário do Google Forms para que os convidados confirmem sua presença.

- **Lista de Presentes:**
  Cada item inicia como "disponível" e possui um botão "Presentear". Ao clicar, um modal se abre para o convidado inserir nome e telefone. Após a confirmação, o item muda para "Indisponível" e os dados são salvos no `localStorage`.

- **Controle de Presentes:**
  Uma página protegida por senha onde é possível visualizar, em formato de tabela, todos os registros de presentes confirmados. A senha, uma vez validada, permanece ativa por 1 minuto.

- **Reset da Lista:**
  Possibilidade de zerar a lista de presentes diretamente na página de controle (reset do `localStorage`).

- **Links de Referência para Itens:**
  Cada item na lista de presentes exibe um link de referência, permitindo que o usuário acesse mais informações sobre o produto.

## Estrutura do Projeto

/site-festa-gabriella/
├── images
├───── 01.png
├───── 02.jpg
├───── 03.jpg
├───── 04.jpg
├── index.html # Página principal com informações, galerias e contagem regressiva
├── confirmar.html # Página com formulário de confirmação de presença (Google Forms embutido)
├── presentes.html # Página com a lista de presentes e modal de confirmação
├── controle-presentes.html # Página protegida por senha para controle dos presentes confirmados
├── style.css # Arquivo de estilos (CSS)
└── README.md # Este arquivo

## Como Usar

1. **Clonar o Repositório:**
   Clone ou faça o download do projeto para sua máquina local.

2. **Abrir no Navegador:**
   Abra o arquivo `index.html` no navegador ou use uma extensão como "Live Server" do VSCode para visualizar o site.

3. **Interagir com o Site:**
   - Navegue pelas seções do site usando o menu superior.
   - Confira a contagem regressiva até a festa.
   - Preencha o formulário do Google Forms na página de confirmação de presença.
   - Escolha um presente na página de "Lista de Presentes". Ao clicar no botão "Presentear", um modal aparecerá para você inserir seus dados.
   - Na página de controle (`controle-presentes.html`), insira a senha (por exemplo, `4632`) para visualizar a lista de presentes confirmados. O acesso ficará válido por 1 minuto.

4. **Resetar a Lista de Presentes:**
   Na página de controle, clique no botão "Zerar lista de presentes" para limpar os dados salvos.

## Considerações Técnicas

- **LocalStorage:**
  A escolha de um item na lista de presentes é salva no `localStorage` para manter o status mesmo após a página ser recarregada.

- **Segurança:**
  O controle de presentes é protegido por senha simples e temporária, não sendo recomendada para ambientes de alta segurança.

- **Interatividade:**
  O modal de confirmação de presente possui uma mensagem de sucesso que é exibida por 3 segundos após a confirmação.

## Melhorias Futuras

- Integração com um backend para persistência real dos dados.
- Implementação de autenticação mais robusta na página de controle de presentes.
- Adição de animações e efeitos visuais adicionais para uma experiência ainda mais interativa.