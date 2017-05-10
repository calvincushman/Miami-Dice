/////////////////////////////////////////////////
//////////        Business Logic      ///////////
/////////////////////////////////////////////////

// constructors
function Player (name, score,) {
  this.name = name;
  this.score = score;
}

function Dice (sides, turnscore) {
  this.sides = sides;
  this.turnscore = turnscore;
}

Dice.prototype.roll = function (result) {
  var result = Math.floor(Math.random() * this.sides) + 1;
  if (result !== 1) {
    return result += this.turnscore;
  } else {
    return this.turnscore * 0;
  }
};

/////////////////////////////////////////////////
//////////    User-Interface Logic   ////////////
/////////////////////////////////////////////////
$(function() {

  $("form#entry").submit(function(event) {
    event.preventDefault();
    $("form#entry").hide();
    $("#game").show();

    var player1name = $("#player1name").val();
    var player2name = $("#player2name").val();
    var playTo = parseInt($("#playTo").val());
    var diceType = parseInt($("#diceType").val());

    $("#playToDisplay").text(playTo);
    $("#player1nameDisplay").text(player1name);
    $("#player2nameDisplay").text(player2name);

  });

});
