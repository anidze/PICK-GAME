"use strict";

let scoreEl0 = document.querySelector("#score-0");
let scoreEl1 = document.getElementById("score-1");
let currentScore0 = document.getElementById("current-score-id-0");
let currentScore1 = document.getElementById("current-score-id-1");

let newGame = document.querySelector(".new-game");
let rollDice = document.querySelector("#rollDice");
let hold = document.querySelector(".hold");

let divOne = document.querySelector(".playerdiv-0");
let divTwo = document.querySelector(".playerdiv-1");

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

let imgeEl = document.querySelector(".images");

imgeEl.classList.add("hidden");

const switchPlayer = function () {
  document.getElementById(`current-score-id-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  divOne.classList.toggle("actives");
  divTwo.classList.toggle("actives");
};

let score, activePlayer, currentScore, playing;
const init = function () {
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  divOne.classList.add("avtives");
  divTwo.classList.remove("actives");
  divOne.classList.remove("winner");
  divTwo.classList.remove("winner");
  imgeEl.classList.add("hidden");
};
init();

rollDice.addEventListener("click", function () {
  if (playing) {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    imgeEl.classList.remove("hidden");

    imgeEl.src = `assets/pic-${dice}.jpg`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-score-id-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      playing = false;
      imgeEl.classList.add("hidden");
      document
        .querySelector(`.playerdiv-${activePlayer}`)
        .classList.add("winner");
      document
        .querySelector(`.playerdiv-${activePlayer}`)
        .classList.remove("actives");
    } else {
      switchPlayer();
    }
  }
});
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

newGame.addEventListener("click", init);
