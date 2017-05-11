/////////////////////////////////////////////////
//////////        Business Logic      ///////////
/////////////////////////////////////////////////

// constructors
function Game (turn, playTo, turnScore) {
  this.turn = turn;
  this.playTo = playTo;
  this.turnScore = turnScore;
}

function Player (name, score, playerTurnScore) {
  this.name = name;
  this.score = score;
  this.playerTurnScore = playerTurnScore;

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

Game.prototype.pushTurnScore = function (turnScore, player1, player2) {
  if (this.turn === true) {
    player1.playerTurnScore += turnScore;
  } else {
    player2.playerTurnScore += turnScore;
  }
}

Game.prototype.pushScore = function (player1, player2) {
  if (this.turn === true) {
    player1.score += player1.playerTurnScore;
  }
   if (this.turn === false) {
    player2.score += player2.playerTurnScore;
  }
}
$(function() {

  $("form#entry").submit(function(event) {
    event.preventDefault();
    $("form#entry").hide();
    $("#game").show();

    // grab inputs from form
    var player1name = $("#player1name").val();
    var player2name = $("#player2name").val();
    var playTo = parseInt($("#playTo").val());
    var diceType = parseInt($("#diceType").val());

    // make objects
    var die = new Dice(diceType);
    var player1 = new Player(player1name, 0, 0)
    var player2 = new Player(player2name, 0, 0)
    var newGame = new Game(true, playTo, 0);

    // displays
    $("#playToDisplay").text(playTo);
    $("#player1nameDisplay").text(player1name);
    $("#player2nameDisplay").text(player2name);
    $("#currentPlayer").text(player1.name);


    // add image to result display
    $(".result-div").prepend("<img id='athing' src='img/" + diceType + ".png'>");

    // roll button
    $("#rollButton").click(function(event) {
      $("#athing").effect("bounce", {times: 12}, 1000);
      var result = die.roll();
        if (result === 1) {
          player1.playerTurnScore = 0;
          player2.playerTurnScore = 0;
          newGame.pushTurnScore(result, player1, player2);
          newGame.passTurn();
          if (newGame.turn === true){
            $("#currentPlayer").text(player1.name);
          } else {
            $("#currentPlayer").text(player2.name);
          }
          $("#player1scoreDisplay").text(player1.score);
          $("#player2scoreDisplay").text(player2.score);
        } else {
          newGame.pushTurnScore(result, player1, player2);
        }
      if (newGame.turn === true) {
        $("#turnscore-display").text(player1.playerTurnScore);
      } else {
        $("#turnscore-display").text(player2.playerTurnScore);
      }
      $("#result-display").text(result);
    });

    //hold button
    $("#holdButton").click(function(event) {
      console.log(newGame.turn);
      newGame.pushScore(player1, player2);
      $("#player1scoreDisplay").text(player1.score);
      $("#player2scoreDisplay").text(player2.score);
      player1.playerTurnScore = 0;
      player2.playerTurnScore = 0;
      $("#turnscore-display").text("0");
      $("#result-display").text("0");
      newGame.passTurn();
      if (newGame.turn === true){
        $("#currentPlayer").text(player1.name);
      } else {
        $("#currentPlayer").text(player2.name);
      }

      // win conditions
      if (player1.score >= newGame.playTo) {
        alert("Congrats. " + player1name + " wins!!");
        location.reload();
      }

      if (player2.score >= newGame.playTo) {
        alert("Congrats. " + player2name + " wins!!");
        location.reload();
      }
    });
  });
});
