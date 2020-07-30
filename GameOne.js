const span1 = document.getElementsByClassName('p1')[0]
const span2 = document.getElementsByClassName('p2')[0]

let count1 = 0
let count2 = 0

span1.innerHTML = count1
span2.innerHTML = count2

const Player1 = document.getElementById("Player1");
document.getElementById('Player1').addEventListener('click', p1 );

const Player2 = document.getElementById("Player2");
document.getElementById('Player2').addEventListener('click', p2 );

const Reset = document.getElementById('Reset');
document.getElementById('Reset').addEventListener('click', reset)

let GameVal = document.getElementById('input1')
const PlayingTo = document.getElementById('playingto')

let winningScore = 0
GameVal.addEventListener('change', function(){
PlayingTo.innerHTML = Number(GameVal.value)
winningScore = Number(GameVal.value)
})


function p1() {
if (!winningScore){
  count1++
} else if (winningScore == count1) {
span1.innerHTML = count1
span1.style.color = "green"
}}

function p2() {
  if (count2<4){
    count2++
    span2.innerHTML = count2
  } else if (count2=5) {
    span2.innerHTML = count2
    span2.style.color = "green"
  }
  }

  function reset(){
    span1.innerHTML = 0
    span2.innerHTML = 0
    span1.style.color = "black"
    span2.style.color = "black"
    count1 = 0
    count2 = 0
    PlayingTo.innerHTML = 0
    GameVal.textContent = 0
  }