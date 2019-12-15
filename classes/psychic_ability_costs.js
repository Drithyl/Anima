
const ERROR_CHECKER = require("../error_checker.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new PsychicAbilityCosts(...args);
};

function PsychicAbilityCosts(limit, psy_cost, psy_proj_cost)
{
  // verification of values
  verifyNbrValue(limit, 0.5, 0.6);
  verifyValue(psy_cost, 20, 30);
  verifyValue(psy_proj_cost, 2, 3);
  verifyValueIsMultipleOf(psy_cost, 10);


  // private vars
  // %
  var _psychic_ability_limit = limit;
  var _psychic_cost = psy_cost;
  var _psychic_projection_cost = psy_proj_cost;

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.psychic_ability_limit = (() => _psychic_ability_limit)();
  this.psychic_cost = (() => _psychic_cost)();
  this.psychic_projection_cost = (() => _psychic_projection_cost)();
}

function verifyNbrValue(nbr, min, max)
{
  try
  {
    ERROR_CHECKER.checkNaN(nbr);
    ERROR_CHECKER.checkRange(nbr, min, max);
  }

  catch(err)
  {
    err.message = `${err.name}: Invalid psychic ability cost value assigned: ${err.message}`;
    throw err;
  }
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

function verifyValueIsMultipleOf(value, multiple)
{
  try
  {
    ERROR_CHECKER.checkMultiple(value, multiple)
  }

  catch(err)
  {
    err.message = `${err.name}: Invalid psychic ability cost value assigned: ${err.message}`;
    throw err;
  }
}
