class Catterpilar{
    
    constructor(game,position){

        this.game = game;

        this.image = document.getElementById("img_catterpilar");

        this.position = position;
        this.isHide = false;

        this.width = 30;
        this.height = 30;
        
    }

    update(deltaTime){

        if(CollisionDetection(this.game.player,this)){
            this.position.x = -this.position.x;
            this.game.player.plusHeath(5);
        }

    }

    draw(ctx){

        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }

    physics(){} //Nothing

    writeHide(){
        if(this.position.x < 0){
            this.isHide = true;
        }else{
            this.isHide = false;
        }
        console.log(this.isHide);
    }
}