module.exports = function reverse (n) {
  let symbol,
    result = 0;

  while (n) {
    symbol = n % 10;
    result = (result * 10) + symbol;
    n = parseInt(n / 10);
  };

  return Math.abs(result);
}
