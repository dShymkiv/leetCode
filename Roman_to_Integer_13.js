// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/description/

let romanToInt = function(s) {
  let arr = s.split("");
  let num = 0;
  let sum = 0;
  let prev = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    switch (arr[i]) {
      case 'I': num = 1; break;
      case 'V': num = 5; break;
      case 'X': num = 10; break;
      case 'L': num = 50; break;
      case 'C': num = 100; break;
      case 'D': num = 500; break;
      case 'M': num = 1000; break;
    }
    if (prev > num) {
      num = -num;
    }
    sum += num;
    prev = num
  }
  return sum;
};


const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  const integers = s.split('').map(c => roman[c]);

  return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
};
