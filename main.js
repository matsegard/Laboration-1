// LADDAR IN MAIN FUNKTION
window.onload = main;

// main funktionern lägger in listerner
function main() {
  addEventListener();
}

function addEventListener() {
  const startButton = document.getElementById('start-button');
  startButton.onclick = start;

  const digButton = document.getElementById('dig-story')
  digButton.onclick = digYourWayOut;
}

function start() {
  const startGame = document.getElementById('first-page');

  if (startGame.style.display === 'block') {

  } else {
    startGame.style.display = 'none'
  }
  chooseWayOut();
}

function chooseWayOut() {
  const firstChoice = document.getElementById('second-page');

  if (firstChoice.style.display === 'none') {

  } else {
    firstChoice.style.display = 'block'
  }
  digYourWayOut();
}

function digYourWayOut() {

  const digging = document.getElementById('third-page');

  if (digging.style.display === 'none') {

  } else {
    digging.style.display = 'block'
  }
  console.log('test');
}

