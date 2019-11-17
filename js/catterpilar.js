class Catterpilar{
    
    constructor(game,position,isHide){

        this.game = game;

        this.image = document.getElementById("img_catterpilar");

        this.position = position;
        this.isHide = isHide;

        this.width = 30;
        this.height = 30;
        
    }

    update(deltaTime){

        if(!this.isHide) return;

        if(CollisionDetection(this.game.player,this)){
            this.position.x = -this.position.x;
            this.game.player.plusHeath(5);
            this.changeHide();
        }

    }

    draw(ctx){

        if(!this.isHide) return;

        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }

    physics(){} //Nothing

    changeHide(){
        this.isHide = (!this.isHide);
    }
}