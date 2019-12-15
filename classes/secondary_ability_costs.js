
const ERROR_CHECKER = require("../error_checker.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new SecondaryAbilityCosts(...args);
};

function SecondaryAbilityCosts(athl, social, perc, int, vig, subt, creat)
{
  // verification of values
  verifyValue(athl, 1, 3);
  verifyValue(social, 1, 3);
  verifyValue(perc, 1, 3);
  verifyValue(int, 1, 3);
  verifyValue(vig, 1, 3);
  verifyValue(subt, 1, 3);
  verifyValue(creat, 1, 3);


  // private vars
  // %
  var _athletics_cost = athl;
  var _social_cost = social;
  var _perceptive_cost = perc;
  var _intellectual_cost = int;
  var _vigor_cost = vig;
  var _subterfuge_cost = subt;
  var _creative_cost = creat;

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.athletics_cost = (() => _athletics_cost)();
  this.social_cost = (() => _social_cost)();
  this.perceptive_cost = (() => _perceptive_cost)();
  this.intellectual_cost = (() => _intellectual_cost)();
  this.vigor_cost = (() => _vigor_cost)();
  this.subterfuge_cost = (() => _subterfuge_cost)();
  this.creative_cost = (() => _creative_cost)();
}

function verifyIntValue(nbr, min, max)
{
  try
  {
    ERROR_CHECKER.checkNaN(nbr);
    ERROR_CHECKER.checkNaI(nbr);
    ERROR_CHECKER.checkRange(nbr, min, max);
  }

  catch(err)
  {
    err.message = `${err.name}: Invalid psychic ability cost value assigned: ${err.message}`;
    throw err;
  }
}
