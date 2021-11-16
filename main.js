const buttons = {
  "startbutton": document.getElementById('start-button'),
  "digbutton": document.getElementById('dig-story'),
  "riotbutton": document.getElementById('riot-story')
}

const pages = {
  "startPage": document.getElementById('first-page'),
  "secondPage": document.getElementById('second-page'),
  "thirdPage": document.getElementById('second-page')
}
const extraChanges = {
  "h2Change": document.getElementById('headerText'),
  "imgChange": document.getElementById('prisoner')
}

// LADDAR IN MAIN FUNKTION
window.onload = main;

function main() {
  buttons.riotbutton.style.display = "block"
  buttons.digbutton.style.display = "block"
  addEventListener();
}

function addEventListener() {
  buttons.startbutton.onclick = start;
}

function start() {
  if (pages.startPage.style.display === 'block') {

  } else {
    pages.startPage.style.display = 'none'
  }
  chooseWayOut();
}


function chooseWayOut() {
  if (pages.secondPage.style.display === 'none') {

  } else {
    pages.secondPage.style.display = 'block'
  }
}

function changeText(item){
  if(item.id === "dig-story") {
    extraChanges.h2Change.innerHTML = "Du stjäl en sked från matsalen och börjar gräva en liten tunnel bakom toaletten i din cell. Du har nu 30år av grävande framför dig.";
  }else if(item.id === "riot-story") {
    extraChanges.h2Change.innerHTML = "Du startar ett upplopp i fängelset genom att ta en fångvaktare som gisslan. Gisslandramat leder till ett upplopp och du lyckas klättra över muren under allt tumult.";
  }
}

function changeImage(item) {
  if(item.id === "dig-story") {
    extraChanges.imgChange.src = "./images/spoon.png"
  }else if(item.id === "riot-story") {
    extraChanges.imgChange.src = "./images/hostage.png"
  }
}

function imgtextChange(item) {
  changeText(item)
  changeImage(item)
  buttons.digbutton.style.display = "none"
  buttons.riotbutton.style.display = "none"
}

