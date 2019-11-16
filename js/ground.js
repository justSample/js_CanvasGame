class Ground{

    constructor(game,position){

        this.game = game;

        this.image = document.getElementById("img_groundDown");

        this.position = position;

        this.width = 80;
        this.height = 30;
        
    }

    update(deltaTime){} //Nothing

    draw(ctx){

        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        isCollided(this.game.player,this);

    }

    physics(){} //Nothing

}