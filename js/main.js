let btn = document.getElementById("this-btn_start");
let inputText = document.getElementById("inputText");
let hide = document.getElementsByClassName("info");
//console.log(hide);

function BeginPlay() {

    
    if(inputText.value.length <= 2) {
        alert("Имя должно быть больше 3-ёх символов");
        return;
    }else if(inputText.value.length >= 10){
        alert("Имя должно быть меньше 10-ти символов");
        return;
    }

    for(let i = 0;i != hide.length;){
        console.log(hide);
        hide[i].parentNode.removeChild(hide[i]);
    }

let cns = document.createElement('canvas');
cns.id = "gameScreen";
document.body.appendChild(cns);

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

canvas.width = 1280;
canvas.height = 720;

let game = new Game(GAME_WIDTH,GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timeStamp)
{
    let deltaTime = timeStamp - lastTime;

    lastTime = timeStamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    game.physics();
    game.update(deltaTime);
    game.draw(ctx);
    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

}

btn.onclick = BeginPlay;