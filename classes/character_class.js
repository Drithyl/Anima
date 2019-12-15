
const ERROR_CHECKER = require("../error_checker.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new CharacterClass(...args);
};

function CharacterClass()
{
  // private vars
  var _archetype = arch;
  var _life_point_multiple_cost = lp_cost;
  var _life_points_per_level = lp_per_level;
  var _initiative_per_level = initiative;
  var _martial_knowledge_per_level = mk_per_level;
  var _innate_psychic_points_per_level = psy_per_level;
  var _

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.strength = (() => _strength)();
  this.agility = (() => _agility)();
  this.dexterity = (() => _dexterity)();
  this.constitution = (() => _constitution)();
  this.intelligence = (() => _intelligence)();
  this.perception = (() => _perception)();
  this.power = (() => _power)();
  this.willpower = (() => _willpower)();

  this.strength_mod = (() => _strength)();
  this.agility_mod = (() => _agility)();
  this.dexterity_mod = (() => _dexterity)();
  this.constitution_mod = (() => _constitution)();
  this.intelligence_mod = (() => _intelligence)();
  this.perception_mod = (() => _perception)();
  this.power_mod = (() => _power)();
  this.willpower_mod = (() => _willpower)();

  // setters
  this.setStrength = (nbr) =>
  {
    verifyAttribute(nbr);
    _strength = nbr;
  };

  this.setAgility = (nbr) =>
  {
    verifyAttribute(nbr);
    _agility = nbr;
  };

  this.setDexterity = (nbr) =>
  {
    verifyAttribute(nbr);
    _dexterity = nbr;
  };

  this.setConstitution = (nbr) =>
  {
    verifyAttribute(nbr);
    _constitution = nbr;
  };

  this.setIntelligence = (nbr) =>
  {
    verifyAttribute(nbr);
    _intelligence = nbr;
  };

  this.setPerception = (nbr) =>
  {
    verifyAttribute(nbr);
    _perception = nbr;
  };

  this.setPower = (nbr) =>
  {
    verifyAttribute(nbr);
    _power = nbr;
  };

  this.setWillpower = (nbr) =>
  {
    verifyAttribute(nbr);
    _willpower = nbr;
  };
}

// Could be externalized to a different place, like char_building_rules
function calculateMod(attr_value)
{
  switch()
}

function verifyAttribute(nbr)
{
  try
  {
    ERROR_CHECKER.checkNaN(nbr);
    ERROR_CHECKER.checkNaI(nbr);
    ERROR_CHECKER.checkRange(nbr, 0, Number.MAX_VALUE);
  }

  catch(err)
  {
    err.message = `${err.name}: Invalid attribute value assigned: ${err.message}`;
    throw err;
  }
}
