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
        this.playerName = document.getElementById("playerName").textContent;

        this.gameObjects = [];

        //Состояние игры
        this.gameState = GAME_STATE.RUNNING;
        this.HP = 100;
        this.score = 0;

        this.catterpilarHide = [];
        this.catterpilarVisible = 0;

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
        
        this.catterpilar = grounds.filter( function(obj) {
                if(obj.isHide === false || obj.isHide === true)
                    return obj;
                else
                    return null;
        }  )


        this.gameObjects =[
            this.background,
            ...grounds,
            this.enemy,
            this.player
        ]

        setInterval(() => {
            this.timer.clock();
            this.player.minusHealth(1);
        },1000);

        //Нажатие клавишь
        new Input(this.player,this);

    }

    update(deltaTime)
    {
        if(this.gameState === GAME_STATE.PAUSED) return;

        this.gameObjects.forEach((object) => object.update(deltaTime));

        this.updateCatterpilar();
    }

    draw(ctx)
    {   

        this.gameObjects.forEach((object) => object.draw(ctx));

        //Отображение
        if(this.gameState == GAME_STATE.RUNNING){

            //background
            ctx.rect(0,0,160,90);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
            
            //Player name
            ctx.font = "16px myFont";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("Name: " + this.playerName,0, 16);
            
            //Health
            ctx.font = "16px myFont";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("HP: " + this.player.Health,0, 40);

            //Catterpilar
            ctx.font = "16px myFont";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("Гусеницы: " + this.player.CollectCatterpilar,0, 64);

            //Time
            ctx.font = "16px myFont";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("Min: " + this.timer.Time.min + " : Sec: " + this.timer.Time.sec,0, 88);



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

    //Следит за кол-вом на экране
    updateCatterpilar(){

        for(let i = 0;i < this.catterpilar.length;i++){

            if(!this.catterpilar[i].isHide){
                this.catterpilarVisible++;
            }

        }

        let randomCatterpilar = (getRandomNumber(0,this.catterpilar.length));
        while(!this.catterpilar[randomCatterpilar].isHide){

            randomCatterpilar = (getRandomNumber(0,this.catterpilar.length));

        }
        if(this.catterpilarVisible < 2){
            this.catterpilar[randomCatterpilar].changeHide();
            this.catterpilarVisible++;
        }

        this.catterpilarVisible = 0;

    }

}