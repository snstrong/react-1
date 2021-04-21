/**
 * Write a function called addCommas
 * which accepts a number
 * and converts it into a string
 * formatted with commas added for readability.
 * E.g., addCommas("123456789") // "123,456,789"
 */

function addCommas(argNum) {
  let neg = false;
  let num;
  if (argNum[0] === "-") {
    neg = true;
    num = argNum.substring(1);
  } else {
    num = argNum;
  }
  const len = num.length;
  if (len < 4) {
    console.log(argNum);
    return argNum;
  }
  const arr = [];
  for (let i = len - 1; i >= 3; i -= 3) {
    arr.unshift(num.substring(i - 2, i + 1));
  }

  const mod = len % 3;
  if (mod !== 0) {
    arr.unshift(num.substring(0, mod));
  } else {
    arr.unshift(num.substring(0, 3));
  }
  let digits = arr.join(",");
  if (neg === true) {
    digits = `-${digits}`;
  }
  console.log(digits);
  return digits;
}

module.exports = addCommas;
