
const CLASS_CHARACTER = require("./classes/character.js");
const CLASS_WEAPON = require("./classes/weapon.js");
const COMBAT_RULES = require("./combat_rules.js");

const WEAPON = CLASS_WEAPON.new("bastard_sword");
const ATTACKER = CLASS_CHARACTER.new("Drithyl", WEAPON);
const DEFENDER = CLASS_CHARACTER.new("Zyrke");

var result = COMBAT_RULES.processMeleeAttack(ATTACKER, DEFENDER, WEAPON);

console.log(result);
