const ENEMY_STATE = {
    RUN_RIGHT: 0,
    RUN_LEFT: 1
}

class Enemy{

    constructor(game){

        this.game = game;

        this.enemyState = ENEMY_STATE.RUN_RIGHT;

        this.imageRunRight = document.getElementById("img_enemyRunRight"); 
        this.imageRunLeft = document.getElementById("img_enemyRunLeft"); 

        this.Animations = [
            this.imageRunRight,
            this.imageRunLeft
        ]

        //Контроль анимации
        this.frameIndex = 0; //Номер фрейма
        this.tickCount = 0; //Кол-во обновлений прошедшие с первого выхода
        this.ticksPerFrame = 10 || 0; //Кол-во обновлений должно пройти
        this.numberOfFrames = 12; //Кол-во фреймов в изображении

        this.width = this.Animations[this.enemyState].width / this.numberOfFrames;
        this.height = this.Animations[this.enemyState].height;

        this.speed = 25;

        this.position = {
            x: 100,
            y: this.game.gameHeight - this.height 
        }


    }

    update(deltaTime){

        this.width = this.Animations[this.enemyState].width / this.numberOfFrames;
        this.height = this.Animations[this.enemyState].height;

        //Через какое время нужно показывать новый фрейм
        this.tickCount++;
 
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }

        this.position.x += (this.speed / deltaTime);

        //Чтобы не выходил за пределы экрана слева
        if(this.position.x < 0 ) {
            this.changeDirection();
        }

        //Чтобы не выходил за пределы экрана справа
        if(this.position.x + this.width > this.game.gameWidth){
            this.changeDirection();
        }

        this.animationsNumberFrameUpdate();
        this.enemyStateUpdate();
        
    }

    draw(ctx){

        //Отрисовка кадров
        ctx.drawImage(
            this.Animations[this.enemyState], //Какой именно изображение 
            this.frameIndex * this.Animations[this.enemyState].width / this.numberOfFrames,//Показывает нужный нам фрейм
            0,
            this.Animations[this.enemyState].width / this.numberOfFrames,
            this.Animations[this.enemyState].height,
            this.position.x,//Позиция по x
            this.position.y,//Позиция по y
            this.Animations[this.enemyState].width / this.numberOfFrames,//Корректно отображает нужный нам кадр по ширине
            this.Animations[this.enemyState].height//Корректно отображает нужный нам кадр по высоте
        );

    }

    physics(){} //Nothing

    animationsNumberFrameUpdate(){

        //RunRight and Left Animations
        if(this.enemyState === ENEMY_STATE.RUN_RIGHT || this.enemyState === ENEMY_STATE.RUN_LEFT){
            this.numberOfFrames = 12;
        }

    }

    enemyStateUpdate(){

        if(this.speed === 25){
            this.enemyState = ENEMY_STATE.RUN_RIGHT;
        }
        else if(this.speed === -25){
            this.enemyState = ENEMY_STATE.RUN_LEFT;
        }
    }

    changeDirection(){
        this.speed = -this.speed;
    }

}