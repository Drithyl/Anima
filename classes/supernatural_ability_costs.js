
const ERROR_CHECKER = require("../error_checker.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new SupernaturalAbilityCosts(...args);
};

function SupernaturalAbilityCosts(limit, zeon, ma_mult, proj_cost, summ_cost, cont_cost, bind_cost, ban_cost)
{
  // verification of values
  verifyNbrValue(limit, 0.5, 0.6);
  verifyValue(zeon, 1, 3);
  verifyValue(ma_mult, 50, 70);
  verifyValue(proj_cost, 2, 3);
  verifyValue(summ_cost, 2, 3);
  verifyValue(cont_cost, 2, 3);
  verifyValue(bind_cost, 2, 3);
  verifyValue(ban_cost, 2, 3);
  verifyValueIsMultipleOf(ma_mult, 10);


  // private vars
  // %
  var _supernatural_ability_limit = limit;
  var _zeon_cost = zeon;
  var _ma_multiple_cost = ma_mult;
  var _magic_projection_cost = proj_cost;
  var _summon_cost = summ_cost;
  var _control_cost = cont_cost;
  var _bind_cost = bind_cost;
  var _banish_cost = ban_cost;

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.supernatural_ability_limit = (() => _supernatural_ability_limit)();
  this.zeon_cost = (() => _zeon_cost)();
  this.ma_multiple_cost = (() => _ma_multiple_cost)();
  this.magic_projection_cost = (() => _magic_projection_cost)();
  this.summon_cost = (() => _summon_cost)();
  this.control_cost = (() => _control_cost)();
  this.bind_cost = (() => _bind_cost)();
  this.banish_cost = (() => _banish_cost)();
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
    err.message = `${err.name}: Invalid supernatural ability cost value assigned: ${err.message}`;
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
    err.message = `${err.name}: Invalid supernatural ability cost value assigned: ${err.message}`;
    throw err;
  }
}

function verifyValueIsMultipleOf(value, multiple)
{
  try
  {
    ERROR_CHECKER.checkIsMultiple(value, multiple)
  }

  catch(err)
  {
    err.message = `${err.name}: Invalid supernatural ability cost value assigned: ${err.message}`;
    throw err;
  }
}
