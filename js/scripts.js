// backend logic
var colors = ['pink','violet','red','orange','gold','yellow','lime','green','teal','blue','navy','indigo','black','gray','lightgray','white'];

var colorsSpring = ['#DB99AB','#D0BEE2','#B19EFF','#7CD5FF','#75DAA4','#D0E4AB','#FFE2BA','#B3E2FF','#BDD5FF','#DADAE4','#DAF1E4','#DAF8FF','#E9ECFF','#FFF3BA','#D0E4E2','#FF81D3'];
var colorsSummer = ['#D0A2AB','#FFE4E2','#FFFF9A','#FFBF00','#FF35D3','#FFFFE2','#FF3200','#4635D3','#4BBF00','#93F1E4','','#57102C','#4CA8A1','#7EC2AA','#EE8D09','#DDD4BC'];
var colorsAutumn = ['#293E6A','#FBA827','#5F6024','#48372F','#796E24','#A34E24',,,,,,,,,,];
var colorsWinter = ['#3B5998','#12F6E9',,,,,,,,,,,,,,];

var clickCt = 1;

// frontend logic
$(document).ready(function() {
  $('#spring').click(function() {
    colors = colorsSpring.slice();
  });

  $('#summer').click(function() {
    colors = colorsSummer.slice();
  });

  $('#autumn').click(function() {
    colors = colorsAutumn.slice();
  });

  $('#winter').click(function() {
    colors = colorsWinter.slice();
  });

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

//   $(".col-xs-1").click(function(event) {
//     event.preventDefault();
//
// //Switch player turn
//     // if (playerTurn===0) {
//     //   playerTurn++;
//     // } else {
//     //   playerTurn--;
//     // }
//   });
});
