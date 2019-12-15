
exports.new = (...args) => new MultipleError(...args);

class MultipleError extends Error
{
  constructor(message)
  {
    super(message);
    this.name = "MultipleError";
  }
}
