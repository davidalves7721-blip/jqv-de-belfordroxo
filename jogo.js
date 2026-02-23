const game =
document.getElementById("game");
const player =
document.getElementById("player");
const obstacle =
document.getElementById("obstacle");
const scoreElemnt =
document.getElementById("score");
const startText =
document.getElementById("startText");

let isJumping = false;
let isRunning = false;
let isGameOver = false;
let isNight = false;
let score = 0;

const obstacle = 
[
     "agaga.png ",
     "agasgasgas.png",
     "agsggasgda.png"
];

function startGame () {
    if (isRunning) return;
}


 



document.addEventListener("keydown",()=>
{
    if (!isRunning) {
        isRunning = true;
        player.style.backgroundImage = "url()";
        startgame();
    }
    if (!isJumping) {
        isJumping();
    }
})