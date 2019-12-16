
// Singleton

// exports
exports.range = (...args) =>      _range(...args);
exports.dAny = (...args) =>       _dAny(...args);
exports.d100 = (...args) =>       _d100(...args);
exports.animaRoll = (...args) =>  _animaRoll(...args);

// functions
const _range = (min, max) => Math.floor(Math.random() * (max-min+1) + min);
const _dAny = (sides, min = 1) => Math.floor(Math.random() * (sides-min) + min);
const _d100 = () => Math.floor(Math.random() * 100 + 1);

// roll d100 and returns an object with:
// .roll: the final roll number
// .fumbled: whether the roll fumbled or not
// .open_roll: whether the roll was open_ended
const _animaRoll = function(threshold = 97)
{
  var roll = _d100();

  var fumbled = (roll <= 3) ? true : false;
  var fumble_level = (fumbled === true) ? _d100() : 0;

  var open_roll = (roll >= threshold) ? true : false;
  var open_roll_times = (open_roll === true) ? 1 : 0;

  if (roll >= 97 && open_roll === true)
  {
    let new_roll = _animaRoll(threshold+1);
    roll += new_roll.roll;

    // count the times that open rolls happened, if none this will add 0
    open_roll_times += new_roll.open_roll_times;
  }

  return {roll, fumbled, fumble_level, open_roll, open_roll_times};
};
