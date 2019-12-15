
exports.new = (...args) => new NotAnInteger(...args);

class NotAnInteger extends Error
{
  constructor(message)
  {
    super(message);
    this.name = "NotAnInteger";
  }
}
