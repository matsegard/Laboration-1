window.onload = main;

function main(){
  addEventListener();
}

function addEventListener() {
    const startButton = document.getElementById('start-button');
    startButton.onclick = startGame;
}

function startGame(){
    const startGame = document.getElementById('first-page');
  
    if(startGame.style.display === 'block') {
    } else {startGame.style.display = 'none'}
    startGame =  prompt('Skriv in ditt namn');
}


