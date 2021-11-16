window.onload = main;

let answer;

/** Start of the program */
function main() {
  addEventListener();
}

function addEventListener() {
  const startButton = document.getElementById('start-button');
  startButton.onclick = startGame;

  
  const digYourWayOut = document.getElementById('dig-story');
  digYourWayOut.onclick = digYourWayOutStory;
}

function startGame() {
  const startGame = document.getElementById('first-page');

  if (startGame.style.display === 'block') {

  } else {
    startGame.style.display = 'none'
  }
  prepareStory();
}

/** Input name in prompt */
function prepareStory() {
  // const answer = prompt('Skriv in ditt namn');
  // alert('Hej ' + answer + '! Här börjar vägen ut till friheten. Du befinner dig i din cell och får nu välja hur du vill ta dig ut ur fängelset.');
  chooseWayOut();
}

function chooseWayOut() {
  const firstChoice = document.getElementById('second-page');

  if (firstChoice.style.display === 'none') {

  } else {
    firstChoice.style.display = 'block'
  }
  digYourWayOutStory();
}

function digYourWayOutStory() {
  let secondPage = document.getElementById('second-page')
  let digYourWayOut = document.getElementById('third-page');
  secondPage.style.display = "none"
  digYourWayOut.style.display = "block"
}