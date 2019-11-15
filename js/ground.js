class Ground{

    constructor(game,position){

        this.game = game;

        this.image = document.getElementById("img_groundDown");

        this.position = position;

        this.width = 50;
        this.height = 30;
        
    }

    update(deltaTime){

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