/*
- RESPONSIBLE TO GET AND UPDATE GAMESATE
- WHAT TO DO WHEN U START THE GAME- WAIT STATE
- WHAT TO DO WHEN YOU ARE IN PLAY
*/
class Game {
  constructor(){}

  //READS VALUE OF GAMECOUNT FROM DATABASE
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){ //ANNONYMOUS FUNCTION
       gameState = data.val();
    })

  }
//UPDATE THE DATABASE WITH OUR GAMESTATE
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
//WAIT STATE
  /* HERE YOU DO THE FOLLOWING IN WAIT STATE:
  - CREATE PLAYER FROM PLAYER CLASS
  - READ THE PLAYERCOUNT VALUE JUST ONCE
  - IF VALUE EXSISTS, THEN UPDATE OUR PLAYERCOUNT IN PROGRAM AND GET THE INDIVIDUAL PLAYERS ACTUAL COUNT
  - CREATE A NEW FORM
  - DISPLAY THE NEW FORM
  */
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  
//PLAY STATE- WHEN WE MOVE FROM WAIT TO PLAY STATE- I.E ALL PLAYERS HAVE LOGGED IN
/*
- HIDE THE FORM
- DISPLAY MESSAGE GAME START
-GET PLAYER INFO AND SHOW THE LEADERBOARD

*/
  
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
