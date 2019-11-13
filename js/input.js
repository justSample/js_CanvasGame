class Input{

    constructor(player,game){

        document.addEventListener('keydown',event =>{

            switch(event.keyCode){
                case 37:    //Arrow Left
                    player.moveLeft();  
                    break;
                case 38:    //Arrow Up
                    console.log("Up");
                    break;
                case 39:    //Arrow Right
                    player.moveRight();  
                    break;
                case 40:    //Arrow Down
                    console.log("Down");
                    break;
                case 32:    //Space
                    player.jump();
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
                    player.stop(); 
                    break;
                case 39:    //Arrow Right
                    player.stop(); 
                    break;
            }

        })

    }

}