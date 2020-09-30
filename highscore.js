var input = document.querySelector("#score");
var scores = document.querySelector("#lastHighscore");
localStorage.setItem("name", input.value)
scores.textContent = localStorage.getItem("name", "score")