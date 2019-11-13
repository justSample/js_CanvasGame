
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

        this.Animations = [
            this.image,
            this.imageIdleLeft
        ];

        this.playerState = PLAYER_STATE.IdleLeft;


        this.width = this.Animations[this.playerState].width;
        this.height = this.Animations[this.playerState].height;

        console.log(this.Animations[this.playerState].width);
        console.log(this.Animations[this.playerState].height);

        this.isRight = true;

        this.dx = 0;
        this.dy = 0;

        this.maxSpeedPhysics = 10;
        this.speedPhysics = 0.3;

        this.frameIndex = 0; //Номер фрейма
        this.tickCount = 0; //Кол-во обновлений прошедшие с первого выхода
        this.ticksPerFrame = 15 || 0; //Кол-во обновлений должно пройти
        this.numberOfFrames = 4;



        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.maxSpeed = 8;
        this.speed = 0;

        this.position = {
            x: game.gameWidth / 2 - this.width / this.numberOfFrames,
            y: game.gameHeight - this.height - 300,
        }
        
    }

    moveLeft(){
        this.playerState = PLAYER_STATE.IdleLeft;
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        this.playerState = PLAYER_STATE.IdleRight;
        this.speed = this.maxSpeed;
    }

    stop(){
        this.PLAYER_STATE = PLAYER_STATE.IdleRight;
        this.speed = 0;
    }

    draw(ctx){

        ctx.drawImage(
            this.Animations[this.playerState],
            this.frameIndex * this.width / this.numberOfFrames,
            0,
            this.width / this.numberOfFrames,
            this.height,
            this.position.x,
            this.position.y,
            this.width / this.numberOfFrames,
            this.height
        )

        
        //ctx.fillStyle = "blue";
        //ctx.fillRect(this.position.x,this.position.y,this.width, this.height);
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

        if(this.position.y + this.height >= this.gameHeight) this.position.y = this.gameHeight - this.height;
        if(this.position.x <= 0 ) this.position.x = 0;
        if(this.position.x + this.width / this.numberOfFrames >= this.gameWidth ) this.position.x = this.gameWidth - this.width / this.numberOfFrames;

        
    }

    physics()
    {
        this.position.x += this.dx;
        this.position.y += this.dy;

        if(this.position.y <= this.game.gameHeight - this.height){ 
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