/*Variables that are called by their ID's*/

const startButton = document.getElementById("start-btn");
const introArea = document.getElementById("intro-area");
const usernameArea = document.getElementById("username-area");
const quizArea = document.getElementById("quiz-area");


startButton.addEventListener("click", (startQuiz));

function startQuiz() {
    startButton.style.display = "none";
    introArea.style.display = "none";
    usernameArea.style.display = "none";
    quizArea.style.display = "block";

}
