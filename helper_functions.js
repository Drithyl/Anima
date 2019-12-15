
Number.prototype.floorNearest = function(nearest)
{
  if (nearest === 0) throw new Error(`Cannot divide by zero.`);

  return Math.floor(this/nearest) * nearest;
};

Number.prototype.ceilNearest = function(nearest)
{
  if (nearest === 0) throw new Error(`Cannot divide by zero.`);

  return Math.ceil(this/nearest) * nearest;
};

Number.prototype.roundNearest = function(nearest)
{
  if (nearest === 0) throw new Error(`Cannot divide by zero.`);

  return Math.round(this/nearest) * nearest;
};

Number.prototype.min = function(min)
{
  if (this >= min)
  {
    return this;
  }

  else return min;
};

// counts how many times a pattern of numbers can be subtracted
// from the number, i.e. the pattern [1,2,2] occurs 4 times in
// the number 6 (6 - 1 - 2 - 2 - 1, any more is below zero)
Number.prototype.countPattern = function(pattern)
{
  var count = 0;
  var nbr = this;
  var patternIndex = 0;

  while(nbr > 0)
  {
    if (nbr - pattern[patternIndex] >= 0)
    {
      count++;
      nbr -= pattern[patternIndex];
      patternIndex = (patternIndex === pattern.length-1) ? 0 : patternIndex++;
    }

    else break;
  }

  return count;
};
