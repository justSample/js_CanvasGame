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

        if(this.isHide) return;

        if(CollisionDetection(this.game.player,this)){
            this.game.player.plusHeath(5);
            this.game.player.CollectCatterpilar++;
            this.changeHide();
        }

    }

    draw(ctx){

        if(this.isHide) return;

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
        if(this.isHide)
            this.isHide = false;
        else
            this.isHide = true;
    }

}