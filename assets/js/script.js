const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Ao sair da escola, você é confrontado com uma nova tecnologia revolucionária: um chat que promete responder todas as suas dúvidas. Enquanto você observa admirado, pensa em como essa tecnologia pode ser impactante para lidar com os desafios ambientais que o mundo enfrenta. Qual o primeiro pensamento que lhe ocorre?",
    alternativas: [
      {
        texto: "Isso pode revolucionar a forma como lidamos com o meio ambiente!",
        afirmacao: "afirmação",
      },
      {
        texto: "Será que essa tecnologia pode ajudar a resolver os problemas ambientais?",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, a professora de biologia decide abordar em suas aulas a importância da Inteligência Artificial na preservação do meio ambiente. No fim de uma dessas aulas, ela pede que você escreva um trabalho sobre o uso de IA para resolver questões ambientais. Como você decide agir?",
    alternativas: [
      {
        texto:
          "Decide utilizar uma ferramenta de busca na internet que utiliza IA para encontrar informações relevantes sobre preservação ambiental e as utiliza para escrever o trabalho.",
        afirmacao: "afirmação",
      },
      {
        texto:
          "Opta por escrever o trabalho com base em pesquisas sobre ações de conservação ambiental, tanto online quanto em livros e artigos científicos.",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      "Após a elaboração do trabalho, a professora promove um debate sobre o papel da IA na preservação ambiental e os desafios enfrentados. Durante a discussão, surge um ponto crucial: como a IA pode impactar o futuro do planeta. Qual posição você adota?",
    alternativas: [
      {
        texto:
          "Defende a ideia de que a IA pode ser uma aliada na identificação de problemas ambientais e na criação de soluções eficientes para combatê-los.",
        afirmacao: "afirmação",
      },
      {
        texto:
          "Expressa preocupação com a possibilidade de a IA ser usada de forma irresponsável, resultando em danos irreversíveis ao meio ambiente.",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      "Ao final da discussão, a professora pede que cada aluno crie uma imagem que represente sua visão sobre o papel da IA na preservação ambiental. Como você decide proceder?",
    alternativas: [
      {
        texto:
          "Opta por criar uma imagem manualmente, usando materiais reciclados, para representar a importância da sustentabilidade na evolução tecnológica.",
        afirmacao: "afirmação",
      },
      {
        texto: "Decide criar uma imagem digital utilizando softwares de design ecológicos, simbolizando a harmonia entre tecnologia e natureza.",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      "Você está trabalhando em um projeto de biologia sobre conservação da biodiversidade, mas o grupo está atrasado. Uma pessoa sugere usar um chat alimentado por IA para acelerar o processo. No entanto, quando revisam o trabalho, percebem que o conteúdo está copiado diretamente do chat. Como você reage?",
    alternativas: [
      {
        texto:
          "Entende que a IA pode ser uma ferramenta útil, mas é essencial garantir a originalidade e a integridade do trabalho, contribuindo com ideias próprias e revisando o conteúdo gerado.",
        afirmacao: "afirmação",
      },
      {
        texto:
          "Embora reconheça a eficácia da IA, você se preocupa com a falta de autenticidade e originalidade. Opta por revisar o trabalho e adicionar contribuições pessoais antes de entregá-lo.",
        afirmacao: "afirmação",
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", function () {
      atual++;
      mostraPergunta();
    });
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal = afirmacoes;
  atual++;
  mostraPergunta();
}

mostraPergunta();

