module.exports = function getZerosCount(number, base) {
  let newNumber = [];
  let x = number;

  while (true) {
    if (x % base < 1) {
      break;
    }
    newNumber.push(x % base);
    x = Math.floor(x / base);
  }
  let zeros = +newNumber.reverse().join('');

  function calculateTailZeros(number) {
    let countZeroes = 0;
    let counter = 1;
    while (true) {
      let zeroes = Math.floor(number / Math.pow(5, counter));
      if (zeroes < 1) {
        break;
      }
      countZeroes += zeroes;
      counter++;
    }
    return countZeroes;
  }
  return calculateTailZeros(zeros);
}