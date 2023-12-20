var squares = document.querySelectorAll(".square");
var score = document.getElementById("h1");
var timeLeft = document.getElementById("h2");
var result = 0;
var count = 60;
var displayInterval;
var timerInterval;
var hitposition;

function handleHit(event) {
  if (event.target.id === hitposition) {
    result++;
    score.textContent = result;
  }
}

function startgame() {
  function timer() {
    count--;
    timeLeft.textContent = count;
    if (count === 0) {
      clearInterval(displayInterval);
      clearInterval(timerInterval);
      alert("TIMES UP YOUR SCORE IS:" + result);
      reset();
    }
  }

  function display() {
    squares.forEach((square) => {
      square.classList.remove("mole");
    });

    var randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    hitposition = randomPosition.id;
  }

  squares.forEach((square) => {
    square.addEventListener("mousedown", handleHit);
  });

  function moveMole() {
    displayInterval = setInterval(display, 500);
    timerInterval = setInterval(timer, 500);
  }

  moveMole();
}

function reset() {
  clearInterval(displayInterval);
  clearInterval(timerInterval);
  hitposition = 0;
  result = 0;
  count = 60;
  timeLeft.textContent = count;
  score.textContent = result;
  squares.forEach((square) => {
    square.classList.remove("mole");
    square.removeEventListener("mousedown", handleHit);
  });
}

reset();
