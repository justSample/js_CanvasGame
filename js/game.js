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
        this.gameState = GAME_STATE.MENU;
        this.HP = 100;
        this.score = 0;
        //Нажатие клавишь
        new Input(this);
    }

    start()
    {
        this.gameObjects =[



        ]
    }

    update(deltaTime)
    {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(ctx)
    {
        this.gameObjects.forEach((object) => object.draw(ctx));
    }

    togglePause()
    {

    }

}