
// Singleton

// dependencies
const CLASS_NAN_ERROR = require("./classes/custom_errors/nan_error.js");
const CLASS_RANGE_ERROR = require("./classes/custom_errors/range_error.js");
const CLASS_MULTIPLE_ERROR = require("./classes/custom_errors/multiple_error.js");
const CLASS_NAI_ERROR = require("./classes/custom_errors/not_an_integer_error.js");


// exports
exports.checkNaN = (...args) => _checkNaN(...args);
exports.checkNaI = (...args) => _checkNaI(...args);
exports.checkRange = (...args) => _checkRange(...args);
exports.checkIsMultiple = (...args) => _checkIsMultiple(...args);


// functions
const _checkNaN = function(nbr)
{
  if (isNaN(nbr) === true)
  throw CLASS_NAN_ERROR.new(`Value is not a number.`);
};

const _checkNaI = function(nbr)
{
  if (nbr.isInteger() === false)
  throw CLASS_NAI_ERROR.new(`Value is not an integer.`);
};

const _checkRange = function(nbr, min, max)
{
  if (nbr < min)
  throw CLASS_RANGE_ERROR.new(`Value cannot be less than ${min}.`);

  if (nbr > max)
  throw CLASS_RANGE_ERROR.new(`Value cannot be more than ${max}.`);
};

const _checkIsMultiple = function(nbr, multiple)
{
  if (nbr % multiple !== 0)
  throw CLASS_MULTIPLE_ERROR.new(`Value must be a multiple of ${multiple}.`);
};
