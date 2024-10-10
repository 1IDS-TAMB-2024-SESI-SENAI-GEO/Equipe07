const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0


function startGame(){
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion() 
}


function displayNextQuestion(){
    resetState()

    if(questions.length === currentQuestionIndex){
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button","answer")
        newAnswer.textContent = answer.text
        if (answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event){
    const answerClicked = event.target

    if(answerClicked.dataset.correct){
        document.body.classList.add("correct")
        totalCorrect++
    }else{
        document.body.classList.add("incorrect")
    } 

    document.querySelectorAll(".answer").forEach(button =>{

        button.disabled = true

    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}


function finishGame(){
    const totalQuestions = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)

let message = ""

switch(true){
    case(performance >= 90):
        message = "Excelente"
    break;
    case(performance>= 70):
        message = "Muito Bom"
    break;
    case(performance>=50):
        message = "Bom"
    break;
    default:
        message = "Pode melhorar"
    
}

$questionsContainer.innerHTML = 
`
<p>
    Você acertou ${totalCorrect} de ${totalQuestions} questões!
    <span>Resultado: ${message}</span>
</p>
<button onclick =window.location.reload()>
    Refazer Teste
</button>
`

}
























const questions = [
    {
      question: "(PUC-PR-2007) Assinale a alternativa que contém a afirmação correta sobre o Naturalismo no Brasil.",
      answers: [
        { text: "O Naturalismo usou elementos da natureza selvagem do Brasil do século XIX para defender teses sobre os defeitos da cultura primitiva.", correct: false },
        { text: "A valorização da natureza rude verificada nos poetas árcades se prolonga na visão naturalista do século XIX, que toma a natureza decadente dos cortiços para provar os malefícios da mestiçagem.", correct: false },
        { text: "O Naturalismo, por seus princípios científicos, considerava as narrativas literárias exemplos de demonstração de teses e idéias sobre a sociedade e o homem.", correct: true },
        { text: "O Naturalismo no Brasil esteve sempre ligado à beleza das paisagens das cidades e do interior do Brasil.", correct: false }
      ]
    },
    {
      question: "(Fuvest) E naquela terra encharcada e fumegante, naquela umidade quente e lodosa, começou a minhocar, e esfervilhar, a crescer, um mundo, uma coisa viva, uma geração, que parecia brotar espontânea, ali mesmo, daquele lameiro, a multiplicar-se como larvas no esterco. O fragmento de “O cortiço”, romance de Aluísio Azevedo, apresenta uma característica fundamental do Naturalismo. Qual?",
      answers: [
        { text: "Uma compreensão biológica do Mundo", correct: true },
        { text: "Uma concepção idealista do Universo", correct: false },
        { text: "Uma compreensão psicológica do Homem.", correct: false },
        { text: "Uma visão sentimental da Natureza.", correct: false }
      ]
    },
    {
      question: '(Mackenzie) Assinale a alternativa incorreta sobre a prosa naturalista:',
      answers: [
        { text: 'Tem como objetivo maior aprofundar a dimensão psicológica das personagens.', correct: true },
        { text: 'As personagens expressam a dependência do homem às leis naturais.', correct: false },
        { text: ' Comportamento das personagens e sua movimentação no espaço determinam-lhe a condição narrativa.>', correct: false },
        { text: "Nenhuma das alternativas", correct: false }
      ]
    },
    {
      question: '(USF-SP) Pode-se entender o Naturalismo como uma particularização do Realismo que:',
      answers: [
        { text: 'analisa as perversões sexuais, condenando-as em nome da moral religiosa.', correct: false },
        { text: 'estabelece um nexo de causa e efeito entre alguns fatores sociológicos e biológicos e a conduta das personagens.', correct: true },
        { text: 'se volta para a Natureza a fim de analisar-lhe os processos cíclicos de renovação.', correct: false },
        { text: 'defende a arte pela arte, isto é, desvinculada de compromissos com a realidade social.', correct: false }
      ]
    },
    {
      question: '(FGV) Assinale a alternativa correta a respeito do Parnasianismo:',
      answers: [
        { text: 'A inspiração é mais importante que a técnica.', correct: false },
        { text: 'Culto da forma: rigor quanto às regras de versificação, ao ritmo, às rimas ricas ou raras.', correct: true },
        { text: 'O nome do movimento vem de um poema de Raimundo Correia.', correct: false },
        { text: ' No Brasil, o Parnasianismo conviveu com o Barroco.', correct: false }
      ]
    }
]