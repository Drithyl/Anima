
const ERROR_CHECKER = require("../error_checker.js");
const ANIMA_FORMULAS = require("../anima_formulas.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new Attribute(...args);
};

function Attribute(name, score)
{
  _verifyName(name);
  _verifyScore(score);

  // private vars
  var _name = name;
  var _score = score;
  var _modifier =

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.name = (() => _name)();
  this.score = (() => _score)();
  this.modifier = (() => ANIMA_FORMULAS.getAttributeModifier(_score))();

  // setters
  this.setScore = (nbr) =>
  {
    _verifyScore(nbr);
    _score = nbr;
  };

  // private functions
  function _verifyName(string)
  {
    try
    {
      ERROR_CHECKER.checkType(string, "string");
    }

    catch(err)
    {
      err.message = `Attempt to assign invalid type name value '${string}' to ${_name}: ${err.message}`;
      throw err;
    }
  }

  function _verifyScore(nbr)
  {
    try
    {
      ERROR_CHECKER.checkNaN(nbr);
      ERROR_CHECKER.checkNaI(nbr);
      ERROR_CHECKER.checkRange(nbr, 0, Number.MAX_VALUE);
    }

    catch(err)
    {
      err.message = `Attempt to assign invalid attribute value '${nbr}' to ${_name}: ${err.message}`;
      throw err;
    }
  }
}
