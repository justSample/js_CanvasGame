
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

        this.image = document.getElementById("img_TimonIdle");
        this.imageIdleLeft = document.getElementById("img_TimonIdleLeft");
        this.imageRunRight = document.getElementById("img_TimonRunRight");
        this.imageRunLeft = document.getElementById("img_TimonRunLeft");

        this.Animations = [
            this.image,
            this.imageIdleLeft,
            this.imageRunRight,
            this.imageRunLeft
        ];

        console.log(this.Animations[2].width);

        this.playerState = PLAYER_STATE.IdleRight;

        this.width = this.Animations[this.playerState].width;
        this.height = this.Animations[this.playerState].height;

        this.dx = 0;
        this.dy = 0;

        this.maxSpeedPhysics = 10;
        this.speedPhysics = 0.3;

        this.frameIndex = 0; //Номер фрейма
        this.tickCount = 0; //Кол-во обновлений прошедшие с первого выхода
        this.ticksPerFrame = 10 || 0; //Кол-во обновлений должно пройти
        this.numberOfFrames = 4; //Кол-во фреймов в изображении

        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.maxSpeed = 3;
        this.speed = 0;

        this.position = {
            x: game.gameWidth / 2 - this.width / this.numberOfFrames,
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
        }

        if(this.playerState === PLAYER_STATE.RunRight || this.playerState === PLAYER_STATE.RunLeft){
            
            this.numberOfFrames = 9;
        }

        ctx.drawImage(
            this.Animations[this.playerState],
            this.frameIndex * this.Animations[this.playerState].width / this.numberOfFrames,
            0,
            this.Animations[this.playerState].width / this.numberOfFrames,
            this.Animations[this.playerState].height,
            this.position.x,
            this.position.y,
            this.Animations[this.playerState].width / this.numberOfFrames,
            this.Animations[this.playerState].height
        )
    }

    update(deltaTime){

        this.tickCount++;
 
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }

        this.position.x += this.speed;

        if(this.position.y + this.Animations[this.playerState].height >= this.gameHeight) this.position.y = this.gameHeight - this.Animations[this.playerState].height;
        if(this.position.x <= 0 ) this.position.x = 0;
        if(this.position.x + this.Animations[this.playerState].width / this.numberOfFrames >= this.gameWidth ) this.position.x = this.gameWidth - this.Animations[this.playerState].width / this.numberOfFrames;

        
    }

    physics()
    {
        this.position.y += this.dy;

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