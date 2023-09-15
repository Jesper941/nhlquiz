/*Variables that are called by their ID's*/

const startButton = document.getElementById("start-btn");
const introArea = document.getElementById("intro-area");
const usernameArea = document.getElementById("username-area");
const quizArea = document.getElementById("quiz-area");
const countArea = document.getElementById("count-area");
const answerButtons = document.getElementById("answer-buttons");

/*Listener for the start button*/
startButton.addEventListener("click", (startQuiz));

/*Functions that starts once the start button has been clicked*/
function startQuiz() {
    startButton.style.display = "none";
    introArea.style.display = "none";
    usernameArea.style.display = "none";
    quizArea.style.display = "block";
    countArea.style.display = "block";
}
