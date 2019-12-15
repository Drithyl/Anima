
const ERROR_CHECKER = require("../error_checker.js");

// See Douglas Crockford's article on private members: https://www.crockford.com/javascript/private.html

exports.new = function(...args)
{
  return new Resistances(...args);
};

function Resistances(phys, dis, psn, mag, psy)
{
  // private vars
  var _physical = phys;
  var _disease = dis;
  var _poison = psn;
  var _magic = mag;
  var _psychic = psy;

  // getters (using the self-invoking pattern), since the get keyword can only be used in class syntax
  this.physical = (() => _strength)();
  this.disease = (() => _disease)();
  this.poison = (() => _poison)();
  this.magic = (() => _magic)();
  this.psychic = (() => _psychic)();

  // setters
  this.setPhysicalResistance = (nbr) =>
  {
    verifyResistance(nbr);
    _physical = nbr;
  };

  this.setDiseaseResistance = (nbr) =>
  {
    verifyResistance(nbr);
    _disease = nbr;
  };

  this.setPoisonResistance = (nbr) =>
  {
    verifyResistance(nbr);
    _poison = nbr;
  };

  this.setMagicResistance = (nbr) =>
  {
    verifyResistance(nbr);
    _magic = nbr;
  };

  this.setPsychicResistance = (nbr) =>
  {
    verifyResistance(nbr);
    _psychic = nbr;
  };
}

function verifyResistance(nbr)
{
  try
  {
    ERROR_CHECKER.checkNaN(nbr);
    ERROR_CHECKER.checkNaI(nbr);
    ERROR_CHECKER.checkRange(nbr, 0, Number.MAX_VALUE);
  }

  catch(err)
  {
    err.message = `${err.name}: Invalid resistance value assigned: ${err.message}`;
    throw err;
  }
}
