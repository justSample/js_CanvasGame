class Player{

    constructor(game){

        this.image = document.getElementById("img_TimonIdle");

        this.width = this.image.width;
        this.height = this.image.height;

        console.log(this.image.width);
        console.log(this.image.height);

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

        this.maxSpeed = 8;
        this.speed = 0;

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 300,
        }
        
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        this.speed = this.maxSpeed;
    }

    stop(){
        this.speed = 0;
    }

    draw(ctx){

        ctx.drawImage(
            this.image,
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

        if(this.position.x <= 0 ) this.position.x = 0;
        if(this.position.x + this.width >= this.gameWidth ) this.position.x = this.gameWidth - this.width;
        
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