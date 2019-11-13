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

        this.player = new Player(this);
        this.gameObjects = [];

        //Состояние игры
        this.gameState = GAME_STATE.RUNNING;
        this.HP = 100;
        this.score = 0;
        //Нажатие клавишь
        new Input(this.player,this);
        this.start();
    }

    start()
    {
        this.gameObjects =[
            this.player,
        ]
    }

    update(deltaTime)
    {
        if(this.gameState === GAME_STATE.PAUSED) return;

        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(ctx)
    {


        this.gameObjects.forEach((object) => object.draw(ctx));
    }

    physics(){

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