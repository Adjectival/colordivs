// backend logic
var colors = ['pink','violet','red','orange','gold','yellow','lime','green','teal','blue','navy','indigo','black','gray','lightgray','white'];
var clickCt = 0;

// frontend logic
$(document).ready(function() {
  $('.mCol').click(function() {
    var newBGColor = colors[clickCt];
    $('body').css('background-color',newBGColor);
    if (clickCt>=15) {
    clickCt = 0;
    } else {
    clickCt++;
    }
    // var colorsToo = colors.map();
    // colorsToo.reverse();
    var newColor = colors[clickCt+2];
    $('body').css('color',newColor);
    $('.mCol').css('border-right','solid 4px ' + newColor + '');
    $('.mCol').css('border-left','solid 4px ' + newColor + '');
    $('.mCol').css('border-top','solid 4px ' + newColor + '');
    $('.mCol').css('border-bottom','solid 4px ' + newColor + '');

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
