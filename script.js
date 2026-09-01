const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com que frequência você costuma utilizar ferramentas de Inteligência Artificial na sua rotina?",
        alternativas: [
            {
                texto: "Uso praticamente todos os dias para diversas tarefas.",
                afirmacao: "Você integra a Inteligência Artificial diretamente no seu cotidiano, tornando-a uma ferramenta presente na sua rotina diária."
            },
            {
                texto: "Uso raramente ou apenas em situações bem específicas.",
                afirmacao: "Você mantém um uso pontual das tecnologias de IA, recorrendo a elas somente quando surge uma necessidade pontual."
            }
        ]
    },
    {
        enunciado: "Para qual finalidade principal você costuma recorrer às IAs generativas?",
        alternativas: [
            {
                texto: "Estudos, pesquisas, apoio no trabalho ou criação de conteúdo.",
                afirmacao: "Seu foco principal no uso dessas tecnologias é focado no ganho de produtividade, aprendizado e auxílio em tarefas profissionais ou acadêmicas."
            },
            {
                texto: "Entretenimento, curiosidade, testes ou automação de tarefas simples.",
                afirmacao: "Você enxerga na Inteligência Artificial uma forma prática de exploração, suporte rápido e entretenimento nas horas vagas."
            }
        ]
    },
    {
        enunciado: "De que forma a presença da IA afeta o seu ritmo ou qualidade de trabalho/estudo?",
        alternativas: [
            {
                texto: "Acelera meus processos e me ajuda a ter novas ideias rapidamente.",
                afirmacao: "Dessa forma, a tecnologia atua como uma aliada direta na otimização do seu tempo e na expansão do seu processo criativo."
            },
            {
                texto: "Prefiro manter cautela e revisar tudo, pois nem sempre os resultados são precisos.",
                afirmacao: "Por manter um olhar crítico em relação às respostas geradas, você prioriza a precisão antes de adotar os conteúdos prontos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo do seu perfil de uso de IA:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
