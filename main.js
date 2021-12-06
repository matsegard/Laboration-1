/** Butttons */
const buttons = {
  "startbutton": document.getElementById('start-button'),
  "digbutton": document.getElementById('dig-story'),
  "riotbutton": document.getElementById('riot-story'),
  "actionbutton": document.getElementById('action-click')
}
/** Pages */
const pages = {
  "startPage": document.getElementById('first-page'),
  "secondPage": document.getElementById('second-page'),
  "thirdPage": document.getElementById('second-page')
}
/** Change heading text and image  */
const extraChanges = {
  "h2Change": document.getElementById('header-text'),
  "imgChange": document.getElementById('prisoner'),
}

window.onload = main;

/** Loading main function */
function main() {
  buttons.riotbutton.style.display = "block"
  buttons.digbutton.style.display = "block"
  addEventListener();
}

function addEventListener() {
  buttons.startbutton.onclick = start;
}

/** Start of the program and hides startpage content */
function start() {
  if (pages.startPage.style.display === 'block') {

  } else {
    pages.startPage.style.display = 'none'
  }

  let person = prompt("Skriv in ditt namn:");

if (person != null) {
  document.getElementById("header-text").innerHTML =
  "Välkommen " + person + ", här börjar vägen ut till friheten. Du befinner dig i din cell och får nu välja hur du ska rymma.";
}
chooseWayOut();
}



/** Shows second page */
function chooseWayOut() {
  if (pages.secondPage.style.display === 'none') {

  } else {
    pages.secondPage.style.display = 'block'
  }
}

/**
 * Changes the heading text 
 * @param {*} item 
 */
function changeText(item){
  if(item.id === "dig-story") {
    extraChanges.h2Change.innerHTML = "Du stjäl en sked ifrån matsalen. När fängelset släcker för natten så börjar du gräva en liten tunnel bakom toaletten i din cell.";
  }else if(item.id === "riot-story") {
    extraChanges.h2Change.innerHTML = "Du startar ett upplopp i fängelset genom att ta en fångvaktare som gisslan.";
  }
}

/**
 * Changes image
 * @param {*} item 
 */
function changeImage(item) {
  if(item.id === "dig-story") {
    extraChanges.imgChange.src = "./images/spoon.png"
  }else if(item.id === "riot-story") {
    extraChanges.imgChange.src = "./images/hostage.png"
  }
}

/**
 * Changes text and image + hide buttons
 * @param {*} item 
 */
function imgTextChange(item) {
  changeText(item)
  changeImage(item)
  buttons.actionbutton.style.display = "block"
  if(item.id === "dig-story") {
    buttons.actionbutton.innerHTML = "Börja gräva"
    buttons.actionbutton.setAttribute('id', 'dig-story-button')
  }else if(item.id === "riot-story") {
    buttons.actionbutton.innerHTML = "Ta fångvaktaren som gisslan"
    buttons.actionbutton.setAttribute('id', 'riot-story-button')
  }
  buttons.digbutton.style.display = "none"
  buttons.riotbutton.style.display = "none"
}

/**
 * Alert end game when clicking button
 * @param {*} item 
 */
function alertFunction(item) {
  if(item.id === "riot-story-button") {
    alert('Grattis! Du är äntligen ute i friheten. Under det pågående upploppet lyckades du klättra över muren och rymma.')
  }else if(item.id === "dig-story-button") {
    alert('Grattis! Det har nu gått 30 år sedan du började gräva tunneln och du har äntligen kommit ut på andra sidan.')
  }
}

