// back end logic
var players = [];
var playerTurn = 0;

function Game(board) {
  this.board = board;
}
var game = Game()
function Player(xo) {
  this.moveHistory = [];
  this.XorO = xo;
}
var p1 = new Player("x")
var p2 = new Player("o")
Player.prototype.gameOver = function() {
  var xCoordinates = [];
  var yCoordinates = [];
  for (var i=0; i<this.moveHistory.length; i++){
    xCoordinates.push(this.moveHistory[i][0]);
    yCoordinates.push(this.moveHistory[i][1]);
    xCoordinates = xCoordinates.sort();
    yCoordinates = yCoordinates.sort();
  }

  for (var i=0; i<this.moveHistory.length-2; i++) {
    if (xCoordinates[i] === xCoordinates[i+1] && xCoordinates[i+1] === xCoordinates[i+2]) {
      console.log("horiz win");
      return 1;
    } else if (yCoordinates[i] === yCoordinates[i+1] && yCoordinates[i+1] === yCoordinates[i+2]) {
      console.log("vert win");
      return 1;
    }
  }
  var winTicker = 0;

  for (var i=0; i<this.moveHistory.length; i++) {
    var coordinateString =  this.moveHistory[i].toString();
    if (coordinateString === "2,3") {
      winTicker++;
    } else if (coordinateString ==="1,4") {
      winTicker++;
    } else if (coordinateString ==="0,5") {
      winTicker++;
    }
  }
  if (winTicker === 3) {
    console.log("1st Diag win");
    return 1;
  }
  winTicker = 0;
  for (var i=0; i<this.moveHistory.length; i++) {
    var coordinateString =  this.moveHistory[i].toString();
    if (coordinateString === "2,5") {
      winTicker++;
    } else if (coordinateString ==="1,4") {
      winTicker++;
    } else if (coordinateString ==="0,3") {
      winTicker++;
    }
  }
  if (winTicker === 3) {
    console.log("2nd Diag win");
    return 1;
  }
};

function Space(x,y,player) {
  this.coordinates = [x, y];
  player.moveHistory.push(this.coordinates);
}

// front end logic
$(document).ready(function() {
  $(".col-xs-4").click(function(event){
    event.preventDefault();

    //Make a new space instance with the coordinates
    var thisClass = $(this).attr("class");
    var whichSpace = thisClass.charAt(thisClass.length-1) + thisClass.charAt(thisClass.length-2) + thisClass.charAt(thisClass.length-3);
    var xLocation = parseInt(whichSpace.charAt(whichSpace.length-1));
    var yLocation = parseInt(whichSpace.charAt(whichSpace.length-3));
    console.log(xLocation);
    console.log(yLocation);


    //Add an O or an X to the clicked space depending on whose turn it is
    if(playerTurn === 0){
      $(this).html("<h1><span class='xOrO'>O</span></h1>")
      var thisSpace = new Space(xLocation, yLocation, p1);
      var winBool = p1.gameOver();
      if(winBool === 1){
        $(".result").text("The Os Have It!");
      }
    } else {
      $(this).html("<h1><span class='xOrO'>X</span></h1>")
      var thisSpace = new Space(xLocation, yLocation, p2);
      var winBool = p2.gameOver();
      if(winBool === 1){
        $(".result").text("The Xs Have It!");
      }
    }
    //Check if this is a winning click

    //Check if this click draws the game
    //Switch player turn
    if (playerTurn===0) {
      playerTurn++;
    } else {
      playerTurn--;
    }
  });
});
