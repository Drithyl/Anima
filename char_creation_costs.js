


exports.CharacterCreationCosts = new (function CharacterCreationCosts()
{
  var _combat_ability_limit = (char_class) =>
    

  // total life points is the sum of base, lp from multiples, lp from level and anything special
  var _totalLifePoints = (base, lp_from_multiples, lp_from_level, special) =>
    base + lp_from_multiples + lp_from_level + special;

  // base life points are 20 (for every living being) + constitution score * 10 + constitution modifier (retroactive)
  var _baseLifePoints = (attributes) =>
    20 + (attributes.constitution * 10) + exports.getAttributeMod(attributes.constitution);

  // each multiple gives as many life points as the constitution modifier (retroactive)
  var _lifePointsFromMultiples = (multiples, attributes) =>
    multiples * exports.getAttributeMod(attributes.constitution);

  // a character earns X amounts of life points per level, determined by the class
  var _lifePointsFromLevel = (level, char_class) =>
    level * char_class.life_per_level;

  // starts at 30 on level 1, and +5 with each additional level
  var _presence = (level) => 30 + (level-1) * 5;

  var _diseaseResistance = (presence, attributes) =>
    calculateResistance(presence, exports.getAttributeMod(attributes.constitution));

  var _physicalResistance = (presence, attributes) =>
    calculateResistance(presence, exports.getAttributeMod(attributes.constitution));

  var _venomResistance = (presence, attributes) =>
    calculateResistance(presence, exports.getAttributeMod(attributes.constitution));

  var _magicResistance = (presence, attributes) =>
    calculateResistance(presence, exports.getAttributeMod(attributes.power));

  var _psychicResistance = (presence, attributes) =>
    calculateResistance(presence, exports.getAttributeMod(attributes.willpower));

  var _attributeModifier = (attr_value) =>
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

  // getters
  this.getTotalLifePoints = (...args) => _totalLifePoints(...args);
  this.getBaseLifePoints = (...args) => _baseLifePoints(...args);
  this.getLifePointsFromMultiples = (...args) => _lifePointsFromMultiples(...args);
  this.getLifePointsFromLevel = (...args) => _lifePointsFromLevel(...args);
  this.getPresence = (...args) => _presence(...args);
  this.getDiseaseResistance = (...args) => _diseaseResistance(...args);
  this.getPhysicalResistance = (...args) => _physicalResistance(...args);
  this.getVenomResistance = (...args) => _venomResistance(...args);
  this.getMagicResistance = (...args) => _magicResistance(...args);
  this.getPsychicResistance = (...args) => _psychicResistance(...args);
  this.getAttributeModifier = (...args) => _attributeModifier(...args);
})();

// presence score + relevant attribute modifier
function calculateResistance(presence, attribute_val)
{
  return presence + exports.getAttributeMod(attribute_val);
}
