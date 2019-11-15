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

        if(object1.position.x + object1.height >= object2.position.x){
            object1.position.x = object2.position.x + object2.height;
            
            object1.dy = 0;
        }

        if(object1.position.x + object1.height + object1.width <= object2.position.x + object2.width){
            object1.position.x = object2.position.x - object2.height;
            object1.dy = 0;
            console.log("Check");
        }

        if(object1.position.y + object1.height <= object2.position.y){
            object1.position.y = object2.position.y + object2.width;
            object1.dy = 0;
        }

        if(object1.position.y >= object2.position.y + object2.width){
            object1.position.y = object2.position.y - object2.width;
            object1.dy = 0;
        }

    }
    
}

function CollisionUp(object1,object2){

    console.log("PlayerX: " + object1.position.x);
    //console.log("PlayerY: " +object1.position.y);
    console.log("GroundX: " +object2.position.x);
    //console.log("GroundY: " +object2.position.y);

    if(object1.position.x + object1.height >= object2.position.x &&
       object1.position.x + object1.height + object1.width <= object2.position.x + object2.width &&
       object1.position.y + object1.height <= object2.position.y &&
       object1.position.y + object1.height + object1.width >= object2.position.y + object2.width){
        return true;
    }else{
        return false;
    }
    
}

function CollisionLeft(object1,object2){

    
    
}

function CollisionRight(object1,object2){

    
    
}

function CollisionDown(object1,object2){

    
    
}