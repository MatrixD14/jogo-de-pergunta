// Função para embaralhar um array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Lista de perguntas e respostas
let questions = [{
        question: "Qual é o cérebro do seu computador?",
        options: shuffleArray(["Processador", "Memória RAM", "HD/SSD", "Placa de Vídeo", "Placa Mãe", "Fonte de Alimentação"]),
        answer: "Processador"
    },
    {
        question: "Qual é a memória de curto prazo do seu computador?",
        options: shuffleArray(["Processador", "Memória RAM", "HD/SSD", "Placa de Vídeo", "Placa Mãe", "Fonte de Alimentação"]),
        answer: "Memória RAM"
    },
    {
        question: "Onde os dados são armazenados permanentemente no seu computador?",
        options: shuffleArray(["Processador", "Memória RAM", "HD/SSD", "Placa de Vídeo", "Placa Mãe", "Fonte de Alimentação"]),
        answer: "HD/SSD"
    },
    {
        question: "Qual componente é responsável pelo processamento de gráficos?",
        options: shuffleArray(["Memória RAM", "Processador", "Placa de Vídeo", "HD/SSD", "Placa Mãe", "Fonte de Alimentação"]),
        answer: "Placa de Vídeo"
    },
    {
        question: "Qual é a peça principal do seu computador, onde todos os outros componentes são conectados?",
        options: shuffleArray(["Processador", "Memória RAM", "HD/SSD", "Placa de Vídeo", "Placa Mãe", "Fonte de Alimentação"]),
        answer: "Placa Mãe"
    }
];

// Embaralhar a lista de perguntas
questions = shuffleArray(questions);

let currentQuestion = 0;
let score = 0;
let timerInterval;

// Carrega a pergunta atual
function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById('question').innerText = q.question;
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = "";
        q.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-primary btn-block mb-2';
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            optionsDiv.appendChild(button);
        });
    } else {
        endGame();
    }
}

// Verifica se a resposta selecionada está correta
function checkAnswer(selectedOption) {
    const q = questions[currentQuestion];
    if (selectedOption === q.answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

// Encerra o jogo e mostra a pontuação
function endGame() {
    clearInterval(timerInterval);
    document.getElementById('game').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `Você marcou ${score} pontos de ${questions.length} possíveis.`;
}

// Passa para a próxima pergunta
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// Inicializa o jogo quando a página carrega
  window.onload = function() {
    loadQuestion();
    startTimer();
};

// Inicia o temporizador
function startTimer() {
    let timeLeft = 40;
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `Tempo restante: ${timeLeft} segundos`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Tempo restante: ${timeLeft} segundos`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Encerra o jogo antes do tempo
const but = document.querySelector("#endEarly");
let nubem=0;
but.addEventListener('click',()=>{
  nubem ++;
  if(nubem==1){
    clearInterval(timerInterval);
    endGame();
    but.textContent="volta";
    but.style.padding="5px 25px"
  }
  if(nubem==2){
    location.reload();
  }
});