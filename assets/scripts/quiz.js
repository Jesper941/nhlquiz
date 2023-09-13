/*Variables that are called by their ID's*/

const startButton = document.getElementById("start-btn");
const introArea = document.getElementById("intro-area");
const fieldsetArea = document.getElementById("username-area");
const questionsArea = document.getElementById("questions-area");

startButton.addEventListener("click", (startQuiz));

function startQuiz() {
    startButton.style.display = "none";
    introArea.style.display = "none";
    fieldsetArea.style.display = "none";
    questionsArea.style.display = "block";
}
