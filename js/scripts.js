/////////////////////////////////////////////////
//////////        Business Logic      ///////////
/////////////////////////////////////////////////

// constructors
function Player (name, score,) {
  this.name = name;
  this.score = score;
}

function Dice (sides) {
  this.sides = sides;
}

Dice.prototype.roll = function (result) {
  var result = Math.floor(Math.random() * this.sides) + 1;
  return result;
};


$(function() {

  $("form#entry").submit(function(event) {
    event.preventDefault();
    $("form#entry").hide();
    $("#game").show();

    // make score variable
    var turnScore = 0;

    // grab inputs from form
    var player1name = $("#player1name").val();
    var player2name = $("#player2name").val();
    var playTo = parseInt($("#playTo").val());
    var diceType = parseInt($("#diceType").val());

    // make objects
    var die = new Dice(diceType);

    // displays
    $("#playToDisplay").text(playTo);
    $("#player1nameDisplay").text(player1name);
    $("#player2nameDisplay").text(player2name);

    // add image to result display
    $(".result-div").prepend("<img src='img/" + diceType + ".png'>");

    $("#rollButton").click(function(event) {
      var result = die.roll();
        if (result === 1) {
          alert("You rolled a 1.")
          turnScore = 0;
        } else {
          turnScore += result;
        }
      $("#turnscore-display").text(turnScore);

      $("#result-display").text(result);
    });
  });


});
