class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getPlayerCount(){
        database.ref('playerCount').on ('value', function(data){
            playerCount = data.val()
            console.log(playerCount)
        })
    }

    updatePlayerCount(count){
        database.ref('/').update({playerCount: count})
    }

    updatePlayerInfo(){
        database.ref('players/player'+ this.index).update({name: this.name, distance: this.distance, index: this.index})
    
    }

    static getPlayerInfo(){
        database.ref('players').on('value', function(data){
            allPlayers = data.val();
            console.log(allPlayers);
        })
    }
}