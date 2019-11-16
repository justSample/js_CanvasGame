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

        this.gameObjects = [];

        //Состояние игры
        this.gameState = GAME_STATE.RUNNING;
        this.HP = 100;
        this.score = 0;

        //document.getElementById("backgroundMusic").play();

        //Пока что старт игры
        this.start();
    }

    start()
    {
        //Создание игровых объектов
        this.player = new Player(this);
        this.background = new Background(this);
        this.timer = new Timer();
        this.enemy = new Enemy(this);


        let grounds = buildLevel(this,MyLevel);
        /* Nothing. You dont't see this!.
        this.grounds = grounds.filter( function(obj) {
                if(obj.isHide === false || obj.isHide === true)
                    return obj;
                else
                    return null;
        }  )
        */

        this.gameObjects =[
            this.background,
            ...grounds,
            this.enemy,
            this.player
        ]

        setInterval(() => {
            this.timer.clock();
            this.player.Health -= 1;
        },1000);

        //Нажатие клавишь
        new Input(this.player,this);

    }

    update(deltaTime)
    {
        if(this.gameState === GAME_STATE.PAUSED) return;

        this.gameObjects.forEach((object) => object.update(deltaTime));

        //this.grounds.forEach((obj) => obj.writeHide()); //This you don't see again!.

    }

    draw(ctx)
    {   

        this.gameObjects.forEach((object) => object.draw(ctx));

        //Отображение
        if(this.gameState == GAME_STATE.RUNNING){
            //Фона
            ctx.rect(0,0,110,50);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
            
            //Времени
            ctx.font = "16px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("Min: " + this.timer.Time.min + " : Sec: " + this.timer.Time.sec,0, 16);
            
            //Здоровья игрока
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

}