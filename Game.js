class Game{
    constructor(){

    }

    getGameState(){
        database.ref('gameState').on('value', function(data){
            gameState = data.val()
            console.log(gameState); 
            if (gameState==0){
                player = new Player();
                player.getPlayerCount();
                form = new Form();
                form.display();
            }       
        })

        car1 = createSprite (300, 700);
        car2 = createSprite(600, 700);
        car3 = createSprite(900, 700);
        car4 = createSprite(1200, 700);

        cars=[car1,car2, car3,car4];
    }

    updateGameState(state){
        database.ref('/').update({gameState: state})
    }

    play(){
        form.hide();
        Player.getPlayerInfo();

        var index = 0;
        var x= 300;

        var ySpacing = 100
        for(var plr in allPlayers){
            cars[index].x = x;
            cars[index].y = height - allPlayers[plr].distance;
            if(index+1 == player.index){
                camera .position.y = cars[index].y
                cars[index].shapeColor = 'red'
            }
            index++
            x+=300
            text (allPlayers[plr].name + ":" + allPlayers[plr].distance, 200, ySpacing)
            ySpacing+= 50;
        }

        if(keyWentDown(UP_ARROW)){
            player.distance+=50;
            player.updatePlayerInfo();
        }

    }
}