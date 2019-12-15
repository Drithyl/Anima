
// Singleton

exports.range = (min, max) => Math.floor(Math.random() * (max-min+1) + min);
exports.dAny = (sides, min = 1) => Math.floor(Math.random() * (sides-min) + min);
exports.d100 = () => Math.floor(Math.random() * 100 + 1);

// roll d100 and returns an object with:
// .roll: the final roll number
// .fumbled: whether the roll fumbled or not
// .open_roll: whether the roll was open_ended
exports.anima = function(threshold = 97)
{
  var roll = exports.d100();

  var fumbled = (roll <= 3) ? true : false;
  var fumble_level = (fumbled === true) ? exports.d100() : 0;

  var open_roll = (roll >= threshold) ? true : false;
  var open_roll_times = (open_roll === true) ? 1 : 0;

  if (roll >= 97 && open_roll === true)
  {
    let new_roll = exports.anima(threshold+1);
    roll += new_roll.roll;

    // count the times that open rolls happened, if none this will add 0
    open_roll_times += new_roll.open_roll_times;
  }

  return {roll, fumbled, fumble_level, open_roll, open_roll_times};
};
