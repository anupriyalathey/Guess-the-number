let guesses = [];

let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  getRandomNumber();
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

function initGame() {
  correctNumber = getRandomNumber(); //Resets the correct number
  document.getElementById("result").innerHTML = ""; //Resets the result display
  guesses = []; //Resets the guesses array
  displayHistory(); //Resets the guess history display
}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber() {
  let randomNumber = Math.random(); // Math.random gives number between 0,1 (1 exclusive)
  let wholeNumber = Math.floor(randomNumber * 100) + 1; //Math.floor uses only the whole number part and ignores the fractional part
  return wholeNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
  console.log(guesses);
}

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list +=
      "<li class = 'list-group-item'>" +
      "You guessed " +
      guesses[index] +
      "</li>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";

  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";

  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}
