class Player{

    constructor(game){

        this.width = 150;
        this.height = 20;

        this.dx = 0;
        this.dy = 0;

        this.maxSpeedPhysics = 10;
        this.speedPhysics = 0.3;

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
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x,this.position.y,this.width, this.height);
    }

    update(deltaTime){

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