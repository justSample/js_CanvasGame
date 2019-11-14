
const PLAYER_STATE = {
    IdleRight: 0,
    IdleLeft: 1,
    RunRight: 2,
    RunLeft: 3,
    JumpRight: 4,
    JumpLeft: 5,
    Dead: 6
}

class Player{

    constructor(game){

        //Animations
        this.image = document.getElementById("img_TimonIdle");
        this.imageIdleLeft = document.getElementById("img_TimonIdleLeft");

        this.imageRunRight = document.getElementById("img_TimonRunRight");
        this.imageRunLeft = document.getElementById("img_TimonRunLeft");

        this.imageJumpRight = document.getElementById("img_TimonJumpRight");
        this.imageJumpLeft = document.getElementById("img_TimonJumpLeft");

        this.Animations = [
            this.image,
            this.imageIdleLeft,
            this.imageRunRight,
            this.imageRunLeft,
            this.imageJumpRight,
            this.imageJumpLeft
        ];

        this.playerState = PLAYER_STATE.IdleRight;
        
        //fix me
        this.width = this.Animations[this.playerState].width;
        this.height = this.Animations[this.playerState].height;

        //For physics
        this.dx = 0;
        this.dy = 0;

        this.maxSpeedPhysics = 10;
        this.speedPhysics = 0.3;

        //Контроль анимации
        this.frameIndex = 0; //Номер фрейма
        this.tickCount = 0; //Кол-во обновлений прошедшие с первого выхода
        this.ticksPerFrame = 10 || 0; //Кол-во обновлений должно пройти
        this.numberOfFrames = 4; //Кол-во фреймов в изображении

        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.maxSpeed = 3;
        this.speed = 0;

        this.isJump = false;

        this.position = {
            x: 0,
            y: game.gameHeight - this.height - 300,
        }
        
    }

    moveLeft(){
        this.playerState = PLAYER_STATE.RunLeft;
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        this.playerState = PLAYER_STATE.RunRight;
        this.speed = this.maxSpeed;
    }

    stop(){
        this.frameIndex = 0;
        this.playerState = PLAYER_STATE.IdleRight;
        this.speed = 0;
    }

    draw(ctx){

        if(this.playerState === PLAYER_STATE.IdleRight || this.playerState === PLAYER_STATE.IdleLeft){
            
            this.numberOfFrames = 4;

        }else if(this.playerState === PLAYER_STATE.RunRight || this.playerState === PLAYER_STATE.RunLeft){
            
            this.numberOfFrames = 9;

        }else if(this.playerState === PLAYER_STATE.JumpRight || this.playerState === PLAYER_STATE.JumpLeft){

            this.frameIndex = 0;
            this.numberOfFrames = 1;

        }

        //Отрисовка кадров
        ctx.drawImage(
            this.Animations[this.playerState], //Какой именно изображение 
            this.frameIndex * this.Animations[this.playerState].width / this.numberOfFrames,//Показывает нужный нам фрейм
            0,
            this.Animations[this.playerState].width / this.numberOfFrames,
            this.Animations[this.playerState].height,
            this.position.x,//Позиция по x
            this.position.y,//Позиция по y
            this.Animations[this.playerState].width / this.numberOfFrames,//Корректно отображает нужный нам кадр по ширине
            this.Animations[this.playerState].height//Корректно отображает нужный нам кадр по высоте
        )
    }

    update(deltaTime){

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

        //Чтобы игрок не вышел за зону игры
        this.position.x += this.speed;

        if(this.position.y + this.Animations[this.playerState].height >= this.gameHeight){
            this.position.y = this.gameHeight - this.Animations[this.playerState].height;
            this.dy = 0;
        }
        if(this.position.x <= 0 ) this.position.x = 0;
        //if(this.position.x + this.Animations[this.playerState].width / this.numberOfFrames >= this.gameWidth ) this.position.x = this.gameWidth - this.Animations[this.playerState].width / this.numberOfFrames;

        if(this.dy != 0)
            this.isJump = true;
        else
            this.isJump = false;

        if(this.isJump){
            if(this.speed === 0 || this.speed === this.maxSpeed){
                this.playerState = PLAYER_STATE.JumpRight;
            }
            else if(this.speed === -this.maxSpeed){
                this.playerState = PLAYER_STATE.JumpLeft;
            }
        }

        console.log(this.isJump);

        
    }

    physics()
    {
        this.position.y += this.dy;
        //console.log(this.dy);
        
        if(this.position.y <= this.gameHeight - this.Animations[this.playerState].height){ 
            this.dy += this.dy <= this.maxSpeedPhysics ? this.speedPhysics : 0;
        }else{
            this.dy = 0;
        }
    }

    jump()
    {
        this.dy += -10;
    }
}