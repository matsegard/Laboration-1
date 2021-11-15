window.onload = main;

let answer;

function main() {
  addEventListener();
}

function addEventListener() {
  const startButton = document.getElementById('start-button');
  startButton.onclick = startGame;
}

function startGame() {
  const startGame = document.getElementById('first-page');

  if (startGame.style.display === 'block') {

  } else {
    startGame.style.display = 'none'
  }
  prepareStory()
}

function prepareStory(){
  const answer = prompt('Skriv in ditt namn');
  alert('Hej ' + answer + '! Här börjar vägen ut till friheten. Du befinner dig i din cell och får nu välja hur du vill ta dig ut ur fängelset.');
  chooseWayOut();
}

function chooseWayOut(){
  const firstChoice = document.getElementsById('second-page');

  if (firstChoice.style.display === 'none') {

  } else {
    firstChoice.style.display = 'block'
  }
}



