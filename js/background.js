class Background{

    constructor(game){

        this.background = document.getElementById("img_background");
        this.game = game;


    }

    update(deltaTime){} //Nothing

    physics(){} //Nothing

    draw(ctx){

        ctx.drawImage(this.background,0,-this.game.gameHeight / 2);

    }

}