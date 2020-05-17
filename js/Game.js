class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(30)
    text("Game has started :)",120,100)
    Player.getPlayerInfo()
    if(allPlayers !== undefined){
      var displayPosition = 150
      for(var plr in allPlayers) {
        console.log(plr)
        if(plr === "player"+player.index){
        fill("red")
        console.log("is this message there")
        }
        else{
          fill("black")
          console.log(plr+"-"+player.index)
        }
        textSize(15)
        displayPosition = displayPosition+20
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,130,displayPosition)
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance = player.distance+ 3
      player.update()
    }
  }
}
