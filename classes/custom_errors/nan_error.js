
// See https://javascript.info/custom-errors and https://medium.com/p/aa891b173f87/responses/show

exports.new = (...args) => new NaNError(...args);

class NaNError extends Error
{
  constructor(message)
  {
    super(message);
    this.name = "NaNError";
  }
}
