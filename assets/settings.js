//created objects to take from html
var startScreen = document.querySelector("#welcome-screen"); 
var choices = document.querySelector("#answer");
var endScreen = document.querySelector("#end-screen");
var startBtn = document.querySelector("#start");
var questionGen = document.querySelector("#questions");
var questionNum = document.querySelector("#question-number");
var message = document.querySelector("#message");
var sumbitBtn = document.querySelector("#submit");
var welcome= document.querySelector(".welcome");
var index = 0

//created array for question sets
var questions = [
    {
      question: "Commonly used data types DO NOT include the following: ", 
      choices: {
        A:"strings",
        B: "booleans",
        C: "alerts",
        D: "numbers",
    },
        correctAnswer: "alerts",
    },  

    
    {
        question:  "The condition if/else statement is enclosed within:  ",
        choices: {
          A: "numbers and strings",
          B: "curly braces",
          C: "parentheses",
          D: "square brackets"
        },  
        correctAnswer: "curly braces"
    },

    {
        question:  "Arrays in JavaScript can be used to store: ",
        choices: {
          A: "numbers and strings",
          B: "other arrays",
          C: "booleans",
          D: "all of the above",
        },
        correctAnswer: "all of the above"
    },

    {
        question:  "String valuesmust be enclosed within ________ when assigned to variables: ",
        choices: {
          A: "commas",
          B: "curly braces",
          C: "quotes",
          D: "parentheses",
        },
        correctAnswer: "quotes"
    },

    {
        question:  "A very useful tool in debugging for printing content to the debugger is: ",
        choices: {
          A: "JavaScript",
          B: "Terminal/Bash",
          C: "for loops",
          D: "console.log",
        },
        correctAnswer: "console.log"
    },
]

//set vars for objects used in timer
var timerCount = document.querySelector("#timer-count");
var timerText= document.querySelector(".timer-text");
var timer;
var timeLeft = questions.length * 10;
 

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


//hides main screen and removes hide option on all questions
function startQuiz() {
    startScreen.classList.add("hide");
    questionGen.classList.remove("hide");
    startTimer();
    questionDisplay();
}

//generates the choices into separate lists based on question set
function questionDisplay() {
    choices.textContent = "";
    message.textContent = "";
    questionNum.textConent = questions[index].question;
    var ol = document.createElement("ol");

    var li1=document.createElement("li");
    li1.textContent = questions[index].choices.A;
    
    var li2=document.createElement("li");
    li2.textContent = questions[index].choices.B;
    
    var li3=document.createElement("li");
    li3.textContent = questions[index].choices.C;

    
    var li4=document.createElement("li");
    li4.textContent = questions[index].choices.D;

    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);
    ol.appendChild(li4);
    choices.appendChild(ol);
};


//checks answer and brings up next question
function nextQuestion (event) {
    var userSelection = event.target.textContent;
    checkAnswers(userSelection)
    index++
    if (index < questions.length)  {
        setTimeout(questionDisplay, 800);
    } 
    else {
        clearInterval(timer)
    }
}

//checks answers and returns correct or wrong based on selection
function checkAnswers (userSelection) {
    if (questions[index].correctAnswer === userSelection) {
        message.textContent = "Correct!";
    }
    else {
        message.textContent = "Wrong!";
        timeLeft= timeLeft - 15;
    }
}

choices.addEventListener("click", nextQuestion);
startBtn.addEventListener("click", startQuiz);
//submitButton.addEventListener('click', showResults);



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
