
// LADDAR IN MAIN FUNKTION
window.onload = main;

// main funktionern lägger in listerner
function main() {
  addEventListener();
}

function addEventListener() {
  const startButton = document.getElementById('start-button');
  startButton.onclick = startGame;
  const digButton = document.getElementById('dig-story')
  digButton.onclick = testFunction;
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
function prepareStory(){
  chooseWayOut();
}

function chooseWayOut(){
  const firstChoice = document.getElementById('second-page');

  if (firstChoice.style.display === 'none') {

  } else {
    firstChoice.style.display = 'block'
  }
}

function testFunction(){
  document.getElementById('second-page').style.display = "none"
  document.getElementById('third-page').style.display = "block"
}
