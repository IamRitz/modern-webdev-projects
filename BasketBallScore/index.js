
let guestScore = 0;
let homeScore = 0;

let scoreHomeEL = document.getElementById("home-score");
let scoreGuestEL = document.getElementById("guest-score");

function flashRedScoreCard(element) {
  element.classList.add("flash-red");

  setTimeout(() => {
    element.classList.remove("flash-red");
  }, 800); // 1 second
}

function flashGreenScoreCard(element) {
  element.classList.add("flash-green");

  setTimeout(() => {
    element.classList.remove("flash-green");
  }, 800); // 1 second
}

function add1PointGuest() {
  guestScore = guestScore + 1;
  scoreGuestEL.textContent = guestScore;

  flashGreenScoreCard(scoreGuestEL);
}

function add2PointGuest() {
  guestScore = guestScore + 2;
  scoreGuestEL.textContent = guestScore;

  flashGreenScoreCard(scoreGuestEL);
}

function add3PointGuest() {
  guestScore = guestScore + 3;
  scoreGuestEL.textContent = guestScore;

  flashGreenScoreCard(scoreGuestEL);
}

function add1PointHome() {
  homeScore = homeScore + 1;
  scoreHomeEL.textContent = homeScore;

  flashRedScoreCard(scoreHomeEL);
}

function add2PointHome() {
  homeScore = homeScore + 2;
  scoreHomeEL.textContent = homeScore;

  flashRedScoreCard(scoreHomeEL);
}

function add3PointHome() {
  homeScore = homeScore + 3;
  scoreHomeEL.textContent = homeScore;

  flashRedScoreCard(scoreHomeEL);
}

function resetScore() {
  guestScore = 0;
  homeScore = 0;

  scoreGuestEL.textContent = guestScore;
  scoreHomeEL.textContent = homeScore;
}
