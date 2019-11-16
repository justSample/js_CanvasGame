class Input{

    constructor(player,game){

        document.addEventListener('keydown',event =>{

            switch(event.keyCode){
                case 37:    //Arrow Left
                    player.moveLeft();  
                    break;
                case 38:    //Arrow Up
                    player.jump();
                    break;
                case 39:    //Arrow Right
                    player.moveRight();  
                    break;
                case 40:    //Arrow Down
                    console.log("Down");
                    break;
                case 27:    //Escape
                    game.togglePause();
                    break;
                case 13:
                    game.start();
                    break;
            }

        });

        document.addEventListener('keyup',event =>{

            switch(event.keyCode){
                case 37:    //Arrow Left
                    if(player.speed < 0) player.stop(); 
                    break;
                case 39:    //Arrow Right
                    if(player.speed > 0) player.stop();
                    break;
            }

        })

    }

}