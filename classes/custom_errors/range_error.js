
exports.new = (...args) => new RangeError(...args);

class RangeError extends Error
{
  constructor(message)
  {
    super(message);
    this.name = "RangeError";
  }
}
