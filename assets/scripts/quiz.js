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

/*This function is responsible for showing the question and it's answer options in the quiz area.
It also disables the next question button until an answer has been chosen.*/
function showQuestion(question) {
    resetQuestion();
    document.getElementById("question-number").innerText = `${++questionNumber}/10`;
    nextButton.disabled = true;
    questionElement.innerText = question.question;

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

        button.addEventListener("click", (e) => { // Pass the event object (e)
            selectAnswer(e, answer); // Pass the event object and the answer object to selectAnswer
        });

    });
}

// Removes the old answer buttons and resets it for the new question//
function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.firstChild.disabled = false; // Set disabled to false to make buttons clickable
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
