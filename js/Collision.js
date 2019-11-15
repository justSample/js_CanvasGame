//Обнаружение коллизии
function CollisionDetection(object1, object2)
{
    if (object1.position.x < object2.position.x + object2.width  && 
        object1.position.x + object1.width  > object2.position.x &&
        object1.position.y < object2.position.y + object2.height && 
        object1.position.y + object1.height > object2.position.y) 
    {
        return true;
    }else{
        return false;
       }   

}

function isCollided(object1,object2){
    
    if(CollisionDetection(object1,object2)){

        //left
        if(object1.xPrev >= object2.position.x + object2.width){
            object1.position.x = object2.position.x + object2.width;
        }
        //right
        if(object1.xPrev + object1.width <= object2.position.x){
            object1.position.x = object2.position.x - object1.width;
        }
        //up
        if(object1.yPrev + object1.height <= object2.position.y){
            object1.position.y = object2.position.y - object1.height;
            object1.dy = 0;
            object1.isJump = false;
        }
        //down
        if(object1.yPrev >= object2.position.y + object2.height){

            object1.position.y = object2.position.y + object2.height;
            object1.dy = 0;

        }

    }
    
}
