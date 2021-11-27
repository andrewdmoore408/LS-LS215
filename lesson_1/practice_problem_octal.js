// Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number.Implement the conversion yourself: do not use something else to perform the conversion for you.

function octalToDecimal(numberString) {
  const OCTAL_BASE = 8;

  const digits = numberString.split('').reverse().map((char, index) => {
    return Number(char) * (OCTAL_BASE ** index);
  });

  return digits.reduce((total, currentDigit) => total + currentDigit);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));         // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9