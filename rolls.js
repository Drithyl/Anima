
// Singleton

// dependencies
const DICE = require("./dice.js");


// exports
exports.attack = (...args) =>   _attack(...args);
exports.defence = (...args) =>  _defence(...args);


// functions
const _attack = function(attacker, weapon)
{
  let attack = DICE.animaRoll();
  attack.modifier = attacker.getAttackBonusWithWeapon(weapon);

  if (attack.fumbled === true)
  {
    attack.total = attack.roll - attack.fumble_level + attack.modifier;
  }

  else attack.total = attack.roll + attack.modifier;

  // a final roll of less than 0 is considered 0
  attack.total = attack.total.min(0);
  return attack;
};

const _defence = function(defender)
{
  let defence = DICE.animaRoll();
  defence.modifier = defender.defence_bonus;

  if (defence.fumbled === true)
  {
    defence.total = defence.roll - defence.fumble_level + defence.modifier;
  }

  else defence.total = defence.roll + defence.modifier;

  // a final roll of less than 0 is considered 0
  defence.total = defence.total.min(0);
  return defence;
};
