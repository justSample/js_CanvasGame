let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;



let lastTime = 0;

function gameLoop(timeStamp)
{
    let deltaTime = timeStamp - lastTime;
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);