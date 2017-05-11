/////////////////////////////////////////////////
//////////        Business Logic      ///////////
/////////////////////////////////////////////////

// constructors
function Game (turn, playTo) {
  this.turn = turn;
  this.playTo = playTo;
}

function Player (name, score) {
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

Game.prototype.passTurn = function () {
  if (this.turn === true) {
    this.turn = false;
  } else {
    this.turn = true;
  }
}

Game.prototype.pushScore = function (turnScore) { debugger;
  if (this.turn === true) {
    this.score.push(turnScore);
  } else {
    this.score.push(turnScore);
  }
}
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
    var player1 = new Player(player1name, 0, true)
    var player2 = new Player(player2name, 0, false)
    var newGame = new Game(true, playTo);

    // displays
    $("#playToDisplay").text(playTo);
    $("#player1nameDisplay").text(player1name);
    $("#player2nameDisplay").text(player2name);

    // add image to result display
    $(".result-div").prepend("<img src='img/" + diceType + ".png'>");

    // roll button
    $("#rollButton").click(function(event) {
      var result = die.roll();
        if (result === 1) {
          alert("You rolled a 1.")
          turnScore = 0;
          newGame.passTurn();
          alert(newGame.turn);
        } else {
          turnScore += result;
        }
      $("#turnscore-display").text(turnScore);
      $("#result-display").text(result);
    });

    //hold button
    $("#holdButton").click(function(event) {
      newGame.passTurn();
      alert(newGame.turn);
      newGame.pushScore();
      alert(player1.score);
      alert(player2.score);
    });
  });


});
