class Ground{

    constructor(game,position){

        this.game = game;

        this.image = document.getElementById("img_groundDown");

        this.position = position;

        this.width = 50;
        this.height = 30;
        
    }

    update(deltaTime){


        //isCollided(this.game.player,this);

        /*
        console.log("player pos: " + (this.game.player.position.x + this.game.player.width));
        console.log("ground pos: " + (this.position.x));

        if(this.game.player.position.x + this.game.player.width  > this.position.x){
            console.log(true);
        }

        
        //Позиция справа
        console.log("player pos: " + this.game.player.position.x);
        console.log("ground pos: " + (this.position.x + this.width));

        if(this.game.player.position.x < this.position.x + this.width){
            console.log(true);
        }

        
        if(CollisionDetection(this.game.player, this)){
            console.log(true);
        }
        */

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

}