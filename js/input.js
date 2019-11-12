class Input{

    constructor(game){

        document.addEventListener('keydown',event =>{

            switch(event.keyCode){
                case 37:    //Arrow Left
                    console.log("Left");   
                    break;
                case 38:    //Arrow Up
                    console.log("Up");
                    break;
                case 39:    //Arrow Right
                    console.log("Right");
                    break;
                case 40:    //Arrow Down
                    console.log("Down");
                    break;
                case 32:    //Space
                    console.log("Space");
                    break;
                case 27:    //Escape
                    console.log("Escape");
                    break;
            }

        });

        document.addEventListener('keyup',event =>{

            switch(event.keyCode){
                case 37:    //Arrow Left
                    console.log("Left key up");   
                    break;
                case 39:    //Arrow Right
                    console.log("Right key up");
                    break;
            }

        })

    }

}