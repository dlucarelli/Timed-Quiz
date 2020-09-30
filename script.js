var queries = document.querySelector("#queries");
var startBtn = document.querySelector("#start-button");
var timer = document.querySelector("#timer");
var scores = document.querySelector("#scores");
var quizPart = document.querySelector("#answers");
var response = document.querySelector("#response")

var timerDisplay = 100;
// var score = 0

var quiz = [
    {
        question: "What is the type pairing of Spiritomb",
        options: ["ghost-ground", "ghost-dark", "rock-ghost", "ghost-flying"],
        answer: "ghost-dark",
        
    },{
        question: "Which of these types is weak to Bug-type?",
        options: ["Ice", "Steel", "Grass", "Fighting"],
        answer: "Grass"
    },{
        question: "Which of these Pok&eacute; is not a dragon type?",
        options: ["Gyarados", "Kingdra", "Hydreigon", "Drampa"],
        answer: "Gyarados"
    },{
        question: "How many power points does the move Raindance have?",
        options: ["5", "10", "15", "25"],
        answer: "5"
    },{
        question: "How much HP does a potion heal?",
        options: ["10", "20", "50", "100"],
        answer: "20"
    },{
        question: "BONUS- Which of these pokemon is best?",
        options: ["Pikachu", "Beedrill", "Lucario", "Bisharp"],
        answer: "Pikachu Beedrill Lucario Bisharp"
    }
] 

var currentQuestion = 0;
function startQuiz() {
    quizPart.textContent = ""
    var quizQuestion = quiz[currentQuestion];
    queries.textContent = quizQuestion.question;
    // console.log(currentQuestion)
    for (var i = 0; i < quizQuestion.options.length; i++) {
      
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("value", quizQuestion.options[i]);
        answerBtn.textContent = quizQuestion.options[i];
        answerBtn.onclick = confirm

        
        quizPart.appendChild(answerBtn);
    }
    function confirm() {
        if (this.value !== quizQuestion.answer) {
            timerDisplay -= 10
            
        }
        else {

        }
        currentQuestion++;
        console.log(currentQuestion)
        console.log(quiz.length)
        if (currentQuestion === quiz.length) {
            endGame()
        }
        else {
            startQuiz()
        }
    }

};
function startTimer() {
    var timerInterval = setInterval(function () {
      quizPart.appendChild(timer);
      timerDisplay--;
      timer.textContent = timerDisplay + "seconds left in quiz";
      if (timerDisplay <= 0) {
        clearInterval(timerInterval);
      }
      return timerInterval;
    }, 1000);
}
function endGame() {
    // clearInterval(timerInterval);
    localStorage.setItem("score", timerDisplay);
    window.location.href = "highscore.html"
    
}
startBtn.addEventListener("click", function() {
     quizPart.textContent = " "
     startQuiz()
     startTimer()
})