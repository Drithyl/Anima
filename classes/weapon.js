
const JSON_WEAPONS = require("../data/weapons.json");

exports.new = function(...args)
{
  return new Weapon(...args);
};

function Weapon(id)
{
  let weapon_data = JSON_WEAPONS.bastard_sword;

  for (var key in weapon_data)
  {
    this[key] = weapon_data[key];
  }
}
