
const ERROR_CHECKER = require("../error_checker.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new CombatAbilityCosts(...args);
};

function CombatAbilityCosts(limit, atk_cost, blck_cost, ddg_cost, armor_cost, ki_cost, acc_cost)
{
  // verification of values
  verifyNbrValue(limit, 0.5, 0.6);
  verifyValue(atk_cost, 1, 3);
  verifyValue(blck_cost, 1, 3);
  verifyValue(ddg_cost, 1, 3);
  verifyValue(armor_cost, 1, 3);
  verifyValue(ki_cost, 1, 3);
  verifyValue(acc_cost, 10, 30);
  verifyValueIsMultipleOf(acc_cost, 5);


  // private vars
  // %
  var _combat_ability_limit = limit;
  var _attack_cost = atk_cost;
  var _block_cost = blck_cost;
  var _dodge_cost = ddg_cost;
  var _wear_armor_cost = armor_cost;
  var _ki_cost = ki_cost;
  var _accumulation_multiple_cost = acc_cost;

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.combat_ability_limit = (() => _combat_ability_limit)();
  this.attack_cost = (() => _attack_cost)();
  this.block_cost = (() => _block_cost)();
  this.dodge_cost = (() => _dodge_cost)();
  this.wear_armor_cost = (() => _wear_armor_cost)();
  this.ki_cost = (() => _ki_cost)();
  this.accumulation_multiple_cost = (() => _accumulation_multiple_cost)();
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
    err.message = `${err.name}: Invalid combat ability cost value assigned: ${err.message}`;
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
    err.message = `${err.name}: Invalid combat ability cost value assigned: ${err.message}`;
    throw err;
  }
}
