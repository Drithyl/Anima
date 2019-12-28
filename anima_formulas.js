
// Singleton

// exports
exports.getTotalLifePoints = (...args) =>          _totalLifePoints(...args);
exports.getBaseLifePoints = (...args) =>           _baseLifePoints(...args);
exports.getLifePointsFromMultiples = (...args) =>  _lifePointsFromMultiples(...args);
exports.getLifePointsFromLevel = (...args) =>      _lifePointsFromLevel(...args);
exports.getPresence = (...args) =>                 _presence(...args);
exports.getDiseaseResistance = (...args) =>        _diseaseResistance(...args);
exports.getPhysicalResistance = (...args) =>       _physicalResistance(...args);
exports.getVenomResistance = (...args) =>          _venomResistance(...args);
exports.getMagicResistance = (...args) =>          _magicResistance(...args);
exports.getPsychicResistance = (...args) =>        _psychicResistance(...args);
exports.getAttributeModifier = (...args) =>        _attributeModifier(...args);
exports.getFinalDamageScore = (...args) =>        _getFinalDamageScore(...args);

// functions
// total life points is the sum of base, lp from multiples, lp from level and anything special
const _totalLifePoints = (base, lp_from_multiples, lp_from_level, special) =>
  base + lp_from_multiples + lp_from_level + special;

// base life points are 20 (for every living being) + constitution score * 10 + constitution modifier (retroactive)
const _baseLifePoints = (attributes) =>
  20 + (attributes.constitution * 10) + _attributeModifier(attributes.constitution);

// each multiple gives as many life points as the constitution modifier (retroactive)
const _lifePointsFromMultiples = (multiples, attributes) =>
  multiples * _attributeModifier(attributes.constitution);

// a character earns X amounts of life points per level, determined by the class
const _lifePointsFromLevel = (level, char_class) =>
  level * char_class.life_per_level;

// starts at 30 on level 1, and +5 with each additional level
const _presence = (level) => 30 + (level-1) * 5;

const _diseaseResistance = (presence, attributes) =>
  calculateResistance(presence, _attributeModifier(attributes.constitution));

const _physicalResistance = (presence, attributes) =>
  calculateResistance(presence, _attributeModifier(attributes.constitution));

const _venomResistance = (presence, attributes) =>
  calculateResistance(presence, _attributeModifier(attributes.constitution));

const _magicResistance = (presence, attributes) =>
  calculateResistance(presence, _attributeModifier(attributes.power));

const _psychicResistance = (presence, attributes) =>
  calculateResistance(presence, _attributeModifier(attributes.willpower));

const _attributeModifier = (attr_value) =>
{
  if (attr_value === 1)   return -30;
  if (attr_value === 2)   return -20;
  if (attr_value === 3)   return -10;
  if (attr_value === 4)   return -5;

  // Starting at 5, the modifiers follow a 1,2,2 pattern, by which the
  // modifier goes up +5 with 1 more attribute value, then with 2 more,
  // then 2 more, then back to +5 in the next 1 more again. See below:
  //
  // attr = 5     mod = +0
  // attr = 6-7   mod = +5
  // attr = 8-9   mod = +10
  // attr = 10    mod = +15
  // attr = 11-12 mod = +20
  // attr = 13-14 mod = +25
  // attr = 15    mod = +30
  if (attr_value >= 5)    return (attr_value - 5).countPattern([1,2,2]) * 5;
};

const _getFinalDamageScore = function(strength_mod, weapon_damage)
{
  console.log(`Strength modifier is ${strength_mod}`);
  console.log(`Weapon damage is ${weapon_damage}`);
  return strength_mod + weapon_damage;
};

// local helper function, presence score + relevant attribute modifier
function calculateResistance(presence, attribute_val)
{
  return presence + _attributeModifier(attribute_val);
}
