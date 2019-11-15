const MyLevel = [
    [1,0,0,0,0,1,0,0,0,0],
    [0,1,0,1,0,0,0,1,0,0],
    [0,0,1,0,0,1,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

function buildLevel(game,level) {
    
    let grounds = [];

    level.forEach((row,rowIndex) =>{

        row.forEach((ground,groundIndex) => {
            if(ground === 1){

                let position = {
                    x: 50 + game.gameWidth / 10 * groundIndex,
                    y: 30 + game.gameHeight / 3.3 * rowIndex
                };

                grounds.push(new Ground(game,position));

            }
        });

    });

    return grounds;

}