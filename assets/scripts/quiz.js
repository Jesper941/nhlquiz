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

/*Changes your score if the correct answer was chosen.  
Changes colors of the buttons depending on the answer
*/
function selectAnswer(e, answer) {
    const selectedBtn = e.target;
    const isCorrect = answer.correct;
    if (isCorrect) {
        document.getElementById("score").innerText = ++scoreElement;
        selectedBtn.style.background = "#3bd43b";
    } else {
        selectedBtn.style.background = "red";
    }

    // Disables all answer buttons after selecting an answer
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    // Enables the "Next question" button
    nextButton.disabled = false;
}

/*This sets the amount of questions the quiz will have before it goes to the final score screen*/
nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < 10) {
        setNextQuestion();
    } else {
        showScore();
    }

});

/*Recalling the resetQuestion function to clear the page and show the final score area*/
function showScore() {
    resetQuestion();

    scoreArea.style.display = "none";
    quizArea.style.display = "none";
    questionCounter.style.display = "none";
    finalScore.style.display = "flex";
    questionElement.innerText = "";
    startButton.innerText = "Replay";
    startButton.style.display = "flex";
    nextButton.style.display = "none";

    let userName = document.getElementById("full-name").value;

    if (scoreElement > 7) {
        finalScore.innerText = `Wow, you're an NHL expert, ${userName}! You scored ${scoreElement} out of 10`;
    } else if (scoreElement > 3) {
        finalScore.innerText = `It's not your first time hearing about the NHL, eh ${userName}? You scored ${scoreElement} out of 10`;
    } else {
        finalScore.innerText = `Oof, maybe hockey just ain't for you, ${userName}? You scored ${scoreElement} out of 10`;
    }
}