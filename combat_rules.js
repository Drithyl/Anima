
// Singleton

// dependencies
const ROLLS = require("./rolls.js");


// exports
exports.processMeleeAttack = (...args) =>   _processMeleeAttack(...args);
exports.attackDifference = (...args) =>     _attackDifference(...args);
exports.armorProtection = (...args) =>      _armorProtection(...args);
exports.damageInflicted = (...args) =>      _damageInflicted(...args);
exports.counterattackBonus = (...args) =>   _counterattackBonus(...args);
exports.weaponFinalDamage = (...args) =>    _damageInflicted(...args);


// rules
const _processMeleeAttack = function(attacker, target, weapon)
{
  console.log(weapon);
  var attack_roll = ROLLS.attack(attacker, weapon);
  var defence_roll = ROLLS.defence(target);
  var difference = _attackDifference(attack_roll, defence_roll);
  var armor_protection;
  var damage_inflicted;
  var counterattack_bonus;

  console.log(`${attacker.name} rolled an attack of ${attack_roll.roll}+${attack_roll.modifier}=${attack_roll.total}. Fumbled? ${attack_roll.fumbled}. Fumble level: ${attack_roll.fumble_level}. Open roll? ${attack_roll.open_roll}. Open roll times: ${attack_roll.open_roll_times}.`)
  console.log(`${target.name} rolled a defence of ${defence_roll.roll}+${defence_roll.modifier}=${defence_roll.total}. Fumbled? ${defence_roll.fumbled}. Fumble level: ${defence_roll.fumble_level}. Open roll? ${defence_roll.open_roll}. Open roll times: ${defence_roll.open_roll_times}.`)

  // auto-miss
  if (attack_roll.fumbled === true)
  {
    return `${attacker.name} fumbled his attack against ${target.name} using a ${weapon.name} with a fumble level of ${attack_roll.fumble_level}.`;
  }

  // draw
  if (difference === 0)
  {
    return "Draw.";
  }

  // attack succeeds
  if (difference > 0)
  {
    armor_protection = _armorProtection(weapon, target);
    damage_inflicted = _damageInflicted(attacker, weapon, difference, armor_protection);
    return `${attacker.name} inflicted ${damage_inflicted} damage to ${target.name} using a ${weapon.name}.`;
  }

  // defence succeeds
  if (difference < 0)
  {
    counterattack_bonus = _counterattackBonus(difference);
    return `${target.name} defended itself from ${attacker.name}'s attack with a difference of ${difference} and can counterattack with a +${counterattack_bonus} bonus.`;
  }
};

const _attackDifference = (attack, defence) => attack.total - defence.total;
const _armorProtection = (weapon, target) => target.getArmorRating(weapon);

// (attack total - defence total - 20 for absorption - (10 * armor protection)) / 100 for percentage
// percentage multiplied by weapon final damage and floored
const _damageInflicted = function(attacker, weapon, attack_difference, armor_protection)
{
  var weapon_final_damage = _weaponFinalDamage(attacker, weapon);
  var damage_percentage = ((attack_difference - 20 - (armor_protection * 10)) / 100).toFixed(1);
  var damage_inflicted = Math.floor(damage_percentage * weapon_final_damage).min(0);

  console.log(`Attack difference is ${attack_difference}`);
  console.log(`Armor protection is ${armor_protection}`);
  console.log(`Damage percentage is ${Math.floor(damage_percentage*100)}%`);
  console.log(`Weapon final damage is ${weapon_final_damage}`);
  console.log(`Damage inflicted is ${damage_inflicted}`);

  return damage_inflicted;
};

// counterattack bonus is half of the difference of the defence over the attack,
// rounded down to the nearest group of 5
const _counterattackBonus = function(defence_difference)
{
  var halfDifference = Math.abs(defence_difference) * 0.5;
  return halfDifference.floorNearest(5);
};

const _weaponFinalDamage = function(attacker, weapon)
{
  console.log(`Attacker strength is ${attacker.attributes.strength}`);
  console.log(`Weapon damage is ${weapon.damage}`);
  return attacker.attributes.strength + weapon.damage;
};
