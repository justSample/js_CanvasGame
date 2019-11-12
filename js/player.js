class Player{

    constructor(game){

        this.width = 150;
        this.height = 20;

        this.gameWidth = game.gameWidth;

        this.maxSpeed = 8;
        this.speed = 0;

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 15,
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
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x,this.position.y,this.width, this.height);
    }

    update(deltaTime){

        this.position.x += this.speed;

        if(this.position.x <= 0 ) this.position.x = 0;
        if(this.position.x + this.width >= this.gameWidth ) this.position.x = this.gameWidth - this.width;
        
    }

}