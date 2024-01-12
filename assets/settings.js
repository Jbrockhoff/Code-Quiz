
// var quizContainer = document.querySelector("#quiz");
// var resultsContainer = document.querySelector("#results");
// var finalScore = document.querySelector("#score");
// var submitButton = document.querySelector("#submit");

// var scoreCount = document.querySelector("score-count");

//created array for question sets
var questions = [
    {
    question: "Commonly used data types DO NOT include the following: ", 
        A:"strings",
        B: "booleans",
        C: "alerts",
        D: "numbers",
        correctAnswer: "alerts",
    },  

    {
        question:  "The condition if/else statement is enclosed within:  ",
        A: "numbers and strings",
        B: "curly braces",
        C: "parentheses",
        D: "square brackets",
        correctAnswer: "curly braces"
    },

    {
        question:  "Arrays in JavaScript can be used to store: ",
        A: "numbers and strings",
        B: "other arrays",
        C: "booleans",
        D: "all of the above",
        correctAnswer: "all of the above"
    },

    {
        question:  "String valuesmust be enclosed within ________ when assigned to variables: ",
        A: "commas",
        B: "curly braces",
        C: "quotes",
        D: "parentheses",
        correctAnswer: "quotes"
    },
    {
        question:  "A very useful tool in debugging for printing content to the debugger is: ",
        A: "JavaScript",
        B: "Terminal/Bash",
        C: "for loops",
        D: "console.log",
        correctAnswer: "console.log"
    },
]

//set vars for objects used in timer
var startBtn = document.querySelector("#start");
var timerCount = document.querySelector("#timer-count");
var timerText= document.querySelector(".timer-text");
var timer;
var timeLeft = 100;

var question = questions.map(questionGen);

function questionGen() {
    for (var i = 0; i < questions.length; i++) {
        questions;
    }
    
    if (question) {
        //n
    }
}
//created a countdown timer
function startTimer() {
    timer = setInterval(function () {
    timeLeft--;
    timerCount.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer)
    }
    return timerCount;
    }, 1000);
}

startBtn.addEventListener("click", startTimer);
// function init() {
//     ;
//   }

//var quizContainer = document.getElementById("quiz");
//var resultsContainer = document.getElementById("results");
//var submitButton = document.getElementById("submit");

//function buildQuiz(){} function showResults(){} // display quiz right away
//buildQuiz(); // on submit, show results
//submitButton.addEventListener('click', showResults);

// const myQuestions = [{ question: "Commonly used data types DO NOT include the following:", 
// answers: { A: "strings", B: "booleans", C:"alerts", D: "numbers"}, correctAnswer: "C"},
// { question: "The conditional if/else statement is enclosed within______",
// answers: {A: "numbers and strings", B: "curly braces", C: "parenthses", D: "straight brackets"}, correctAnswer: "B"},
// { question: "Arrays in Javascript can be used to store: ",
// answers: {A: "numbers and strings", B: "other arrays", C: "booleans", D: "all of the above"}, correctAnswer: "D"},
// { question: "String valuesmust be enclosed within ________ when assigned to variables: ",
// answers: {A: "commas", B: "curly braces", C: "quotes", D: "parentheses"}, correctAnswer: "C"},
// {question: "A very useful tool in debugging for printing content to the debugger is: ",
// answers: {A: "JavaScrpit", B: "Terminal/Bash", C: "for loops", D: "console.log"}, correctAnswer: "D"}
// ]


//need questions in buttons?
//need rules to hide buttons and show buttons
//need to let client know if their answer was correct or wrong
//need time subtracted from timer when answer is incorrect
//need rules for when all answers are complete/timer hits 0
//create for loops for each question, i = 0, go through each question and answers in array
//.textContent to access each question's index
//index 0 is question 1- index 4 being question 5 EACH GET CSS (combine? set vars?)
//need score page with box for client input initials
//heed high scores page to display high scores/allow client to go back to start

//function (questions, quizContainer, resultsContainer, submitButton)
