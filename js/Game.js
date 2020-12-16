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
    //hide the form
    form.hide();
    //displaying text to start the game
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo(); //class name(Player), because it is a static function- called by class name not object name
    
  //undefined- means to check if all players have logged in or not
    if(allPlayers !== undefined){
      
      var display_position = 130; //y position of text where u want to display all players info
      
      //we want to display allplayers info on the screen one below the other. thus text y position will keep changing
      //for loop is used to change the y position
      for(var plr in allPlayers){
        //color change- active player is red, others black
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20; // this is where the y position increases by 20
        textSize(15); //size change
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) //displaying text, allPlayers[plr].name....allPLayers is an array so [plr]
        //refers to which player
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
