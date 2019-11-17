const MyLevel = [
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0]
];

var Catterpilars = [];

function buildLevel(game,level,catterpilar) {
    
    let grounds = [];
    let groundCount = 0;
    let visibleCatter = 0;

    while(groundCount < 11){
    level.forEach((row,rowIndex) =>{
        let thisRowIndex = rowIndex;
        row.forEach((ground,groundIndex) => {
            
            if(ground != 0)
                ground = getRandomNumber(0,2);

            if(ground === 1){

                let position = {
                    x: 25 + game.gameWidth / 7.8 * groundIndex,
                    y: 180 + game.gameHeight / 5.4 * rowIndex
                };

                grounds.push(new Ground(game,position));
                groundCount++;

            }

          if(ground === 1){

            rowIndex -= 1;
            ground = 2;

          }
          var isHide = true;
          let rdmNumber = getRandomNumber(0,2);
          if(rdmNumber == 1){
            if(visibleCatter < 2){
                isHide = false;
            visibleCatter++;
            }else{
                isHide = true;
            }
          }else{
            isHide = true;
          }
           
            if(ground === 2){

                let position = {
                    x: 50 + game.gameWidth / 7.8 * groundIndex,
                    y: 270 + game.gameHeight / 5.4 * rowIndex
                };


                grounds.push(new Catterpilar(game,position,isHide));
                
                isHide = true;  
            }
            rowIndex = thisRowIndex;
        });

    });

    if(groundCount < 11){
        groundCount = 0;
        grounds = [];
    }

}
    return grounds;
}