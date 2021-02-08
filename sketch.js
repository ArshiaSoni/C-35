var database;
var playerCount, gameState;
var game, player, form;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50, displayHeight-120);

  // car1 = createSprite(100, 100);

  game = new Game();
  game.getGameState();
}

function draw(){
  background("white");
  
  if(playerCount==4){
    game.updateGameState(1);
  }
  if (gameState==1){
    clear ();
    game.play();
  }

  drawSprites();
}


