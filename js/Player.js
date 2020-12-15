class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
  // READS PLAYERCOUNT FROM DATABASE AND STORES IN OUR PROGRAM VARIABLE
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val(); //WRITING INTO OUR PROGRAM, WHICH IS NOT JASON, HENCE USE =
    })
  }
  //.VAL()- EXTRACTS INOFRMATION FROM JSON FORMAT
  
//UPDATES PLAYERCOUNT FROM OUR PROGRAM TO DATABASE
  updateCount(count){
    database.ref('/').update({
      playerCount: count //JSON FORM, BECAUSE UR UPDATING DATABASE, SO USE :
    });
  }

  //UPDATE DATABSE WITH NAME AND DISTANCE.
  //WE HAVE NOT CREATED PLAYERINDEX ORIGINALLY IN OUR DATABSE..WE ARE ADDING HERE.
  update(){
    //THIS IS A PATH- players/player/this.index...where this/index is a number1/2/3/4
    //this path is given to ref which creates this in our database
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //this keeps all record of players together which is useful for creating leaderboard
  /* STATIC FUNCTION
  -IT'S A SELF EXECUTABLE FUNCTION
  -CLASS EXECUTES IT, NOT US...
  - READING ALL INFO FROM PLAYERS SECTION- NAME, DISTANCE ETC
  */
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
