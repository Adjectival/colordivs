// backend logic
var colors = ['pink','red','orange','gold','yellow','lime','green','teal','lightblue','blue','navy','violet','black','gray','lightgray','white'];

// frontend logic
$(document).ready(function() {
  $('.mCol').click(function() {
    var nowColor = colors[0];
    $('body').css('background-color',nowColor);
    colors.shift();
  });

  $(".col-xs-1").click(function(event) {
    event.preventDefault();

//Switch player turn
    if (playerTurn===0) {
      playerTurn++;
    } else {
      playerTurn--;
    }
  });
});
