const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAME_OVER:3,
}

class Game{

    constructor(gameWidth, gameHeight){
        
        //Расширение canvas
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        //Создание игровых объектов
        this.player = new Player(this);
        this.background = new Background(this);
        this.timer = new Timer();
        this.gameObjects = [];

        //Состояние игры
        this.gameState = GAME_STATE.RUNNING;
        this.HP = 100;
        this.score = 0;

        //Нажатие клавишь
        new Input(this.player,this);

        //document.getElementById("backgroundMusic").play();

        

        //Пока что старт игры
        this.start();
    }

    start()
    {
        this.gameObjects =[
            this.background,
            this.player
        ]

        setInterval(() => {
            this.timer.clock();
            this.player.Health -= 1;
        },1000);

    }

    update(deltaTime)
    {
        if(this.gameState === GAME_STATE.PAUSED) return;

        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(ctx)
    {   

        this.gameObjects.forEach((object) => object.draw(ctx));

        //Отображение времени
        if(this.gameState == GAME_STATE.RUNNING){
            ctx.rect(0,0,110,50);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
        
            ctx.font = "16px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("Min: " + this.timer.Time.min + " : Sec: " + this.timer.Time.sec,0, 16);

            ctx.font = "16px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("HP: " + this.player.Health,0, 40);

        }
    }

    physics(){

        if(this.gameState === GAME_STATE.PAUSED) return;

        this.gameObjects.forEach((object) => object.physics());

    }

    togglePause()
    {

        if(this.gameState === GAME_STATE.RUNNING){
            this.gameState = GAME_STATE.PAUSED;
        }else if(this.gameState === GAME_STATE.PAUSED){
            this.gameState = GAME_STATE.RUNNING;
        }

    }

    displayOnScreen(GAME_STATE, boxX,boxY,sizeBoxX,sizeBoxY, color, textFont,textColor,textAlign,text,textPosX,textPosY){
        if(this.gameState == GAME_STATE){
            ctx.rect(boxX,boxY,sizeBoxX,sizeBoxY);
            ctx.fillStyle = color;
            ctx.fill();
        
            ctx.font = textFont;
            ctx.fillStyle = textColor;
            ctx.textAlign = textAlign;
            ctx.fillText(text,textPosX,textPosY);
        }

    }

    displayOnScreen(GAME_STATE, boxX,boxY,sizeBoxX,sizeBoxY, colorBox,text,textPosX,textPosY){
        if(this.gameState == GAME_STATE){
            ctx.rect(boxX,boxY,sizeBoxX,sizeBoxY);
            ctx.fillStyle = colorBox;
            ctx.fill();
        
            ctx.font = "16px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText(text,textPosX,textPosY);
        }

    }

}