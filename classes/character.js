
const DICE = require("../dice.js");
const CHARSHEET_DATA = require("../data/charsheet.json");
const CLASS_ATTRIBUTES = require("./attributes.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new Character(...args);
};

function Character(char_name, weapon)
{
  // private vars
  var _name = char_name;
  var _attack = null;
  var _defence = null;
  var _weapon = weapon;
  var _attributes = CLASS_ATTRIBUTES.new(5,5,5,5,5,5,5,5);

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.name = (() => _name)();
  this.attributes =(() => _attributes)();
  this.attack_bonus = (() => (_attack) ? _attack : DICE.range(80, 120))();
  this.defence_bonus = (() => (_defence) ? _defence : DICE.range(80, 120))();

  // pseudo-getter functions that require a parameter
  this.getParryBonus = (weapon) => this.defence_bonus;
  this.getArmorRating = (weapon) => DICE.range(0, 10);
  this.getAttackBonusWithWeapon = (weapon) => this.attack_bonus;
}
