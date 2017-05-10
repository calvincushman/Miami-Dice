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

});
