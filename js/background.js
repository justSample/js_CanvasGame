class Background{

    constructor(game){

        this.background = document.getElementById("img_background");
        this.game = game;

        this.position = {
            x: 0,
            y: 0
        }
    }

    update(deltaTime){
        //Следование фона за игроком
        if(this.game.player.position.x >= this.game.gameWidth / 2){
            if(-(this.background.width - this.game.gameWidth) < this.position.x)
                this.position.x += -1;
        } 
        if(this.game.player.position.x <= this.game.gameWidth / 2){
            if(this.position.x < 0){
                this.position.x += 1;
            }
        }

    }

    physics(){} //Nothing

    draw(ctx){

        ctx.drawImage(this.background,this.position.x,this.position.y);

    }

}