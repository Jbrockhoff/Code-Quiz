//created global objects
var startScreen = document.getElementById("welcome-screen");
var choices = document.getElementById("answers");
var endScreen = document.getElementById("end-screen");
var startBtn = document.getElementById("start");
var questionGen = document.getElementById("questions");
var questionNum = document.getElementById("question-number");
var message = document.getElementById("message");
var submitBtn = document.getElementById("submit");
var scoreEl = document.getElementById("score");
var initialsEl = document.getElementById("initials");
var welcome = document.getElementsByClassName("welcome");
var finalScore = 0;
var index = 0;

//created array for question sets
var questions = [
  {
    question: "Commonly used data types DO NOT include the following: ",
    choices: {
      A: "strings",
      B: "booleans",
      C: "alerts",
      D: "numbers",
    },
    correctAnswer: "C",
  },

  {
    question: "The condition if/else statement is enclosed within:  ",
    choices: {
      A: "numbers and strings",
      B: "curly braces",
      C: "parentheses",
      D: "square brackets",
    },
    correctAnswer: "B",
  },

  {
    question: "Arrays in JavaScript can be used to store: ",
    choices: {
      A: "numbers and strings",
      B: "other arrays",
      C: "booleans",
      D: "all of the above",
    },
    correctAnswer: "D",
  },

  {
    question:
      "String values must be enclosed within ________ when assigned to variables: ",
    choices: {
      A: "commas",
      B: "curly braces",
      C: "quotes",
      D: "parentheses",
    },
    correctAnswer: "C",
  },

  {
    question:
      "A very useful tool in debugging for printing content to the debugger is: ",
    choices: {
      A: "JavaScript",
      B: "Terminal/Bash",
      C: "for loops",
      D: "console.log",
    },
    correctAnswer: "D",
  },
];

//set vars for objects used in timer
var timerCount = document.getElementById("timer-count");
var timerText = document.getElementsByClassName("timer-text");
var timer;
var timeLeft = questions.length * 10;

//created a countdown timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerCount.textContent = timeLeft;
    if (timeLeft === 0) {
      endQuiz();
      clearInterval(timer);
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

//shows final screen and user score
function endQuiz() {
 clearInterval(timer);
 questionGen.classList.add("hide");
 endScreen.classList.remove("hide");
 scoreEl.textContent = timeLeft;
 finalScore = timeLeft;
 if (timeLeft <= 0) {
    scoreEl = timer;
    finalScore.textContent = timeLeft;
 }  
}

//generates the choices into separate lists based on question set
function questionDisplay() {
  choices.textContent = "";
  message.textContent = "";
  questionNum.textContent = questions[index].question;
  var ul = document.createElement("ul");
  
  for (var [key, value] of Object.entries(questions[index].choices)) {
    var li = document.createElement("li");
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = value;
    choiceBtn.setAttribute("data-correct", key); 
    li.appendChild(choiceBtn);
    ul.appendChild(li);
  }
    choices.appendChild(ul);
}

//checks answer and brings up next question
function nextQuestion(event) {
  var userSelection = event.target;
  checkAnswers(userSelection);
  if (timeLeft <= 0) {
    endQuiz();
  }
  index++;
  if (index < questions.length) {
    setTimeout(questionDisplay, 800);
  } else {
    clearInterval(timer);
    endQuiz();
  }
}

//returns correct or wrong based on user selection
function checkAnswers(userSelection) {
  if (questions[index].correctAnswer === userSelection.dataset.correct) {
    message.textContent = "Correct!";
  } else {
    message.textContent = "Wrong!";
    timeLeft = timeLeft - 15;
    if (timeLeft <= 0) {
        timeLeft = 0;
        timerCount.textContent = timeLeft;
        clearInterval(timer);
    }
  }
}


function saveScore() {
    var initials = initialsEl.value
    console.log("initials, time", initials, timeLeft)
    var newScore = {
        score: timeLeft,
        initials: initials, 
    }

    var savedScores = JSON.parse(localStorage.getItem("scores")) || []
    console.log("savedScores", savedScores)
    savedScores.push(newScore)
    localStorage.setItem("scores",JSON.stringify(savedScores))

}

//add high scores with get item and commit to local storage,
// start over button to return to start screen


choices.addEventListener("click", nextQuestion);
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", saveScore);




//function submitInitials
//localstorage

//function for showResults?
//need back button 
//timer score goes negative, how can I stop it at 0?
//need local storage? Clarification needed
//need rules for when all answers are complete/timer hits 0
//need score page with box for client input initials that functions
//need high scores page to display high scores
//can we store high scores or is that too much
//CSS help?
//Bootstrap or no?
//need buttons centered for my own enjoyment


