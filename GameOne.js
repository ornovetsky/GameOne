const span1 = document.getElementsByClassName('p1')[0]
const span2 = document.getElementsByClassName('p2')[0]

let count1 = 0
let count2 = 0

span1.innerHTML = count1
span2.innerHTML = count2

const h3 = document.getElementsByTagName("h3")[0];

const Player1 = document.getElementById("Player1");
document.getElementById('Player1').addEventListener('click', p1 );

const Player2 = document.getElementById("Player2");
document.getElementById('Player2').addEventListener('click', p2 );

const Reset = document.getElementById('Reset');
document.getElementById('Reset').addEventListener('click', reset)

let GameVal = document.getElementById('input1')
GameVal.addEventListener("change", playingTo)

let button1NameSel = document.getElementsByClassName("btn-p1")[0]
let button2NameSel = document.getElementsByClassName("btn-p2")[0]

let PlayerOneName = document.getElementById("p1name")
let PlayerTwoName = document.getElementById("p2name")


PlayerOneName.addEventListener("change", function(){
  button1NameSel.innerHTML = PlayerOneName.value
})
PlayerTwoName.addEventListener("change", function(){
  button2NameSel.innerHTML = PlayerTwoName.value
})


const PlayingTo = document.getElementById('playingto')

const gameMenu = document.getElementsByClassName("gameMenu")[0]

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function(){
let gameDiv = document.getElementsByClassName("hidden")[0]
gameMenu.classList.add("hidden");
gameDiv.classList.add("gameMenu")
gameDiv.classList.remove("hidden")
})
// function hideMenu (){
//   document.getElementsByClassName("gameMenu").classList.add("hidden")
// }

let maxScore = 5;
PlayingTo.innerHTML = maxScore
let endGame = false;

function playingTo(){
  maxScore = Number(GameVal.value)
  PlayingTo.innerHTML = maxScore

  }

function p1() {
if (!endGame){
  count1++
} if (count1 === maxScore) {
span1.classList.add("win");
endGame = true;
h3.innerHTML = PlayerOneName.value + " has won!"
// h3.classList.add("hidden")
}
span1.innerHTML = count1
}

function p2() {
  if (!endGame){
    count2++
  } if (maxScore === count2) {
    span2.style.color = "green"
    endGame = true;
  }
  span2.innerHTML = count2
  }

  function reset(){
    span1.innerHTML = 0
    span2.innerHTML = 0
    span1.style.color = "white"
    span2.style.color = "white"
    count1 = 0
    count2 = 0
    PlayingTo.innerHTML = maxScore
    GameVal.textContent = 0
    endGame = false;
  }

  