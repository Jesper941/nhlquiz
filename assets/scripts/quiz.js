/*Variables and elements that are declared by their ID's*/

const startButton = document.getElementById("start-btn");
const introArea = document.getElementById("intro-area");
const usernameArea = document.getElementById("username-area");
const quizArea = document.getElementById("quiz-area");
const scoreArea = document.getElementById("score-area");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const finalScore = document.getElementById("final-score");
const questionCounter = document.getElementById("question-number");
let scoreElement = parseInt(document.getElementById("score").innerText);

let randomQuestions, currentQuestion, questionNumber;

/*Listener for the start button to start the quiz*/
startButton.addEventListener("click", (startQuiz));

/*Functions that starts once the start button has been clicked. 
It hides the introduction and reveals the quiz itself*/
function startQuiz() {
    startButton.style.display = "none";
    introArea.style.display = "none";
    usernameArea.style.display = "none";
    quizArea.style.display = "block";
    nextButton.style.display = "center";
    finalScore.style.display = "none";
    scoreArea.style.display = "block";
    questionCounter.style.display = "block";

    //This randomizes the questions in the questions.js to appear in the quiz//
    randomQuestions = questions.sort(() => Math.random() - 0.5);
    //Question counter and correct answers counter//
    currentQuestion = 0;
    questionNumber = 0;
    scoreElement = 0;
}