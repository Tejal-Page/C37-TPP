/*THINGS TO DO
- CREATE CONSTRUCTOR- INPUT, GREETING, BUTTON
- HIDE FUNTION- HIDES INPUT, GREETING, BUTTON
- DISPLAY METHOD-  TITLE, MOUSEPRESSED
*/

class Form {
  //HTML
  constructor() {
    this.input = createInput("Name");//creates input to take input from user
    this.button = createButton('Play');// creates button
    this.greeting = createElement('h2');// header style- element is used when u want to display a text
  }
  //hides everything, especially when all players have logged in , u want all to disappear
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    //1. display the message, car racing game
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    //2. display- input and button at particular position
    this.input.position(130, 160);
    this.button.position(250, 200);
    
    //3. press the ouse button
    /* 
    -now here you have tonnes of things to do , which cant mention all tasks to be done in one single brackets.
    - thus turn it into a function
    - why arrow and not annonymous function?
    - because button and input cant be accessed by annoymous function, only arrow can.
    */
    this.button.mousePressed(()=>{
      //hide button input
      //update n take player name for the greeting- update it.
      //increase player count by 1
      //update- playercount
      //update name and distance
      //display mesage- hello tejal
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();  //reads/ extracts value from html element
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}

/* ARROW FUNCTION
- USED AS CALL BACK FUCNTION
- CAN ACCESS THE ENTIRE CLASSS, EVEN THE CONTRUCTOR
- this.button and this.inptu can only be accessed by this function not by arrow
*/

