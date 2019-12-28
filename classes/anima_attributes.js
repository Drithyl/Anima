
const CLASS_ATTRIBUTE = require("./attribute.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new Attributes(...args);
};

function Attributes(str, agi, dex, cons, int, per, pow, will)
{
  // private vars
  var _strength =     CLASS_ATTRIBUTE.new("Strength", str);
  var _agility =      CLASS_ATTRIBUTE.new("Agility", agi);
  var _dexterity =    CLASS_ATTRIBUTE.new("Dexterity", dex);
  var _constitution = CLASS_ATTRIBUTE.new("Constitution", cons);
  var _intelligence = CLASS_ATTRIBUTE.new("Intelligence", int);
  var _perception =   CLASS_ATTRIBUTE.new("Perception", per);
  var _power =        CLASS_ATTRIBUTE.new("Power", pow);
  var _willpower =    CLASS_ATTRIBUTE.new("Willpower", will);

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.strength_name =      (() => _strength.name)();
  this.agility_name =       (() => _agility.name)();
  this.dexterity_name =     (() => _dexterity.name)();
  this.constitution_name =  (() => _constitution.name)();
  this.intelligence_name =  (() => _intelligence.name)();
  this.perception_name =    (() => _perception.name)();
  this.power_name =         (() => _power.name)();
  this.willpower_name =     (() => _willpower.name)();

  this.strength_score =     (() => _strength.score)();
  this.agility_score =      (() => _agility.score)();
  this.dexterity_score =    (() => _dexterity.score)();
  this.constitution_score = (() => _constitution.score)();
  this.intelligence_score = (() => _intelligence.score)();
  this.perception_score =   (() => _perception.score)();
  this.power_score =        (() => _power.score)();
  this.willpower_score =    (() => _willpower.score)();

  this.strength_mod =     (() => _strength.modifier)();
  this.agility_mod =      (() => _agility.modifier)();
  this.dexterity_mod =    (() => _dexterity.modifier)();
  this.constitution_mod = (() => _constitution.modifier)();
  this.intelligence_mod = (() => _intelligence.modifier)();
  this.perception_mod =   (() => _perception.modifier)();
  this.power_mod =        (() => _power.modifier)();
  this.willpower_mod =    (() => _willpower.modifier)();

  // setters
  this.setStrengthScore =     (nbr) => _strength.setScore(nbr);
  this.setAgilityScore =      (nbr) => _agility.setScore(nbr);
  this.setDexterityScore =    (nbr) => _dexterity.setScore(nbr);
  this.setConstitutionScore = (nbr) => _constitution.setScore(nbr);
  this.setIntelligenceScore = (nbr) => _intelligence.setScore(nbr);
  this.setPerceptionScore =   (nbr) => _perception.setScore(nbr);
  this.setPowerScore =        (nbr) => _power.setScore(nbr);
  this.setWillpowerScore =    (nbr) => _willpower.setScore(nbr);
}
