module.exports = function getZerosCount(number, base) {
  function getMultiply(x) {
    let firstFactor = 2;
    let arrOfFactors = [];
    let base2 = x;
    let num = 1;
    while (base2 !== num) {
      if (x % firstFactor === 0) {
        arrOfFactors.push(firstFactor);
        x = x / firstFactor;
        num *= firstFactor;
      } else {
        firstFactor++;
      }
    }
    return arrOfFactors;
  }

  function countZeroes(factorial, num) {
    let arrOfZeros = [];
    for (let i = 0; i < num.length; i++) {
      let counter = 1;
      let sum = 0;
      let j = num[i];
      while (factorial / Math.pow(num[i], counter) > 1) {
        let facotrs = Math.floor(factorial / Math.pow(num[i], counter));
        sum += facotrs;
        counter++;
      }
      arrOfZeros.push(sum);
    }
    let zeros = arrOfZeros.pop();
    return zeros;
  }

  let j = base;
  let y = number;
  let factors = getMultiply(j);
  let zeros = countZeroes(y, factors);

  return zeros;
}