
const ERROR_CHECKER = require("../error_checker.js");
const CHAR_BUILDING_RULES = require("../char_building_rules.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new LifePoints(...args);
};

function LifePoints(attributes, multiples, level, char_class)
{
  // private vars
  var _multiples = multiples;
  var _base = CHAR_BUILDING_RULES.calculateBaseLifePoints(attributes);
  var _from_level = CHAR_BUILDING_RULES.calculateLifePointsFromLevel(level, char_class);
  var _special = spec;
  var _current = 0;

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.base = (() => _base)();
  this.multiples = (() => _multiples)();
  this.from_multiples = (() => CHAR_BUILDING_RULES.calculateLifePointsFromMultiples(multiples, attributes))();
  this.special = (() => _special)();
  this.level = (() => _from_level)();
  this.current = (() => _current)();
  this.total = (() =>
    CHAR_BUILDING_RULES.calculateTotalLifePoints(_base, _from_multiples, _from_level, _special))();

  // setters
  this.setCurrent = (nbr) =>
  {
    verifyValue(nbr);
    _current = nbr;
  };
}

function verifyValue(nbr, min, max)
{
  try
  {
    ERROR_CHECKER.checkNaN(nbr);
    ERROR_CHECKER.checkNaI(nbr);
    ERROR_CHECKER.checkRange(nbr, min, max);
  }

  catch(err)
  {
    err.message = `${err.name}: Invalid life point value assigned: ${err.message}`;
    throw err;
  }
}
